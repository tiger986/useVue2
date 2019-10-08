import { deviceType } from "~/utils/deviceType";
export default function(context) {
  context.userAgent = process.server
    ? context.req.headers["user-agent"]
    : navigator.userAgent;
  context.deviceType = deviceType(context.userAgent);
  if (context.deviceType.type === "pc") {
    //   console.log('我是PC')
    // context.redirect(301,'https://wwww.baidu.com')
  }
}