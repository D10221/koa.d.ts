
// Type definitions for Koa 2.x
// Project: http://koajs.com
// original Definitions by: DavidCai1993 <https://github.com/DavidCai1993>
// teaked by D10221

declare module "koa" {
    import { EventEmitter } from "events";
    import * as http from "http";
    import * as net from "net";

    namespace Koa {

        export interface Context extends Request, Response {
            body?: any;
            request?: Request;
            response?: Response;
            originalUrl?: string;
            state?: any;
            name?: string;
            cookies?: any;
            writable?: Boolean;
            respond?: Boolean;
            app?: Koa;
            req?: http.IncomingMessage;
            res?: http.ServerResponse;
            onerror(err: any): void;
            toJSON(): any;
            inspect(): any;
            throw(code?: any, message?: any): void;
            assert(test: any, status: number, message: string): void;
        }

        export interface Request {
            _querycache?: string;
            app?: Koa;
            req?: http.IncomingMessage;
            res?: http.ServerResponse;
            response?: Response;
            ctx?: Context;
            headers?: any;
            header?: any;
            method?: string;
            length?: any;
            url?: string;
            origin?: string;
            originalUrl?: string;
            href?: string;
            path?: string;
            querystring?: string;
            query?: any;
            search?: string;
            idempotent?: Boolean;
            socket?: net.Socket;
            protocol?: string;
            host?: string;
            hostname?: string;
            fresh?: Boolean;
            stale?: Boolean;
            charset?: string;
            secure?: Boolean;
            ips?: Array<string>;
            ip?: string;
            subdomains?: Array<string>;
            accept?: any;
            type?: string;
            accepts?: () => any;
            acceptsEncodings?: () => any;
            acceptsCharsets?: () => any;
            acceptsLanguages?: () => any;
            is?: (types: any) => any;
            toJSON?: () => any;
            inspect?: () => any;
            get?: (field: string) => string;
        }

        export interface Response {
            _body?: any;
            _explicitStatus?: Boolean;
            app?: Koa;
            res?: http.ServerResponse;
            req?: http.IncomingMessage;
            ctx?: Context;
            request?: Request;
            socket?: net.Socket;
            header?: any;
            headers?: any;
            status?: number;
            message?: string;
            type?: string;
            body?: any;
            length?: any;
            headerSent?: Boolean;
            lastModified?: Date;
            etag?: string;
            writable?: Boolean;
            is?: (types: any) => any;
            redirect?: (url: string, alt: string) => void;
            attachment?: (filename?: string) => void;
            vary?: (field: string) => void;
            get?: (field: string) => string;
            set?: (field: any, val: any) => void;
            remove?: (field: string) => void;
            append?: (field: string, val: any) => void;
            toJSON?: () => any;
            inspect?: () => any;
        }

        /**
         * Should any be Koa?.Context? 
         */
        export type Next = ()=> Promise<any>;
        /**
         * NEW! 
         */
        export type Middleware = (ctx?: Koa.Context, next?: Next) => Koa|Promise<Koa>|any;
    }


    class Koa extends EventEmitter {
        keys: Array<string>;
        subdomainOffset: number;
        proxy: Boolean;
        server: http.Server;
        env: string;
        context: Koa.Context;
        request: Koa.Request;
        response: Koa.Response;
        silent: Boolean;
        constructor();
        use(middleware: Koa.Middleware): Koa|Promise<Koa>;
        callback(): (req: http.IncomingMessage, res: http.ServerResponse) => void;
        listen(port?: number, callback?: Function): http.Server;
        toJSON(): any;
        inspect(): any;
        onerror(err: any): void;
    }

    namespace Koa { }
    export = Koa;
}