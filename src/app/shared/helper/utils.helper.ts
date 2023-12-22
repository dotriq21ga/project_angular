export function checkNumber(value: number) {
    return value !== undefined && value !== null && !Number.isNaN(value);
}