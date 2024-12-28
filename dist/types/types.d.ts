export declare const categories: readonly ["Tools", "Languages & Frameworks", "Platforms", "Techniques"];
export type Category = typeof categories[number];
export declare const status: readonly ["✅ Use", "🚧 Try", "🤔 Reconsider", "🚫 Hold"];
export type Status = typeof status[number];
export type Entry = {
    id: number;
    originId: string;
    category: Category;
    status: Status;
    label: string;
    icon: [IconType, string];
};
type IconType = "url" | "data" | "emoji" | "none";
export {};
