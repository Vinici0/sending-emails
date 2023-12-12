const { response } = require('express');
const  transporter  = require('../helpers/mailer');


const emails = [
    'vinicio.borja10@gmail.com',
    'vinicio.borja3000@gmail.com'
]

const sendEmail = async (req, res = response) => {
    
        try {
    
            await transporter.sendMail({
                from: 'Grupo Scanner <gruposcanner@gmail.com>',
                to: emails,
                subject: 'Testing email',
                html: `<!DOCTYPE html>
                <html>
                <head>
                    <title></title>
                </head>
                <body>
                <div class="nullwin" style="display: block;background-color: transparent;color: #222;min-width: 502px;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;position: relative;border-spacing: 0;border-collapse: collapse;">
                <div class="aHl" style="display: block;margin-left: -38px;">
                <div style="display: block;">
                <div class="aRb" style="display: block;-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .075);box-shadow: 0 1px 2px rgba(0, 0, 0, .075);font-size: .875rem;line-height: 18px;margin-bottom: 16px;margin-right: 0;margin-top: 8px;">
                <div style="display: block;">
                <table cellpadding="0" class="cf aU9" style="display: table;border-collapse: collapse;box-sizing: border-box;text-indent: initial;border-spacing: 2px;border-color: gray;border: 1px solid #e5e5e5;min-width: 624px;table-layout: fixed;width: 100%;">
                    <tbody style="display: table-row-group;vertical-align: middle;border-color: inherit;">
                        <tr style="display: table-row;vertical-align: inherit;border-color: inherit;">
                            <td class="aRi" style="margin: 0;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;background-color: #f6f6f6;border: 1px solid #e5e5e5;padding: 21px;vertical-align: top;width: 70px;">
                            <div class="aU5" style="">&nbsp;</div>
                
                            <div style="width:300px;height:0px;margin:0 auto;">
                            <div style="max-height:0;max-width:0;overflow: visible;">
                            <div style="width:100px;height:100px;margin-top:0px;margin-left:0px;display:inline-block;line-height:100px;font-size:50px;"><img src="https://i.imgur.com/FCNOpf4.png" /></div>
                            </div>
                
                            <div style="max-height:0;max-width:0;overflow: visible;">
                            <div style="width:63px;height:100px;margin-top:1px;margin-left:0px;display:inline-block;text-align:center;">
                            <div class="aRh" style="color: #fff;font-size: .75rem;top: 1px;font-weight: bold;text-align: center;">Jul</div>
                            </div>
                            </div>
                
                            <div style="max-height:0;max-width:0;overflow: visible;">
                            <div style="width:63px;height:100px;margin-top:22px;margin-left:0px;display:inline-block;text-align:center;">
                            <div class="aRg" style="font-weight: bold;text-align: center;color: #222;font-size: 200%;line-height: 34px;">26</div>
                            </div>
                            </div>
                
                            <div style="max-height:0;max-width:0;overflow: visible;">
                            <div style="width:63px;height:100px;margin-top:58px;margin-left:0px;display:inline-block;text-align:center;">
                            <div class="aRj" style="font-weight: bold;text-align: center;color: #222;font-size: .75rem;">Thu</div>
                            </div>
                            </div>
                            </div>
                            </td>
                            <td class="aU4" style="width: 52%;margin: 0;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;padding: 21px;vertical-align: top;">
                            <div class="aRo" style="display: block;color: #222;font-size: 140%;margin-bottom: 2px;">Google Meet Template</div>
                
                            <div class="aRn" style="display: block;color: #999;margin-bottom: 14px;"><a class="e" href="{{.URL}}" style="color: #15c;cursor: pointer;white-space: nowrap;text-decoration: none;" target="_blank">View on Google Calendar</a></div>
                
                            <table class="cf aU2" style="display: table;border-collapse: collapse;box-sizing: border-box;text-indent: initial;border-spacing: 2px;border-color: gray;table-layout: fixed;width: auto;word-break: break-all;">
                                <tbody style="display: table-row-group;vertical-align: middle;border-color: inherit;">
                                    <tr style="display: table-row;vertical-align: inherit;border-color: inherit;">
                                        <td class="aRk" style="margin: 0;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;padding-left: 0;padding-top: 2px;vertical-align: top;word-wrap: break-word;color: #999;padding-bottom: 6px;padding-right: 10px;min-width: 48px;white-space: nowrap;">When</td>
                                        <td class="aU6" id=":17n" style="margin: 0;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;padding-left: 0;padding-top: 2px;vertical-align: top;word-wrap: break-word;">Thu Jul 26 2022 1pm &ndash; 2pm (ART)</td>
                                    </tr>
                                    <tr style="display: table-row;vertical-align: inherit;border-color: inherit;">
                                        <td class="aRk" style="margin: 0;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;padding-left: 0;padding-top: 2px;vertical-align: top;word-wrap: break-word;color: #999;padding-bottom: 6px;padding-right: 10px;min-width: 48px;white-space: nowrap;">Who</td>
                                        <td class="aU6" id=":17q" style="margin: 0;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;padding-left: 0;padding-top: 2px;vertical-align: top;word-wrap: break-word;"><span class="cD" style="color: #777;"> nullwin@nullwin.com</span></td>
                                    </tr>
                                </tbody>
                            </table>
                
                            <div class="aRm" style="display: block;padding-top: 6px;"><a aria-pressed="true" class="T-I J-J5-Ji bqc aQ9 T-I-ax7 T-I-Js-Gs T-I-Js-IF L3" href="{{.URL}}" role="button" style="display:inline-flex;outline:none;background:none;border:none;height:36px;margin:0;background-color:transparent;background-image:linear-gradient(top,transparent,transparent);color:#5f6368;line-height:18px;min-width:80px;padding:7px 31px;border-radius:4px;font-size:.875rem;font-weight:500;text-align:center;white-space:nowrap;margin-right:8px;font-family:&quot;Google Sans&quot;,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;letter-spacing:.25px;box-sizing:border-box;margin-top:8px;border:1px solid #dadce0;text-decoration: none;" tabindex="0"><span id=":178">Yes</span></a> <a class="T-I J-J5-Ji bqc aQ9 T-I-ax7 T-I-Js-Gs T-I-Js-IF L3" href="{{.URL}}" id=":17b" jslog="126279; u014N:cOuCgd;" role="button" style="display:inline-flex;outline:none;background:none;border:none;height:36px;margin:0;background-color:transparent;background-image:linear-gradient(top,transparent,transparent);color:#5f6368;line-height:18px;min-width:80px;padding:7px 31px;border-radius:4px;font-size:.875rem;font-weight:500;text-align:center;white-space:nowrap;margin-right:8px;font-family:&quot;Google Sans&quot;,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;letter-spacing:.25px;box-sizing:border-box;margin-top:8px;border:1px solid #dadce0;text-decoration:none;" tabindex="0"><span id=":178">Maybe</span></a> <a class="T-I J-J5-Ji bqc aQ9 T-I-ax7 T-I-Js-Gs L3" href="{{.URL}}" id=":17a" jslog="126278; u014N:cOuCgd;" role="button" style="display:inline-flex;outline:none;background:none;border:none;height:36px;margin:0;background-color:transparent;background-image:linear-gradient(top,transparent,transparent);color:#5f6368;line-height:18px;min-width:80px;padding:7px 30px;border-radius:4px;font-size:.875rem;font-weight:500;text-align:center;white-space:nowrap;margin-right:8px;font-family:&quot;Google Sans&quot;,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;letter-spacing:.25px;box-sizing:border-box;margin-top:8px;border:1px solid #dadce0;text-decoration:none;" tabindex="0"><span id=":178">No</span></a> <a class="T-I J-J5-Ji Tl aQ9 T-I-ax7 T-I-Js-Gs L3" href="{{.URL}}" id=":17e" role="button" style="display: inline-flex;align-items: center;justify-content: center;outline: none;position: relative;z-index: 0;-webkit-align-items: center;background: none;border: none;-webkit-box-shadow: none;box-shadow: none;height: 36px;-webkit-justify-content: center;margin: 0;background-color: transparent;background-image: linear-gradient(top, transparent, transparent);color: #5f6368;-webkit-user-drag: none;-webkit-user-select: none;user-select: none;line-height: 18px;min-width: 80px;padding: 0 8px;-webkit-border-radius: 2px;border-radius: 4px;cursor: pointer;font-size: .875rem;font-weight: 500;text-align: center;white-space: nowrap;margin-right: 16px;-webkit-font-smoothing: antialiased;font-family: &quot;Google Sans&quot;, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;letter-spacing: .25px;box-sizing: border-box;margin-top: 8px;text-decoration:none;" tabindex="0"><span id=":178">More options</span></a></div>
                            </td>
                            <td class="aRc" style="margin: 0;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;border-left: 1px solid #e5e5e5;padding: 21px 21px 21px 0;vertical-align: top;overflow: hidden;">
                            <div class="aQ3" style="display: block;padding-left: 21px;">
                            <div class="aRo" style="display: block;color: #222;font-size: 140%;margin-bottom: 2px;">Agenda</div>
                
                            <div class="aRn" style="display: block;color: #999;margin-bottom: 14px;">Thu Jul 26 2022</div>
   
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>
                
                <div class="ii gt" id=":14s" jslog="20277; u014N:xr6bB; 4:W251bGwsbnVsbCxbXV0." style="display: block;">
                <div class="a3s aiL " id=":14r" style="display: block;">
                <div style="display: block;">
                <table border="0" cellpadding="8" cellspacing="0" style="width: 100%;font-family: Arial,Sans-serif;border: 1px Solid #ccc;border-width: 1px 2px 2px 1px;background-color: #fff;display: table;border-collapse: separate;box-sizing: border-box;text-indent: initial;border-spacing: 2px;border-color: gray;" summary="">
                    <tbody style="display: table-row-group;vertical-align: middle;border-color: inherit;">
                        <tr style="display: table-row;vertical-align: inherit;border-color: inherit;">
                            <td style="margin: 0;font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;">
                            <h4 style="padding:6px 10px;margin:0 0 4px 0;font-family:Arial,Sans-serif;font-size:13px;line-height:1.4;border:1px Solid #d9f2db;background:#d9f2db;color:#222;font-weight:normal"><span><span><strong>You have been invited to the following event.</strong> </span></span></h4>
                
                            <div style="padding: 2px;display: block;">
                            <h3 style="padding:0 0 6px 0;margin:0;font-family:Arial,Sans-serif;font-size:16px;font-weight:bold;color:#222"><span><span><span>Google Meet Template</span> </span></span></h3>
                
                            <table border="0" cellpadding="0" cellspacing="0" style="display: inline-table;border-collapse: separate;box-sizing: border-box;text-indent: initial;border-spacing: 2px;border-color: gray;" summary="Información del evento">
                                <tbody style="display: table-row-group;vertical-align: middle;border-color: inherit;">
                                    <tr style="display: table-row;vertical-align: inherit;border-color: inherit;">
                                        <td style="padding: 0 1em 10px 0;font-family: Arial,Sans-serif;font-size: 13px;color: #888;white-space: nowrap;margin: 0;" valign="top">
                                        <div style="display: block;"><span><span><i style="font-style:normal">When</i></span></span></div>
                                        </td>
                                        <td style="padding-bottom: 10px;font-family: Arial,Sans-serif;font-size: 13px;color: #222;margin: 0;" valign="top"><span><span>Thu Jul 26 de 2022 1pm &ndash; 2pm <span style="color:#888">Chicago Standard Time - Illinois</span></span></span></td>
                                    </tr>
                          
                                
                                </tbody>
                            </table>
                
                            <div style="float: right;font-weight: bold;font-size: 13px;display: block;"><span><span><a data-saferedirecturl="https://www.google.com/url?q=https://calendar.google.com/calendar/event?action%mZfMjAyMjA2MwOEBt%2saW9uaUBnbWFpbC5jb20xNTU2MDJkYmU0ODRmYjYzMjUxMTNhYjdkYzE0YjIxZTJiMzk0YTdk%26ctz%3DAmerica%252FChicago%252illinois%26hl%3Des%26es%3D1" href="{{.URL}}" style="color:#20c;white-space:nowrap" target="_blank">more details &raquo;</a></span></span></div>
                            </div>
                
                            <p style="color:#222;font-size:13px;margin:0"><span><span><span style="color:#888">Going (<a href="{{.URL}}" target="_blank">nullwin@nullwin.com</a>)?&nbsp;&nbsp;&nbsp;</span><strong><span><span><a data-saferedirecturl="https://www.google.com/url?q=https://calendar.google.com/calendar/zQ3NmZfMjAyMjA2MTNUMTEwMDAwWiBqdWFucGNkMjAwOEBt%26rst%3D1%20xNTU2MDJkYmU0ODRmYjYzMjUxMTNhYjdkYzE0YjIxZTJiMzk0YTdk%26ctz%3DAmerica%252Fchicago%252Fillinois%26hl%3Des%26es%3D1" href="{{.URL}}" style="color:#20c;white-space:nowrap" target="_blank">Yes</a></span></span><span style="margin:0 0.4em;font-weight:normal"> - </span><span><span><a data-saferedirecturl="https://www.google.com/url?q=https://calendar.google.com/calendar/event?action%3DRESPOND%26eid%3DM3IybmxuMXU3cTQxc3BhNjhuM3NhMzQ3NmZfMjAyMjA2MTNUMTEwMDAwWiBqdWFucGNkMjAwOEBt%26rst%3D3%26tok%3DMjMjanBjYXN0aWdsaW9uaUBnbWFpbC5jb20xNTU2MDJkYmU0ODRmYjYzMjUxMTNhYjdkYzE0YjIxZTJiMzk0YTdk%26ctz%3DAmerica%252FChicago%252FIllinois%26hl%3Des%26es%3D" href="{{.URL}}" style="color:#20c;white-space:nowrap" target="_blank">Maybe</a></span></span><span style="margin:0 0.4em;font-weight:normal"> - </span><span><span><a data-saferedirecturl="https://www.google.com/url?q=https://calendar.google.com/calendar/event?action%3DRESPOND%26eid%3DM3IybmxuMXU3cTQxc3BhNjhuM3NhMzQ3NmZfMjAyMjA2MTNUMTEwMDAwWiBqdWFucGNkMjAwOEBt%26rst%3D2%26tok%3DMjMjanBjYXN0aWdsaW9uaUBnbWFpbC5jb20xNTU2MDJkYmU0ODRTJiMzk0YTdk%26ctz%3DAmerica%252FChicago%252FIllionois%26hl%3Des%26es%3D1" href="{{.URL}}" style="color:#20c;white-space:nowrap" target="_blank">No</a></span></span></strong>&nbsp;&nbsp;&nbsp;&nbsp;<a data-saferedirecturl="https://www.google.com/url?q=https://calendar.google.com/calendar/event?action%3DVIEW%26eid%3DM3IybmxuMXU3cTQxc3BhNjhuM3NhMzQ3NmZfMjAyFucGNkMjAwOEBt%26tok%3DMjMjanBjYXN0aWdsaW9uaUBnbWFpbC5jb20xNTU2MDJkYmU0ODRmYjYzMjUxMTNhYjdkYzE0YjIxZTJiMzk0YTdk%26ctz%3DAmerica%252FChicago%252FIllinois%26hl%3Des%26es%3D1" href="{{.URL}}" style="color:#20c;white-space:nowrap" target="_blank">More options &raquo;</a></span></span></p>
                            </td>
                        </tr>
                        <tr style="display: table-row;vertical-align: inherit;border-color: inherit;">
                            <td style="background-color: #f6f6f6;color: #888;border-top: 1px Solid #ccc;font-family: Arial,Sans-serif;font-size: 11px;margin: 0;">
                            <p><span><span>Invitation from <a data-saferedirecturl="https://www.google.com/url?q=https://calendar.google.com/calendar/" href="{{.URL}}" target="_blank">Google Calendar</a></span></span></p>
                
                            <p><span><span>You are receiving this email at the account <a href="{{.URL}}" target="_blank">nullwin@nullwin.com</a> because you are subscribed for updated invitations on calendar <a href="{{.URL}}" target="_blank">nullwin@nullwin.com</a>.</span></span></p>
                
                            <p><span><span>To stop receiving these emails, please log in to <a data-saferedirecturl="https://www.google.com/url?q=https://calendar.google.com/calendar/" href="{{.URL}}" target="_blank">https://calendar.google.com/<wbr />calendar/</a> and change your notification settings for this calendar.</span></span></p>
                
                            <p><span><span>Forwarding this invitation could allow any recipient to send a response to the organizer and be added to the guest list, or invite others regardless of their own invitation status, or to modify your RSVP. <a data-saferedirecturl="https://www.google.com/url?q=https://support.google.com/calendar/answer/37135%23forwarding&amp;source=gmail&amp;ust=134738153000&amp;usg=487234eja4ZVNMy465U-5VpUdZW" href="{{.URL}}" target="_blank">Learn More.</a>.</span></span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                </div>
                
                <div class="ii gt" id=":15i" style="display:none">&nbsp;</div>
                </div>
                
                <div class="hi" style="display: block;">&nbsp;</div>
                
                </body>
                </html>`
            });

            res.json({
                ok: true,
                msg: 'Email sent'
            });
    
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Error sending email'
            });
        }
    
    }

module.exports = {
    sendEmail
}



