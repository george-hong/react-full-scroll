export class LoopPromise {
    funcList: any = [];
    push = (func: any, timeout?: number, funcIsPromise?: boolean) => {
        this.funcList.push({
            func,
            timeout,
            funcIsPromise
        });
        return this;
    };
    generateFuncList = (promise, index, config) => {
        const { timeout, funcIsPromise } = config;
        return promise.then(beforeConfig => {
            const beforeFunc = (beforeConfig && beforeConfig.func) || null;
            return new Promise(resolve => {
                if (funcIsPromise) {
                    setTimeout(() => {
                        if (beforeFunc) beforeFunc().then(() => resolve(config));
                        else resolve(config);
                    }, timeout || 0);
                } else {
                    setTimeout(() => {
                        beforeFunc && beforeFunc();
                        resolve(config);
                    }, timeout || 0);
                }
            });
        });
    };
    start = (resolveLoop?, rejectLoop?) => {
        const length = this.funcList.length;
        if (!length) return resolveLoop && resolveLoop();
        let promise = Promise.resolve();
        this.funcList.forEach((config, index) => {
            promise = this.generateFuncList(promise, index, config);
        });
        promise
            .then((beforeConfig: any) => {
                const { func, funcIsPromise, timeout } = beforeConfig;
                if (funcIsPromise) {
                    setTimeout(() => {
                        func().then(resolveLoop)
                            .catch(rejectLoop);
                    }, timeout || 0);
                } else {
                    setTimeout(() => {
                        func && func();
                        resolveLoop && resolveLoop();
                    }, timeout || 0);

                }
            });
    };
};