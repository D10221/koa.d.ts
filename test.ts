import * as supertest from 'supertest';
import {assert} from 'chai';
import * as Koa from 'koa';

describe('koa',()=>{        
    
    it('works',(done)=>{

        const app = new Koa();
        
        let middleware : Koa.Middleware= (ctx:Koa.Context, next: Koa.Next)=>{
            ctx.body = 'ok';
        }

        app.use(middleware);

        supertest(app.listen()).get('/').expect(200, done);        
        
    })
});