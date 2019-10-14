enum Direction {North, South, East, West}

export function runDemo() {
    let var1: boolean = false;
    let var2: number = 1234;
    let var3: string = 'abcdef';
    let var4: number[] = [12, 34, 56];
    let var5: Array<number> = [12, 34, 56];
    let var6: Direction = Direction.South;
    let var7: [number, string, boolean] = [0, "", false];
    var7[0] = 123;
    var7[1] = "abc";
    var7[2] = true;


    let var8: any = 123;
    // The code below is valid but would fail at runtime
    // var8 = var8.toLowerCase();

    let var9: unknown = "abcdef";
    // The code below is invalid but would succeed at runtime
    // var9 = var9.toLowerCase();


    let var11: string = <string>var9;
    let var10: string = var9 as string;


    let node = document.getElementById("theOutput");
    if (node != null) {
        let values: any[] = [var1, var2, var3, var4, var5, var6, var7, var8, var9];
        for (let x of values) {
            node.innerHTML = node.innerHTML + x + "<br/>";
        }
    }
}
