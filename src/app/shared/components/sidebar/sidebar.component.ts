import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { AuthService } from 'src/app/modules/authentication/services/auth.service';
import { ExampleFlatNode, FoodNode, IUser, TREE_DATA } from '../../type/shared';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

  user!: IUser;

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      icon: node.icon,
      level: level,
      link: node.link,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private auth: AuthService) {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {
    this.auth.getUser().subscribe((json) => {
      this.user = json as IUser;
    })
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}