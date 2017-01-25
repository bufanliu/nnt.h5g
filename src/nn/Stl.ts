module nn {

    // 提供一个类型，用来声明利用Object来模拟Map的类型
    export class KvObject <K, V> {}

    declare var Map;
    declare var Set;
    var ECMA6_NATIVE:boolean = true;
    if (typeof(Map) == 'undefined')
        ECMA6_NATIVE = false;

    export class CMap <K, V> {

        constructor() {
            if (ECMA6_NATIVE)
                this._imp = new Map();
            else
                this._imp = {};
        }

        private _imp:any;

        private _n_clear() {
            this._imp.clear();
        }

        private _i_clear() {
            this._imp = {};
        }

        clear:()=>void = ECMA6_NATIVE ? this._n_clear : this._i_clear;        

        private _n_delete(k:K) {
            this._imp.delete(k);
        }

        private _i_delete(k:K) {
            delete this._imp[<any>k];
        }

        delete:(k:K)=>void = ECMA6_NATIVE ? this._n_delete : this._i_delete;
        
        private _n_foreach(cb:(k:K, v:V)=>void, ctx?:any) {
            this._imp.forEach((v:V, k:K)=>{
                cb.call(ctx, k, v);
            });
        }

        private _i_foreach(cb:(k:K, v:V)=>void, ctx?:any) {
            var ks = Object.keys(this._imp);
            ks.forEach(function(k) {
                cb.call(ctx, k, this._imp[k]);
            }, this);            
        }

        forEach:(cb:(k:K, v:V)=>void, ctx?:any)=>void = ECMA6_NATIVE ? this._n_foreach : this._i_foreach;

        private _n_has(k:K):boolean {
            return this._imp.has(k);
        }

        private _i_has(k:K):boolean {
            return this._imp.hasOwnProperty(<any>k);
        }

        has:(k:K)=>boolean = ECMA6_NATIVE ? this._n_has : this._i_has;

        private _n_length():number {
            return this._imp.size;
        }

        private _i_length():number {
            return Object.keys(this._imp).length;
        }
        
        get length():number {
            return ECMA6_NATIVE ? this._n_length() : this._i_length();
        }

        private _n_set(k:K, v:V) {
            this._imp.set(k, v);
        }

        private _i_set(k:K, v:V) {
            this._imp[<any>k] = v;
        }

        set:(k:K, v:V)=>void = ECMA6_NATIVE ? this._n_set : this._i_set;
        
        private _n_get(k:K):V {
            return this._imp.get(k);
        }

        private _i_get(k:K):V {
            return this._imp[<any>k];
        }

        get:(k:K)=>V = ECMA6_NATIVE ? this._n_get : this._i_get;        
    }


    export class CSet <V> {

        constructor() {
            if (ECMA6_NATIVE) {
                this._imp = new Set();
            } else {
                this._map = new CMap<any, V>();
                this._arr = new Array<V>();
            }
        }

        private _imp:any;
        private _map:CMap<any, V>;
        private _arr:Array<V>;

        private _n_add(o:V):boolean {
            return this._imp.add(o);
        }

        private _i_add(o:V):boolean {
            var k = Js.hashKey(o);
            if (this._map[k] != undefined)
                return false;
            this._map[k] = true;
            this._arr.push(o);
            return true;
        }

        add:(o:V)=>boolean = ECMA6_NATIVE ? this._n_add : this._i_add;

        private _n_has(o:V):boolean {
            return this._imp.has(o);
        }

        private _i_has(o:V):boolean {
            var k = Js.hashKey(o);
            return this._map[k] != undefined;       
        }

        has:(o:V)=>boolean = ECMA6_NATIVE ? this._n_has : this._i_has;

        private _n_delete(o:V):boolean {
            return this._imp.delete(o);
        }

        private _i_delete(o:V):boolean {
            var k = Js.hashKey(o);
            if (this._map[k] == undefined)
                return false;
            this._map.delete(k);
            var idx = this._arr.indexOf(o);
            this._arr.splice(idx, 1);
            return true;
        }

        delete:(o:V)=>boolean = ECMA6_NATIVE ? this._n_delete : this._i_delete;

        private _n_size():number {
            return this._imp.size;
        }

        private _i_size():number {
            return this._arr.length;
        }
        
        get size():number {
            return ECMA6_NATIVE ? this._n_size() : this._i_size();
        }

        private _n_clear() {
            this._imp.clear();
        }

        private _i_clear() {
            if (this._arr.length) {
                this._map.clear();
                this._arr.length = 0;
            }
        }

        clear:()=>void = ECMA6_NATIVE ? this._n_clear : this._i_clear;

        private _n_foreach(cb:(o:V)=>void, ctx?:any) {
            this._imp.forEach(cb, ctx);
        }

        private _i_foreach(cb:(o:V)=>void, ctx?:any) {
            if (this._arr.length)
                this._arr.forEach(cb, ctx);
        }

        forEach:(cb:(o:V)=>void, ctx?:any)=>void = ECMA6_NATIVE ? this._n_foreach : this._i_foreach;
    }

}
