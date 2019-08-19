import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { DashboardService } from 'app/services/dashboard.service'
import { MessageModel } from 'app/model/message.model'
import { Store } from '@ngxs/store'
import { DictType, MessageType } from 'app/config/enum.config'
import { DictState } from 'app/store/state/dict.state'
import { LoggerService } from '@ngx-toolkit/logger'
import {Strophe, $pres, $msg} from 'strophe.js'
import {Type} from "class-transformer";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [DashboardService]
})
export class DashboardPage implements OnInit {
  public tabIndex = 0
  public messageDataSet: MessageModel[]
  public currentMessageType: any = ''
  public messageTypeNumber: any[] = []
  public fixedTabs = false
  private iconList = {}
  public slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: true
  }

  // XMPP服务器BOSH地址
  private BOSH_SERVICE = 'https:/mqtt.qloudpaas.com:5443/bosh/';

// 房间JID
  private ROOM_JID = 'fangjainhao@conference.192.168.1.204';

// XMPP连接
  private conn: Strophe.Connection;

// 当前状态是否连接
  private connected = false;

// 当前登录的JID
  private user = "yang2@mqtt.qloudpaas.com";
  private password = "Qloud@123";
  private admin = "admin@mqtt.qloudpaas.com";
//   private user = "admin@mqtt.qloudpaas.com";
//   private password = "p@ssw0rd";

  private $that;
  /**
   * 获取当前消息列表
   */
  public get currentMessageList() {
    return this.messageDataSet.filter(
      x => !this.currentMessageType || x.type === this.currentMessageType
    )
  }

  constructor(
    public router: Router,
    private dashboardService: DashboardService,
    public store: Store,
    private logger: LoggerService
  ) {}

  /**
   * 初始化
   */
  public ngOnInit() {

    this.getMessageList()
    // console.log(Strophe)

    var that = this;
    if(!this.connected) {
      this.conn = new Strophe.Connection(this.BOSH_SERVICE);
      this.conn.connect(this.user, this.password,   function(status) {
        if (status == Strophe.Status.CONNFAIL) {
          console.log('Strophe failed to connect.');
        }
        else if (status == Strophe.Status.CONNECTING) {
          console.log('Strophe is connecting.');
        }
        else if (status == Strophe.Status.AUTHFAIL) {
          console.log("登录失败！");
        }
        else if (status == Strophe.Status.DISCONNECTED) {
          console.log('Strophe is disconnected.');
          that.connected = false;
        }
        else if (status == Strophe.Status.CONNECTED) {
          console.log('Strophe is connected.');
          that.connected = true;

          // TODO
          // // 当接收到<message>节，调用onMessage回调函数
          that.conn.addHandler(function(msg) {

            console.log(msg);
            // 解析出<message>的from、type属性，以及body子元素
            var from = msg.getAttribute('from');
            var to = msg.getAttribute('to');
            var elems = msg.getElementsByTagName('body');
            console.log(JSON.stringify(from));
            console.log(JSON.stringify(to));
            console.log(JSON.stringify(elems));

            var data = "{\"title\":\"测试消息提醒\", \"id\":\"123123123123\", \"content\":\"测试消息发送服务\", \"type\":\"CUSTOMER\", \"time\":\"2019-08-02 17:33\"}";
            var jsonData = JSON.parse(data);

            var newMsg = new MessageModel();
            // 消息ID
            newMsg.id = jsonData.id;

            // 消息标题
            newMsg.title = jsonData.title;

            // 消息内容
            newMsg.content = jsonData.content;

            // 消息类型
            newMsg.type = jsonData.type;

            // 发送时间
            newMsg.time = new Date(jsonData.time);
            //
            // // 发送用户
            // newMsg.sender = "华软科技GCST"
            //
            // // 消息目标
            // newMsg.target: string
            //
            // // 目标类型
            // newMsg.targetType: string
            //
            // // 消息数据
            // newMsg.data: any
            that.messageDataSet.splice(0, 0, newMsg);
            // that.getMessageNumber();

            if (to == "groupchat" && elems.length > 0) {
              // var body = elems[0];
              // $("#msg").append(from.substring(from.indexOf('/') + 1) + ":<br>" + Strophe.getText(body) + "<br>")
            }
            return true;
          }, null, 'message', null, null, null, null);

          // 首先要发送一个<presence>给服务器（initial presence）
          that.conn.send($pres().tree());

          // ========== 创建一个<message>元素并发送 ============
          var data = {login:true, time:(new Date()).getTime()}
          var msg = $msg({
            to: that.admin,
            from: that.user,
            type: 'chat'
          }).c("body", null, JSON.stringify(data));
          that.conn.send(msg.tree());
          // ================================================

          // // 发送<presence>元素，加入房间
          // var pres = $pres({
          //   from: jid,
          //   to: ROOM_JID + "/" + jid.substring(0,jid.indexOf("@"))
          // }).c('x',{xmlns: 'http://jabber.org/protocol/muc'}).tree();
          // connection.send(pres);
          //connection.sendIQ(pres);//获取房间列表
        }
      });
      // this.conn.rawInput = this.rawInput;
      // this.conn.rawOutput = this.rawOutput;
    }
  }

