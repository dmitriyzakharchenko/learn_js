const myBind = function(func, context) {
    const bindArgs = [].slice.call(arguments, 2);
    return function() {
        const funcArgs = [].slice.call(arguments);
        return func.apply(context, bindArgs.concat(funcArgs));
    };
};
