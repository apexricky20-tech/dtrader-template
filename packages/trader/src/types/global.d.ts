type KeysMatching<T,V>={[K in keyof T]-?:T[K] extends V?K:never}[keyof T];
type NoStringIndex<T>={[K in keyof T as string extends K?never:number extends K?never:K]:T[K]};
type DeepRequired<T>={[K in keyof T]-?:DeepRequired<T[K]>};
type RequireAtLeastOne<T,Keys extends keyof T=keyof T>=Pick<T,Exclude<keyof T,Keys>>&{[K in Keys]-?:Required<Pick<T,K>>&Partial<Pick<T,Exclude<Keys,K>>>}[Keys];
interface Window{DerivAppChannel?:{postMessage:(msg:string)=>void}}
interface TradingConfigData{[key:string]:unknown}
interface DerivAppChannelMessage{event:string;data?:TradingConfigData}
declare module "*.svg"{const c:string;export default c}
declare module "*.webp"{const c:string;export default c}