// 接收到<message>
//   onMessage = function(msg) {
//
//     console.log(msg);
//     // 解析出<message>的from、type属性，以及body子元素
//     var from = msg.getAttribute('from');
//     var type = msg.getAttribute('type');
//     var elems = msg.getElementsByTagName('body');
//
//
//     this.messageDataSet.splice(0, 0, {
//       "type": "CUSTOMER",
//       "tag": "CUSTOMER-POTENTIAL",
//       "title": "潜在客户提醒",
//       "content": "测试消息发送服务.",
//       "sender": "华软科技GCST",
//       "time": "2019-08-02 17:33",
//       "status": "未读"
//     });
//
//     if (type == "groupchat" && elems.length > 0) {
//       // var body = elems[0];
//       // $("#msg").append(from.substring(from.indexOf('/') + 1) + ":<br>" + Strophe.getText(body) + "<br>")
//     }
//     return true;
//   }

  rawInput = function(data) {
    console.log('================= RECV start ===============');
    console.log(data);
    console.log('================= RECV end ===============');
  }

  rawOutput = function(data) {
    console.log('================= SENT start ===============');
    console.log(data);
    console.log('================= SENT end ===============');
  }

  // 连接状态改变的事件
  // onConnect = function(status) {
  //   if (status == Strophe.Status.CONNFAIL) {
  //     console.log('Strophe failed to connect.');
  //   }
  //   else if (status == Strophe.Status.CONNECTING) {
  //     console.log('Strophe is connecting.');
  //   }
  //   else if (status == Strophe.Status.AUTHFAIL) {
  //     console.log("登录失败！");
  //   }
  //   else if (status == Strophe.Status.DISCONNECTED) {
  //     console.log('Strophe is disconnected.');
  //     that.connected = false;
  //   }
  //   else if (status == Strophe.Status.CONNECTED) {
  //     console.log('Strophe is connected.');
  //     that.connected = true;
  //
  //     // // 当接收到<message>节，调用onMessage回调函数
  //     that.conn.addHandler(that.onMessage, null, 'message', null, null, null, null);
  //
  //     // // 首先要发送一个<presence>给服务器（initial presence）
  //     // this.connection.send($pres().tree());
  //
  //     // // 发送<presence>元素，加入房间
  //     // var pres = $pres({
  //     //   from: jid,
  //     //   to: ROOM_JID + "/" + jid.substring(0,jid.indexOf("@"))
  //     // }).c('x',{xmlns: 'http://jabber.org/protocol/muc'}).tree();
  //     // connection.send(pres);
  //     //connection.sendIQ(pres);//获取房间列表
  //   }
  // }




  /**
   * 获取消息列表
   */
  public getMessageList(event?) {
    this.dashboardService.getMessageList().subscribe(data => {
      this.messageDataSet = data
      this.getMessageNumber()
      setTimeout(() => {
        event && event.target.complete()
      }, 1000)
    })
  }

  /**
   * 获取消息数量
   */
  private getMessageNumber() {
    this.messageTypeNumber = this.store
      .selectSnapshot(DictState.getDict(DictType.MessageType))
      .map(x => {
        const messageList = this.messageDataSet.filter(
          message => message.type === x.code
        )

        return {
          ...x,
          length: messageList.length,
          icon: 'assets/icon/dashboard/' + x.code.toLowerCase() + '.svg'
        }
      })
  }

  /**
   * 监听tab页变化
   * @param param tabIndex
   */
  public onTabChange({ index }) {
    this.currentMessageType =
      index === 0 ? '' : this.messageTypeNumber[index - 1].code
  }

  /**
   * 滚动监听
   */
  public onScroll(event) {
    this.fixedTabs = event.detail.currentY > 80
  }

  public onOpenMessageType(message) {
    this.router.navigate(['/dashboard/message-list', { type: message.code }])
  }

  /**
   * 消息搜索
   */
  public onSearch() {
    this.router.navigateByUrl('/dashboard/message-search')
  }
}
