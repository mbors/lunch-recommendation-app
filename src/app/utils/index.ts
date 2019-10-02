import { Omit } from "react-redux";

export abstract class Utils {
    /**
 * Get the object without the omitKeys
 * @param target
 * @param omitKeys
 */
    static omit<T extends object, K extends keyof T>(target: T, ...omitKeys: K[]): Omit<T, K> {
        return (Object.keys(target) as K[]).reduce(
            (res, key) => {
                if (!omitKeys.includes(key)) {
                    res[key] = target[key]
                }
                return res
            },
            {} as any,
        )
    }
}