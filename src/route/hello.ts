import { Router, Request, Response } from 'express'

export default function (router: Router): void {
    router.get('/hi', (req, res) => res.end('node-express'))
        
}