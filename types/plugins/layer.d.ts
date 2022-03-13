export interface LayerInterface {
    open<T = any>(name: string, props?: Record<string, unknown>): Promise<T>
    close<T = any>(key: string, props?: Record<string, unknown>): Promise<T>
    alert<T = any>(props?: Record<string, unknown>): Promise<T>
    confirm<T = any>(props?: Record<string, unknown>): Promise<T>
    closeAll<T = any>(): Promise<T>
}

declare module 'vue/types/vue' {
    interface Vue {
        $layer: LayerInterface
    }
}
