#!/usr/bin/env node

const YT_WARPOUT = process.env.YT_WARPOUT || false;   // 设置为true时强制使用warp出站访问youtube,false时自动检测是否设置warp出站
const FILE_PATH = process.env.FILE_PATH || './.npm';  // sub.txt订阅文件路径
const SUB_PATH = process.env.SUB_PATH || 'app';       // 订阅sub路径，默认为sub,例如：https://google.com/sub
const UUID = process.env.UUID || '4f0d2a3b-078d-4e62-9cfe-a37b43bd9bcf';  // UUID,如果开启了哪吒v1,也会使用此uuid
const NEZHA_SERVER = process.env.NEZHA_SERVER || '';         // 哪吒面板地址,v1形式：nz.serv00.net:8008  v0形式：nz.serv00.net
const NEZHA_PORT = process.env.NEZHA_PORT || '';             // v1哪吒请留空，v0 agent端口，当端口为{443,8443,2087,2083,2053,2096}时，自动开启tls
const NEZHA_KEY = process.env.NEZHA_KEY || '';               // v1的NZ_CLIENT_SECRET或v0 agwnt密钥 
const ARGO_DOMAIN = process.env.ARGO_DOMAIN || 'appwrt.b.c.3.b.0.d.0.0.1.0.a.2.ip6.arpa';           // argo固定隧道域名,留空即使用临时隧道
const ARGO_AUTH = process.env.ARGO_AUTH || 'eyJhIjoiNjYzYWE3MDYwOTUwNzNhMjEyNGMxNjdhODRkYzk0ZTIiLCJ0IjoiYWM0ZGM4MjYtZDgyMy00YWY1LTgzMGUtNzExY2I2MDExMWU0IiwicyI6Ik9ETm1OREZrWm1NdE1UTTFNQzAwT1dSa0xUazBZemt0TldFMk9UQTJOR00xWXpFMiJ9';               // argo固定隧道token或json,留空即使用临时隧道
const ARGO_PORT = process.env.ARGO_PORT || 8001;             // argo固定隧道端口,使用token需在cloudflare控制台设置和这里一致，否则节点不通
const TUIC_PORT = process.env.TUIC_PORT || '';               // tuic端口，支持多端口的可以填写，否则留空
const HY2_PORT = process.env.HY2_PORT || '';                 // hy2端口，支持多端口的可以填写，否则留空
const REALITY_PORT = process.env.REALITY_PORT || '';         // reality端口，支持多端口的可以填写，否则留空
const CFIP = process.env.CFIP || 'cf.090227.xyz';            // 优选域名或优选IP
const CFPORT = process.env.CFPORT || 443;                    // 优选域名或优选IP对应端口    
const NAME = process.env.NAME || 'Appwrt';                 // 节点名称
const CHAT_ID = process.env.CHAT_ID || '5730060482';                   // Telegram chat_id  两个变量不全不推送节点到TG 
const BOT_TOKEN = process.env.BOT_TOKEN || '8350355612:AAElgOm7GUWNgYt0ve7RwJ-WTqbMhjmSRpo';               // Telegram bot_token 两个变量不全不推送节点到TG 

const FRP_IP = process.env.FRP_IP || '';                     // frp服务端公网ip
const FRP_PORT = process.env.FRP_PORT || '7000';             // frp服务端监听端口(通常为7000)
const FRP_TOKEN = process.env.FRP_TOKEN || '';               // frp服务端与客户端通信验证token
