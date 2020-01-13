
// export interface SetItem {
//     equals(other: ColumnMenu): boolean;
// }
export class ColumnMenu {
    constructor(private label, private value, private id = null) {
    }
}

// export class SetColumnMenu<T extends ColumnMenu> extends Set<T>{
//     // public SetColumnMenu() {
//     //     super();
//     //     return new Set();
//     // }

//     add(value: T): this {
//         let found = false;
//         this.forEach(item => {
//             if (value === item) {
//                 found = true;
//             }
//         });

//         if (!found) {
//             super.add(value);
//         }

//         return this;
//     }
// }
