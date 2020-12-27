export class LoopPromise {
    funcList: any = [];
    push = (func: any, timeout?: number) => {
        this.funcList.push({
            func,
            timeout
        });
        return this;
    };
    generateFuncList = (promise, index, config) => {
        promise.then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    const func = this.funcList[index].func;
                    func && func();
                    resolve(null);
                }, config.timeout || 0);
            })
        });
    }

    start = (resolveLoop?, rejectLoop?) => {
        const length = this.funcList.length;
        if (!length) return resolveLoop && resolveLoop();
        const promise = Promise.resolve();
        this.funcList.forEach((config, index) => {
            this.generateFuncList(promise, index, config);
        });
        promise
            .then(resolveLoop)
            .catch(rejectLoop);
    }
};