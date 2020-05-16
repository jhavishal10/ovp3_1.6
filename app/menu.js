var xmlHttp = new XMLHttpRequest();
// User, Channel, Movie Line No
var g_constant_limit=20;
var g_sequence_constant_limit=10;
//
var g_channel_name_order_flag=0;
var g_channel_category_order_flag=0;
var g_movie_name_order_flag=0;
var g_movie_category_order_flag=0;
var g_user_name_order_flag=0;
var g_user_group_order_flag=0;
var g_user_expired_date_order_flag=0;

var g_token=0;
var g_item=0;
var g_ch_src;
var g_status_item;
var g_refresh_item;
var g_chtype_item;
var g_ch_play_id_item;
var g_Channel_Edit_Mode=0;
var g_Channel_Updated=0;
var g_Movie_Edit_Mode=0;
var g_Movie_Updated=0;
var g_total_movie_no=1;
var HTML_Menu_Bar_Str;
var g_content;
var g_blacklist_remove_item;
var total_player_no=1000;
var g_macid;
var g_user_id;
var g_password;
var g_ch_no=1;
var g_video_itemid= Array();
var g_file_path;
var vlc_monitorTimerId = 0; 
var prevState = 0; 
var g_channel_no=1;
var g_remove_all_button;
var g_username;
var g_groupname_array = new Array();
var g_paymodel_array = Array("pre","post","free");
var g_total_group_no=0;
var g_timer;
var g_current_timestamp;
var g_dvr_timestamp=0;
var bdvr_on;
var g_video_path;
var g_server_dvr_sec;
var g_cur_sec;
var g_dvr_sec;
var g_delaytime_array = Array("Delay 5 sec.","Delay 10 sec.","Delay 20 sec.","Delay 30 sec.","Delay 40 sec.","Delay 50 sec.",
				"Delay 1 min.","Delay 3 min.","Delay 5 min.","Delay 10 min.","Delay 20 min.","Delay 30 min.","Delay 40 min.","Delay 50 min.",
				"Delay 1 hr.","Delay 2 hr.","Delay 3 hr.","Delay 4 hr.","Delay 5 hr.","Delay 6 hr.","Delay 7 hr.","Delay 8 hr.","Delay 9 hr.","Delay 10 hr.","Delay 11 hr.","Delay 12 hr.")
var g_delayvalue_array = Array("delay,5,sec.","delay,10,sec.","delay,20,sec.","delay,30,sec.","delay,40,sec.","delay,50,sec.",
				 "delay,1,min.","delay,3,min.","delay,5,min.","delay,10,min.","delay,20,min.","delay,30,min.","delay,40,min.","delay,50,min.",
				"delay,1,hr.","delay,2,hr.","delay,3,hr.","delay,4,hr.","delay,5,hr.","delay,6,hr.","delay,7,hr.","delay,8,hr.","delay,9,hr.","delay,10,hr.","delay,11,hr.","delay,12,hr.")
var g_server_timer;
var g_user_authorization_mode=1;
var g_httpport;
var g_System_timer=0;

var g_Query_Channel_Status_timer=0;
var g_Query_Online_Player_timer=0;
var g_Get_Channel_Statistics_timer=0;

var bSystem_Inquery_Panel=0;
var bQuery_Channel_Status=0;
var bQuery_Online_Player=0;
var bGet_Channel_Statistics=0;
var g_checkedstring='0';
var g_copy_paste=0;

var g_reseller_no=0;
var g_player_filter_no=0;
var g_total_ch_no=0;
var g_balancer_server_no=0;
var g_edge_server_no=0;
var g_cur_year;
var g_cur_month;
var g_total_program_no=0;
var g_program_no=0;
var g_show_free_version=0;
var g_user_no=0;
var g_cur_userno=0;
var g_active_player_no=0;
var g_search_user_item= new Object();
var g_search_channel_item= new Object();
var g_search_movie_item= new Object();
var g_search_player_item= new Object();
var g_AddMultipleUserWindow;
var g_current_content;
var g_username_item;
var g_server_ip_array = new Array();
var g_totoal_server_ip_no=0;
var g_selectedcounter=0;
var g_goto_item=new Object();
var TableBackgroundNormalColor = "#FFFFFF";
var TableBackgroundMouseoverColor = "#F4F4F4";
var TableMenuBackgroundNormalColor = "#F4F4F4";
var TableMenuBackgroundMouseoverColor = "#EBEBEB";
//var g_total_user_no=0;
var g_user_position=0;
var g_channel_position=0;
var g_movie_position=0;
var g_active_connection_position=0;
var g_total_user_no=0;
var g_multiple_user_no;
var g_search_result = new Array();
var g_user_limit=0;
var g_channel_limit=0;
var g_movie_limit=0;
var g_active_connection_limit=0;
var g_user_found_position=0;
var g_channel_found_position=0;
var g_movie_found_position=0;
var g_movie_selected_position=1;
var g_channel_selected_position=1;
var g_user_selected_position=1;
var g_current_button_id="home_button";
var g_show_off_channel=0;
var g_active_channel_no=0;
var g_expired_user_no=0;
var g_expired_user=0;
var g_UserDetailWindow=null;
var g_search_text='';
var Channel_Categories_tems=[];
var g_ChannelDetailWindow=false;
var g_MovieDetailWindow=false;
var g_UserDetailWindow=false;

var g_search__player_text;

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]


};
function ChangeBackgroundColor(row) { row.style.backgroundColor = TableBackgroundMouseoverColor; }
function RestoreBackgroundColor(row) { row.style.backgroundColor = TableBackgroundNormalColor; }
function RestoreMenuBackgroundColor(row) 
{ 
	if (row.id!=g_current_button_id)
	{
		row.style.backgroundColor = TableMenuBackgroundNormalColor; 
	}
}
function ChangeMenuBackgroundColor(row) 
{ 
	if (row.id!=g_current_button_id)
	{
		row.style.backgroundColor = TableMenuBackgroundMouseoverColor; 
	}
}


function change_link(new_url, new_width, new_height)
{
   var content= document.getElementById("content");
	if ((new_width>0) && (new_height>0))
	{
		content.innerHTML='<iframe frameborder="0" width='+new_width+' height='+new_height+' src="'+new_url+'"></iframe>';	
	} else
	{
		content.innerHTML='<iframe frameborder="0"'+new_url+'"></iframe>';	
	}
	

 
}


function find_cookie_value(keystrinp)
{ 
	var restring;
	var str;
	var substr1;
	var pos1, pos2;
	
	str=document.cookie;
	//alert(str);
	//alert(keystr);
	keystr=keystrinp+location.hostname
	pos1=str.indexOf(keystr);
	//alert(pos1);
	subchar=str.substring(pos1+keystr.length,pos1+keystr.length+1);
	//alert(subchar);
	if (subchar==';')
	{
		return 0;
	}else
	{
		substr1=str.substring(pos1+keystr.length+2,str.length);
		//alert(substr1);
		pos1=substr1.indexOf(']');
		restring=substr1.substring(0,pos1);
		//alert(restring);
		return restring;
	}
	
	
}
function add_cookie_value(keystr,keyvalue)
{
	//alert(document.cookie);
	document.cookie=keystr+location.hostname+'=['+keyvalue+']';
}
function Clear_cookie()
{
	document.cookie='token'+location.hostname+'=';
	document.cookie='userid'+location.hostname+'=';
	document.cookie='password'+location.hostname+'=';
	document.cookie='dir_path'+location.hostname+'=';
	document.cookie='video_path'+location.hostname+'=';

}

function encode64(input) {  

 var keyStr = "ABCDEFGHIJKLMNOP" +  

              "QRSTUVWXYZabcdef" +  

              "ghijklmnopqrstuv" +  

              "wxyz0123456789+/" +  

              "=";  
  // input = escape(input);  

    var output = "";  

    var chr1, chr2, chr3 = "";  

    var enc1, enc2, enc3, enc4 = "";  

    var i = 0; 
  
 
    do {  

       chr1 = input.charCodeAt(i++);  

       chr2 = input.charCodeAt(i++);  

       chr3 = input.charCodeAt(i++);  

  

       enc1 = chr1 >> 2;  

       enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  

       enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  

       enc4 = chr3 & 63;  

  

    /*   if (isNaN(chr2)) {  

          enc3 = enc4 = 64;  

       } else if (isNaN(chr3)) {  

          enc4 = 64;  

       }  
*/
  

       output = output +  

          keyStr.charAt(enc1) +  

          keyStr.charAt(enc2) +  

          keyStr.charAt(enc3) +  

          keyStr.charAt(enc4);  
  
       chr1 = chr2 = chr3 = "";  

       enc1 = enc2 = enc3 = enc4 = "";  

    } while (i < input.length);  

  

    return output;  

}  
function Update_Setting() {
  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    alert(response);
   }
}     
function save_setting() {
  // Get the city and state from the web form
  var http_base_port = document.getElementById("http_base_port").value;
  var http_apps_port = document.getElementById("http_apps_port").value;
  var httpport = document.getElementById("httpport").value;
  var rtmpport = document.getElementById("rtmpport").value;
 //var vod_base_port = parent.document.getElementById("vod_base_port").value;
 var rtsp_base_port = document.getElementById("rtsp_base_port").value;
 var igmpip = document.getElementById("igmpip").value;
 var igmpport = document.getElementById("igmpport").value;
 
 var ch_input_buffer_no = document.getElementById("ch_input_buffer_no").value;
 var ch_streaming_prebuffer_no = document.getElementById("ch_streaming_prebuffer_no").value;
 var ch_streaming_bitrate_tolerance = document.getElementById("ch_streaming_bitrate_tolerance").value;
 var max_streaming_no = document.getElementById("max_streaming_no").value;
 var system_log = document.getElementById("system_log").value;
 var admin_system_log = document.getElementById("admin_system_log").value;
 var pagination_limit_no = document.getElementById("pagination_limit_no").value;
 var transcoder_path = document.getElementById("transcoder_path").value;
 
 var ch_reconnection_interval = document.getElementById("ch_reconnection_interval").value;
 var alert_player_duration = document.getElementById("alert_player_duration").value;
 var blacklist = document.getElementById("blacklist").value;
  
 var dvr_duration = document.getElementById("dvr_duration").value;
// var catch_up_tv_epg = document.getElementById("catch_up_tv_epg").value;
 var extract_ts_epg = document.getElementById("extract_ts_epg").value;
 var xmltv_epg_url = document.getElementById("xmltv_epg_url").value;

//  var url = "/cgi-bin/cgi_ezserver?httpport=" + escape(httpport)+
  	g_token=find_cookie_value("token");
  var url = "/server/save_config?token="+escape(g_token)+"&http_base_port=" + escape(http_base_port)+"&http_apps_port=" + escape(http_apps_port)+"&httpport=" + escape(httpport)+
  "&rtmpport=" + escape(rtmpport)+
  "&rtsp_base_port=" + escape(rtsp_base_port)+
  "&igmpip=" + igmpip+
  "&igmpport=" + escape(igmpport)+
  "&ch_input_buffer_no=" + escape(ch_input_buffer_no)+
  "&ch_streaming_prebuffer_no=" + escape(ch_streaming_prebuffer_no)+
  "&ch_streaming_bitrate_tolerance=" + escape(ch_streaming_bitrate_tolerance)+
  "&max_streaming_no=" + escape(max_streaming_no)+
  "&system_log=" + escape(system_log)+
  "&admin_system_log=" + escape(admin_system_log)+
  "&pagination_limit_no=" + escape(pagination_limit_no)+
  "&transcoder_path=" + escape(transcoder_path)+
  "&ch_reconnection_interval=" + escape(ch_reconnection_interval)+
  "&alert_player_duration=" + escape(alert_player_duration)+
  "&blacklist=" + escape(blacklist)+
  "&dvr_duration=" + escape(dvr_duration)+
  "&extract_ts_epg=" + escape(extract_ts_epg)+
  "&xmltv_epg_url=" + xmltv_epg_url+
  "&flag="+Math.random();
   var confirm_msg="Update Setting?";
	if (g_token!=0)
	{
		if (confirm(confirm_msg))
		{
			g_constant_limit=parseInt(pagination_limit_no);
			//g_sequence_constant_limit=g_constant_limit;
		// Open a connection to the server
		xmlHttp.open("GET", url, true);
		
		// Setup a function for the server to run when it's done
		xmlHttp.onreadystatechange = Update_Setting;
		
		
		// Send the request
		xmlHttp.send(null);
		}
	}
}
function Init_System_Setting()
{
  if (xmlHttp.readyState == 4) {
    var response= xmlHttp.responseText.split("\r\n");

     document.getElementById("http_base_port").value =response[0];
     document.getElementById("http_apps_port").value =response[1];
    document.getElementById("httpport").value =response[2];
    g_httpport=response[2];
    document.getElementById("rtsp_base_port").value =response[3];
   document.getElementById("igmpip").value =response[4];
    document.getElementById("igmpport").value =response[5];
     document.getElementById("rtmpport").value =response[6];
    document.getElementById("ch_input_buffer_no").value =response[7];
    document.getElementById("ch_streaming_prebuffer_no").value =response[8];
    document.getElementById("ch_streaming_bitrate_tolerance").value =response[9];
    document.getElementById("max_streaming_no").value =response[10];
    document.getElementById("system_log").value =response[11];
    document.getElementById("admin_system_log").value =response[12];
    document.getElementById("pagination_limit_no").value =response[13];
    document.getElementById("transcoder_path").value =response[14];
    
    document.getElementById("ch_reconnection_interval").value =response[15];
    document.getElementById("alert_player_duration").value =response[16];
    document.getElementById("blacklist").value =response[17];
    document.getElementById("dvr_duration").value =response[18];
    document.getElementById("extract_ts_epg").value =response[19];
    document.getElementById("xmltv_epg_url").value =response[20];
 //   call_user_authorization_mode();

  //   show_uptime();
 
 	//g_server_timer=setInterval(function(){show_uptime()},300*1000);
 
  }
}
function callServer_Setting()
{
	
//	  var url = "/cgi-bin/cgi_ezserver?token="+escape(g_token)+"&value_creation"+"&flag="+Math.random();
	  var url = "/server/get_config?token="+escape(g_token)+"&flag="+Math.random();
var str;
  var streaming_port = parent.document.getElementById("content");
bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;

	str='<p align="left" style="margin-top: 5; margin-left: 25"><table border="0" cellpadding="0" cellspacing="5" border>'+
		'<tr>'+
		'<td height="23">'+
		'<p align="left" style="margin-left: 5; margin-top: 10"><font face="Arial"><input type="button" value="Save" onclick="javascript:save_setting();" name="B1" />'+
		'<td height="23">'+
		'</td>'+  

		'</font>'+
		'</td>'+  
		'</tr>'+
		 '<tr><td  colspan="2"><hr size="1" color="#66FFFF"></td></tr>'+
		'<tr><td colspan="2">'+
		'<p align="left"><font face="Arial" size="2"><b>Unicast Streaming Setting:</b></font>'+
		'</td></tr>'+
		
		'<tr>'+
		'<td width="120" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">1. Panel port:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="3"> <input type="text" name="http_base_port" id="http_base_port" size="5"/></font>'+
		'</font>'+ 
		'<font size="2">'+' --- Administrator Panel Port</font>'+ 
		'</td>'+
		'</tr>'+

		'<tr>'+
		'<td width="120" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">2. API port:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="http_apps_port" id="http_apps_port" size="5"/></font>'+
		'</font>'+ 
		'<font size="2">'+' --- Application Program Interface Port</font>'+ 
		'</td>'+
		'</tr>'+
				
		'<tr>'+
		'<td width="120" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">3. HTTP port:</font></p>'+
		'</td>'+
		'<td width="400" height="23"><p align="left"> <font size="2"> <input type="text" name="httpport" id="httpport" size="5"/></font>'+
		'<font size="2">'+' --- HTTP Streaming Port for players</font>'+ 
		'</td>'+
		'</tr>'+

		'<tr>'+
		'<td width="120" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">4. RTMP port:</font></p>'+
		'</td>'+
		'<td width="400" height="23"><p align="left"> <font size="2"> <input type="text" name="rtmpport" id="rtmpport" size="5"/></font>'+
		'<font size="2">'+' --- RTMP Streaming Port for players</font>'+ 
		'</td>'+
		'</tr>'+

		'<tr>'+
		'<td width="120" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">5. RTSP port:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="rtsp_base_port" id="rtsp_base_port" size="5"/></font>'+
		'</font>'+ 
		'<font size="2">'+' --- RTSP Streaming Port for players</font>'+ 
		'</td>'+
		'</tr>'+

		 '<tr><td  colspan="2"><hr size="1" color="#66FFFF"></td></tr>'+
		'<tr><td colspan="2">'+
		'<p align="left"><font face="Arial" size="2"><b>Multicasting Streaming Setting:</b></font>'+
		'</td></tr>'+

		'<tr>'+
		'<td width="120" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">6. Multicast IP :</font>'+
		'</p>'+
		'</td>'+      
		'<td width="500" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="igmpip" id="igmpip" size="16"/></font>'+
		'</font>'+ 
		'<font size="2">'+' --- Multicasting Streaming IP for players (0.0.0.0: disabled)</font>'+ 
		'</td>'+
		'</tr>'+
		
		'<tr>'+
		'<td width="120" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">7. Multicast port:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="igmpport" id="igmpport" size="5"/></font>'+
		'</font>'+ 
		'<font size="2">'+' --- Multicasting Streaming Port for players</font>'+ 
		'</td>'+
		'</tr>'+
		
		 '<tr><td  colspan="2"><hr size="1" color="#66FFFF"></td></tr>'+
		'<tr><td colspan="2">'+
		'<p align="left"><font face="Arial" size="2"><b>Channel Setting:</b></font>'+
		'</td></tr>'+
		'<tr>'+
		'<td width="180" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">8. Channel Input Buffer No.:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="500" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="ch_input_buffer_no" id="ch_input_buffer_no" size="5"/></font>'+
		'</font>'+ 
		'<font size="2">'+' --- Panel will automatically refresh all channels after modification.</font>'+ 
		'</td>'+
		'</tr>'+

		'<tr>'+
		'<td width="220" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">9. Channel Streaming Prebuffer No.:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="ch_streaming_prebuffer_no" id="ch_streaming_prebuffer_no" size="5"/></font>'+
		'</font>'+ 
		'<font size="2">'+' --- The value must be smaller than Channel Input Buffer No.</font>'+ 
		'</td>'+
		'</tr>'+

		'<tr>'+
		'<td width="260" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">10. Channel Streaming Bitrate Tolerance:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="500" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="ch_streaming_bitrate_tolerance" id="ch_streaming_bitrate_tolerance" size="5"/></font>'+
		'</font>'+ 
		'<font size="2">'+' --- Value: 0.00~1.00 (ex. 0.00: SD video, 0.999: HD 25Mbps)</font>'+ 
		'</td>'+
		'</tr>'+

		'<tr>'+
		'<td width="260" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">11. Channel Reconnection Interval:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="ch_reconnection_interval" id="ch_reconnection_interval" size="5"/></font>'+
		'</font>'+
		'<font size="2">'+' sec.</font>'+ 
		'</td>'+
		'</tr>'+

		'<tr>'+
		'<td width="260" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">12. DVR Duration:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="dvr_duration" id="dvr_duration" size="10"/></font>'+
		'</font>'+
		'<font size="2">'+' min.</font>'+ 
		'</td>'+
		'</tr>'+

		'<tr>'+
		'<td width="260" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">13. DASH Transcoder Path:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="transcoder_path" id="transcoder_path" size="64"/></font>'+
		'</font>'+
		'</td>'+
		'</tr>'+

		'<tr><td  colspan="2"><hr size="1" color="#66FFFF"></td></tr>'+
		'<tr><td colspan="2">'+
		'<p align="left"><font face="Arial" size="2"><b>EPG Setting:</b></font>'+
		'</td></tr>'+

		'<tr>'+
		'<td width="260" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">14. MPEG Transport Stream:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="extract_ts_epg" id="extract_ts_epg" size="1"/></font>'+
		'</font>'+
		'<font size="2">'+' --- Value: 0 (disabled), 1 (Real Time Extraction)</font>'+ 
		'</td>'+

		'</tr>'+

		'<tr>'+
		'<td width="260" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">15. XMLTV EPG URL:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="xmltv_epg_url" id="xmltv_epg_url" size="64"/>(per day)</font>'+
		'</font>'+
		'</td>'+
		'</tr>'+

	/*	'<tr>'+
		'<td width="260" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">16. Catch up TV by EPG:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="catch_up_tv_epg" id="catch_up_tv_epg" size="1"/></font>'+
		'</font>'+
		'<font size="2">'+' --- Value: 0 (disabled), 1 (enabled)</font>'+ 
		'</td>'+
		'</tr>'+
		*/




		'<tr><td  colspan="2"><hr size="1" color="#66FFFF"></td></tr>'+
		'<tr><td colspan="2">'+
		'<p align="left"><font face="Arial" size="2"><b>System Setting:</b></font>'+
		'</td></tr>'+
		'<tr>'+
		'<td width="260" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">16. Max. Streaming No.:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="500" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="max_streaming_no" id="max_streaming_no" size="5"/></font>'+
		'</font>'+ 
		'<font size="2">'+
		'</td>'+
		'</tr>'+

		'<tr>'+
		'<td width="180" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">17. System Log Lines:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="system_log" id="system_log" size="5"/></font>'+
		'</font>'+
		'<font size="2">'+' --- Value: 0 (disabled), 1 (enabled), xxxx (xxxx lines)</font>'+ 
		'</td>'+
		'</tr>'+

		'<tr>'+
		'<td width="260" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">18. Admin. System Log Lines:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="admin_system_log" id="admin_system_log" size="5"/></font>'+
		'</font>'+
		'<font size="2">'+' --- Value: 0 (disabled), 1 (enabled), xxxx (xxxx lines)</font>'+ 
		'</td>'+
		'</tr>'+

		'<tr>'+
		'<td width="260" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">19. Pagination Limit Number:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="pagination_limit_no" id="pagination_limit_no" size="5"/></font>'+
		'</font>'+
		'<font size="2">'+' --- Pagination Limit Number for Channel/Movie/User Window</font>'+ 
		'</td>'+
		'</tr>'+


		 '<tr><td  colspan="2"><hr size="1" color="#66FFFF"></td></tr>'+
		'<tr><td colspan="2">'+
		'<p align="left"><font face="Arial" size="2"><b>Player Setting:</b></font>'+
		'</td></tr>'+
		'<tr>'+
		'<td width="260" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">20. Alert Player Duration:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="alert_player_duration" id="alert_player_duration" size="6"/></font>'+
		'</font>'+
		'<font size="2">'+' Hours (ex. 5: 5 hours, 10.5: 10 hours 30 min.)</font>'+ 
		'</td>'+
		'</tr>'+

		'<tr>'+
		'<td width="260" height="23">'+
		'<p align="left" style="text-indent: 5"><font face="Arial" size="2">21. Blacklist Option:</font>'+
		'</p>'+
		'</td>'+      
		'<td width="400" height="23"><p align="left"> <font face="Arial"> <font size="2"> <input type="text" name="blacklist" id="blacklist" size="1"/></font>'+
		'</font>'+
		'<font size="2">'+' --- Value: 0 (disabled), 1 (enabled)</font>'+ 
		'</td>'+
		'</tr>'+


		
		'</table>';
		streaming_port.innerHTML=str;

	   	g_token=find_cookie_value("token");
		if (g_token!=0)
		{
			 xmlHttp.open("GET", url, true);
			 xmlHttp.onreadystatechange = Init_System_Setting;
			 xmlHttp.send(null);
		}
	

}


function callServer_Init()
{	
	var url = "/server/get_config?token="+escape(g_token)+"&flag="+Math.random();
	
	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		 xmlHttp.open("GET", url, true);
		 xmlHttp.onreadystatechange = Init_Config;
		 xmlHttp.send(null);
	}
}

function login_return() {
//  var login_msg = document.getElementById("login_msg");
//  var login_area = document.getElementById("login_area");
  var login_status = document.getElementById("login_status");
  var login_password_text = document.getElementById("login_password_text");
  
  var browser_name;
   	var content = parent.document.getElementById("content");

//  alert(login_status.innerHTML);
  
  // alert(id_check_flag);
  
  if (xmlHttp.readyState == 4) 
  {
    var response = xmlHttp.responseText;
   //alert(response);
  if (response.search("-1")>0)
    {
    	id_check_flag=0;
    	login_status.innerHTML='<p style="margin-left: 25; margin-top: 0"><font face="Arial" size="2" color="#ff0000"><b>Parameter error.</b></font>';
    } else if (response.search("-2")>0)
    {
    	id_check_flag=0;
    	login_password_text.innerHTML='<p style="margin-left: 25; margin-top: 0"><font face="Arial" size="2" color="#ff0000">Enter your passowrd</font>';
    	login_status.innerHTML='<p style="margin-left: 25; margin-top: 0"><font face="Arial" size="2" color="#ff0000"><b>Wrong user name or password.</b></font>';
     } else if (response.search("-3")>0)
    {
    	id_check_flag=0;
    	login_status.innerHTML='<p style="margin-left: 25; margin-top: 0"><font face="Arial" size="2" color="#ff0000"><b>User time expired. Contact panel owner.</b></font>';
    } 
    else
    {
  	g_token=response.slice(6,response.length-2);
  	//alert(g_token);
  	//  document.cookie="token="+ g_token+"userid="+g_user_id+"password="+g_password+"#";
   	add_cookie_value("token",g_token);
  	add_cookie_value("userid",g_user_id);
  	add_cookie_value("password",g_password);
  	
 	    id_check_flag=1;

//   	  login_status.innerHTML="<a href='javascript:void(0)' onclick=logout() style='color: #ffffff; text-decoration:none'>"+
 // 	  '<font face="Arial" size="2"><b>Logout</b></font></a>'; 
  	   callServer_Init();
  	  /*          content.innerHTML='<table border="1" cellpadding="0" cellspacing="0" width="100%" height="451"><tr>'+
              '<td width="100%" height="449"><p align="center"><font face="Arial" size="5">Welcome to EZserver Management</font></td>'+
              '</tr></table>';
 */
//  	   init_video();
 //  	   callServer_CH_Inquery();
  	/*  BrowserDetect.init();
  	  browser_name=BrowserDetect.browser;
 	if (browser_name.search("Explorer")==0)
	{
  	  change_link("ovs.htm",900,400);
  	} else 	if (browser_name.search("Safari")==0)
  	{
  	  change_link("ovs_html5.htm",900,400);
   	} else
  	{
  	  change_link("ovs_html5.htm",900,400);
  	} */

    }
  }

}

function login(){
 var cgi_url;
 var encrypt_str;
 var userid_pass;
 g_user_id = document.getElementById("user_id").value;
 g_password = document.getElementById("password").value;
 userid_pass=g_user_id+':'+g_password;
// if (g_user_id=="root")
// {
	//alert(userid_pass);
	 encrypt_str=encode64(userid_pass);
	cgi_url = "/token/createtokenbased64?encrpty="+escape(encrypt_str)+"&flag="+Math.random();
//	 login_status.innerHTML='login...';
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = login_return;
	 xmlHttp.send(null);
 // }else
 //{
 //	alert("Non Adminstrator ID");
 //}
 	


}
function login_dialog()
{
	var main_screen= document.getElementById("main_screen");
	var str;
	str='<p style="margin-top: 50"></p>'+
	'<div align="center">'+
	  '<table id=login_rcorners align="center" border="0" cellpadding="0" cellspacing="0" width="450" height="492">'+
	    '<tr>'+
	      '<td width="100%" bordercolorlight="#DFDFDF" bordercolordark="#F3F3F3" height="490" valign="middle">'+
	        '<div align="center">'+
	          '<table border="0" cellpadding="0" cellspacing="0" width="100%" height="461">'+
	            '<tr>'+
	              '<td width="50%" height="123">'+
	                '<p style="margin-left: 25"><b><font face="Arial" color="#0000FF" size="6">Ezserver</font></b></td>'+
	            '</center>'+
	            '<td width="50%" valign="top" height="123">'+
	              '<p align="right" style="margin-right: 20; margin-top: 2"></td>'+
	          '</tr>'+
	          '<center>'+
	          '<tr>'+
	            '<td width="100%" colspan="2" height="38">'+
	              '<p style="margin-left: 25"><font face="Arial" size="2" color="#679DF6">User Name</font></td>'+
	          '</tr>'+
	          '<tr>'+
	            '<td width="100%" colspan="2" height="38">'+
	              '<p style="margin-left: 25"><input type="text" id="user_id" size="20" style="background-color: #FAFFBD; color: #679DF6; border-style: solid; border-width: 1" value="root"></p>'+
	              '</td>'+
	          '</tr>'+
	          '<tr>'+
	            '<td id="login_password_text" width="100%" colspan="2" height="38">'+
	             '<p style="margin-left: 25"><font face="Arial" size="2" color="#679DF6">Enter your password</font></td>'+
	          '</tr>'+
	          '<tr>'+
	            '<td width="100%" colspan="2" height="38">'+
	                '<p style="margin-left: 25; margin-right: 25; margin-bottom: 0"><input type="password" id="password" size="50" style="color: #679DF6; background-color: #FAFFBD; border-style: solid; border-width: 1"></p>'+
	              '</td>'+
	          '</tr>'+
	          '<tr>'+
	            '<td id="login_status" width="100%" colspan="2" height="20">'+
	             '<p style="margin-left: 25; margin-top: 0"><font face="Arial" size="2" color="#679DF6"></font></td>'+
	          '</tr>'+
	          '<tr>'+
	            '<td width="50%" valign="bottom" rowspan="2" height="208">'+
	              '<p align="left" style="margin-left: 25; margin-bottom: 5"><font size="2" face="Arial"><a style="text-decoration: none; color: #679DF6" href="http://www.ezhometech.com">www.ezhometech.com</a></font></td>'+
	          '<td width="50%" height="137">'+
	       	    '<p align="right" style="margin-right: 25"><font face="Arial" size="3"><input type="button" value="LOGIN" onclick="javascript:login();" name="Login" style="background-color: #4285F4; color: #FFFFFF; font-size: 12pt; font-family: Arial; position: relative; width: 100; height: 38; font-weight: bold; border: 0 solid #FFFFFF" /></font></p>'+
		    '</td>'+
	          '</tr>'+
	          '<tr>'+
	            '<td width="50%" valign="bottom" height="71">'+
	              '<p style="margin-right: 25; margin-bottom: 5" align="right"><font size="2" color="#679DF6" face="Arial">Ezhometech Inc.</font></td>'+
	          '</tr>'+
	        '</table>'+
	      '</div>'+
	    '</td>'+
	  '</tr>'+
	  '</table>'+
	'</div>';

	main_screen.innerHTML=str;
	
	
}
function goto_line_no(panel_type){
	var total_no;
 	var line_no;
 	var goto_id;
	var i;
	var bFound=0;
	
	if(panel_type==1)
	{
		line_no = document.getElementById("channel_search_field").value;
		total_no=g_total_ch_no;
		goto_id="chname";
	}else if(panel_type==2)
	{
		line_no = document.getElementById("movie_search_field").value;
		total_no=g_total_movie_no;
		goto_id="moviename";
	}else if(panel_type==3)
	{
		line_no = document.getElementById("user_search_field").value;
		total_no=g_user_no;
		goto_id="username";
	}
	
	if (g_goto_item.value!=null)
	{
		g_goto_item.style.backgroundColor = "#ffffff";
	}
	for (i=1;i<=total_no;i++)
	{
		if (i==line_no)
		{
			goto_id=goto_id+i;
			g_goto_item= document.getElementById(goto_id);
			g_goto_item.focus();
			g_goto_item.style.backgroundColor = "#ffff00";
			bFound=1;
		}
		
	}
	if(bFound==0)
	{
		if (line_no==0)
		{
			i=1;
		}else
		{
			i=total_no;
		}
		goto_id=goto_id+i;
		g_goto_item= document.getElementById(goto_id);
		g_goto_item.focus();
		g_goto_item.style.backgroundColor = "#ffff00";
	
	}
}
function search_user_response() {
	if (xmlHttp.readyState == 4) {
		var response = xmlHttp.responseText.split("\r\n");
		var position=0;
		var limit=g_constant_limit;
		if (response!=0)
		{
			position=parseInt(response);
			g_user_found_position=position;
			if ((position%g_constant_limit)>0)
				position=position-(position%g_constant_limit)+1;
			else
				position=position-g_constant_limit+1;
				
			if ((position+g_constant_limit)<=g_user_no)
			{
				limit=g_constant_limit;
			}else
			{
				limit=g_user_no%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
			}
			call_get_users(position,limit);	
			//document.getElementById("user_search_button").value="Find Next";
		}else
		{
			g_user_found_position=0;
			document.getElementById("user_search_button").value="Search";
			alert("Not Found");
		}
		/*var i=0;
		g_search_result=[];
		while (1)
		{
			if (response[i]==0) break;
			g_search_result.push(response[i]);
			//alert(g_search_result[i]);
			i++;
		}*/
		
	}
}
function callServer_search_user() {
	var cgi_url;
	var searchvalue = document.getElementById("user_search_field").value;
	var position=g_user_found_position+1;
	g_search_text=searchvalue;
	
   	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
//		g_user_found_position=0;
//		cgi_url = "/server/search_user?token="+escape(g_token)+ "&position=" +g_user_position+ "&searchvalue=" +searchvalue+"&flag="+Math.random();
		cgi_url = "/server/search_user?token="+escape(g_token)+ "&position=" +position+ "&searchvalue=" +searchvalue+"&flag="+Math.random();
		xmlHttp.open("GET", cgi_url, true);
		// alert(position);
		xmlHttp.onreadystatechange = search_user_response;
		xmlHttp.send(null);
	}

}
function search_channel_response() {
	if (xmlHttp.readyState == 4) {
		var response = xmlHttp.responseText.split("\r\n");
		var position=0;
		var limit=g_constant_limit;
		if (response!=0)
		{
			position=parseInt(response);
			g_channel_found_position=position;
			if ((position%g_constant_limit)>0)
				position=position-(position%g_constant_limit)+1;
			else
				position=position-g_constant_limit+1;
				
			if ((position+g_constant_limit)<=g_total_ch_no)
			{
				limit=g_constant_limit;
			}else
			{
				limit=g_total_ch_no%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
			}
			call_get_channels(position,limit);	
		}else
		{
			g_channel_found_position=0;
			document.getElementById("channel_search_button").value="Search";
			alert("Not Found");
		}
	}
}
function callServer_search_channel() {
	var cgi_url;
	var searchvalue = document.getElementById("channel_search_field").value;
	var position=g_channel_found_position+1;
	g_search_text=searchvalue;
   	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		cgi_url = "/server/search_channel?token="+escape(g_token)+ "&position=" +position+ "&searchvalue=" +searchvalue+"&flag="+Math.random();
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = search_channel_response;
		xmlHttp.send(null);
	}

}
function search_movie_response() {
	if (xmlHttp.readyState == 4) {
		var response = xmlHttp.responseText.split("\r\n");
		var position=0;
		var limit=g_constant_limit;
		if (response!=0)
		{
			position=parseInt(response);
			g_movie_found_position=position;
			if ((position%g_constant_limit)>0)
				position=position-(position%g_constant_limit)+1;
			else
				position=position-g_constant_limit+1;
				
			if ((position+g_constant_limit)<=g_total_movie_no)
			{
				limit=g_constant_limit;
			}else
			{
				limit=g_total_movie_no%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
			}
			call_get_movies(position,limit);	
		}else
		{
			g_movie_found_position=0;
			document.getElementById("movie_search_button").value="Search";
			alert("Not Found");
		}
	}
}
function callServer_all_player(){
	var position=1;
	var limit=g_constant_limit;
	g_search__player_text=null;
   	calllist_active_player_info(position,limit);
}
function callServer_search_player(){
 	var cgi_url;
	var searchvalue = document.getElementById("player_search_field").value;
	var position=1;
	var limit=g_constant_limit;
	
	g_search__player_text=searchvalue;
	//alert(g_search__player_text);
   	calllist_active_player_info(position,limit)

}
function callServer_search_movie() {
	var cgi_url;
	var searchvalue = document.getElementById("movie_search_field").value;
	var position=g_movie_found_position+1;
	g_search_text=searchvalue;
	
   	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		cgi_url = "/server/search_movie?token="+escape(g_token)+ "&position=" +position+ "&searchvalue=" +searchvalue+"&flag="+Math.random();
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = search_movie_response;
		xmlHttp.send(null);
	}

}
/*
function search_user(){
 	var user_id = document.getElementById("user_search_field").value;
	var i;
	var username_id;
	var username;
	var bFound=0;
	var bFirstFound=0;
	if (g_search_user_item.value!=null)
	{
		g_search_user_item.style.backgroundColor = "#ffffff";
	}
	for (i=1;i<=g_user_no;i++)
	{
		username_id="username"+i;
		username=document.getElementById(username_id).value;
		if (username.search(user_id)>=0)
		{
			g_search_user_item=document.getElementById(username_id);
			if (bFirstFound==0)
			{
				g_search_user_item.focus();
				bFirstFound=1;
			}
			g_search_user_item.style.backgroundColor = "#ffff00";
			bFound=1;
			//return;
		}else
		{
			g_search_user_item=document.getElementById(username_id);
			g_search_user_item.style.backgroundColor = "#ffffff";
		}
			
	}
	if(bFound==0)
	{
		alert("Not Found");
	}
}
*/
function search_channel_name(){
 	var channel_id = document.getElementById("channel_search_field").value;
	var i;
	var channelname_id;
	var channelname;
	var bFound=0;
	var bFirstFound=0;
	if (g_search_channel_item.value!=null)
	{
		g_search_channel_item.style.backgroundColor = "#ffffff";
	}
	for (i=1;i<=g_total_ch_no;i++)
	{
		channelname_id="chname"+i;
		channelname=document.getElementById(channelname_id).value;
		if (channelname.search(channel_id)>=0)
		{
			g_search_channel_item=document.getElementById(channelname_id);
			if (bFirstFound==0)
			{
				g_search_channel_item.focus();
				bFirstFound=1;
			}

			g_search_channel_item.style.backgroundColor = "#ffff00";
			bFound=1;
			//return;
		}else
		{
			g_search_channel_item=document.getElementById(channelname_id);
			g_search_channel_item.style.backgroundColor = "#ffffff";
		}
	}
	if(bFound==0)
	{
		alert("Not Found");
	}
}
function search_movie_name(){
 	var movie_id = document.getElementById("movie_search_field").value;
	var i;
	var moviename_id;
	var moviename;
	var bFound=0;
	var bFirstFound=0;
	//alert(movie_id);
	if (g_search_movie_item.value!=null)
	{
		g_search_movie_item.style.backgroundColor = "#ffffff";
	}
	for (i=1;i<=g_total_movie_no;i++)
	{
		moviename_id="moviename"+i;
		moviename=document.getElementById(moviename_id).value;
		//alert(moviename);
		if (moviename.search(movie_id)>=0)
		{
			g_search_movie_item=document.getElementById(moviename_id);
			if (bFirstFound==0)
			{
				g_search_movie_item.focus();
				bFirstFound=1;
			}
			g_search_movie_item.style.backgroundColor = "#ffff00";
			bFound=1;
			//return;
		}else
		{
			g_search_movie_item=document.getElementById(moviename_id);
			g_search_movie_item.style.backgroundColor = "#ffffff";
		}
	}
	if(bFound==0)
	{
		alert("Not Found");
	}
}
/*
function search_player(){
 	var player_id = document.getElementById("player_search_field").value;
	var i;
	var playername_id;
	var playername;
	var playerip_id;
	var playerip;
	var playermac_id;
	var playermac;
	var bFound=0;
	var bFirstFound=0;

	if (g_search_player_item.innerText!=null)
	{
		g_search_player_item.style.backgroundColor = "#CCFFFF";
	}
	for (i=1;i<=g_active_player_no;i++)
	{
		playername_id="username"+i;
		
		playername=document.getElementById(playername_id).innerText;
		if (playername.search(player_id)>=0)
		{
			g_search_player_item=document.getElementById(playername_id);
			if (bFirstFound==0)
			{
				g_search_player_item.focus();
				bFirstFound=1;
			}
			g_search_player_item.style.backgroundColor = "#ffff00";
			bFound=1;
			//return;
		}else
		{
			g_search_player_item=document.getElementById(playername_id);
			g_search_player_item.style.backgroundColor = "#CCE1E6";
		}
		playerip_id="userip"+i;
		
		playerip=document.getElementById(playerip_id).innerText;
		if (playerip.search(player_id)>=0)
		{
			g_search_player_item=document.getElementById(playerip_id);
			if (bFirstFound==0)
			{
				g_search_player_item.focus();
				bFirstFound=1;
			}
			g_search_player_item.style.backgroundColor = "#ffff00";
			bFound=1;
			//return;
		}else
		{
			g_search_player_item=document.getElementById(playerip_id);
			g_search_player_item.style.backgroundColor = "#CCE1E6";
		}
		playermac_id="usermac"+i;
		
		playermac=document.getElementById(playermac_id).innerText;
		if (playermac.search(player_id)>=0)
		{
			g_search_player_item=document.getElementById(playermac_id);
			if (bFirstFound==0)
			{
				g_search_player_item.focus();
				bFirstFound=1;
			}
			g_search_player_item.style.backgroundColor = "#ffff00";
			bFound=1;
			//return;
		}else
		{
			g_search_player_item=document.getElementById(playermac_id);
			g_search_player_item.style.backgroundColor = "#CCE1E6";
		}
			
	}
	if(bFound==0)
	{
		alert("Not Found");
	}
}
*/
function login_out_return() {
  
var ch_up_flag=0;
  
  if (xmlHttp.readyState == 4) 
  {
    var response = xmlHttp.responseText;
	//var content = parent.document.getElementById("content");
	//var detail = parent.document.getElementById("detail");

 /*        ch_up_flag=find_cookie_value("ch_up_flag");       
         if (ch_up_flag==1)
         {
         	callezserver_refresh_channel();
         	Clear_Channel_update();
         }*/
      /*   content.innerHTML='<table border="1" cellpadding="0" cellspacing="0" width="100%" height="451"><tr>'+
              '<td width="100%" height="449"><p align="center"><font face="Arial" size="5">EZserver Management</font></td>'+
              '</tr></table>';
         detail.innerHTML='';
*/
    	g_token=0;	
    	if (g_System_timer>0)
    	{
    		clearInterval(g_System_timer);
    		clearInterval(g_Query_Channel_Status_timer);
    		clearInterval(g_Query_Online_Player_timer);
    	}
 	Clear_cookie();
    // login_status.innerHTML="";
//     menu_main_title.innerHTML="";
	login_dialog();
 
   }

}
function logout()
{
	var cgi_url;
  //var login_status = document.getElementById("login_status");
   var confirm_msg="Logout?";
  var cookieStr;
  var firstpos;
  var endpos;
 	//var content = parent.document.getElementById("content");

	 if (confirm(confirm_msg))
	{
  
          // content.innerHTML='<p align="center" style="margin-top: 30"><font face="Arial" size="5">EZserver Management</font>';
	//content.innerHTML='';
     	g_token=find_cookie_value("token");
  	g_user_id=find_cookie_value("userid");
  	g_password=find_cookie_value("password");
 	 cgi_url = "/token/destroytoken?token="+escape(g_token)+"&flag="+Math.random();
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = login_out_return;
	 xmlHttp.send(null);

	}
}

function init() {

       menu_top.innerHTML='<center><table border="0" cellpadding="0" cellspacing="0">'+
	   '<tr><td>'+
	   '<p style="text-indent: 5"><font face="Arial" size="2" color="#FFFFFF">User ID: </font></p>'+
	   '</td>'+      
	   '<td>'+ 
	   '<font face="Arial"> <font size="2"> <input type="text" name="user_id" id="user_id" size="20" value="root"/></font></font>'+
	   '</td>'+
	   
	   
	   '<td>'+
	   '<p style="text-indent: 5"><font face="Arial" size="2" color="#FFFFFF">Password: </font></p>'+    
	   '</td>'+ 
	                                   
	   '<td> <font face="Arial" size="2"> <input type="password" name="password" id="password" size="20"/></font><font face="Arial"><font size="2"></font>'+
	   '<input type="button" value="OK" onclick="javascript:login();" name="B1" /></font>'+
	   '</td></tr>'+
	   '</table>';
	   Clear_cookie();
	 //  streaming_port();

}
function show_drv_time_cur_time(timestamp)
{
	var cur_video_time=document.getElementById("cur_video_time");
	var dvr_video_time=document.getElementById("dvr_video_time");
	var d=new Date();
	
	var cur_sec=d.getTime();
	var cur_hours=d.getHours();
	var cur_minutes=d.getMinutes();
	var cur_seconds=d.getSeconds();
	var cur_time;

	var dvr_sec;
	var dvr_d;
	var dvr_hours;
	var dvr_minutes;
	var dvr_seconds;
	var dvr_time;
	g_cur_sec=cur_sec;

	g_dvr_sec+=1000;
	//dvr_sec=cur_sec-(g_current_timestamp-g_dvr_timestamp);
	dvr_d=new Date(g_dvr_sec);
	dvr_hours=dvr_d.getHours();
	dvr_minutes=dvr_d.getMinutes();
	dvr_seconds=dvr_d.getSeconds();
		
	
	cur_time= (cur_hours < 10 ? "0" + cur_hours : cur_hours) + ":" + (cur_minutes < 10 ? "0" + cur_minutes : cur_minutes) + ":" + (cur_seconds  < 10 ? "0" + cur_seconds : cur_seconds);
	if (bdvr_on)
	{
		cur_video_time.innerHTML='<p align="center"><font face="Arial" size="2">'+cur_time+'</font>';
	}
	

	dvr_time= (dvr_hours < 10 ? "0" + dvr_hours : dvr_hours) + ":" + (dvr_minutes < 10 ? "0" + dvr_minutes : dvr_minutes) + ":" + (dvr_seconds  < 10 ? "0" + dvr_seconds : dvr_seconds);
	dvr_video_time.innerHTML='<p align="center"><font face="Arial" size="2">'+dvr_time+'</font>';
	//g_current_timestamp+=1000;
	//g_dvr_timestamp+=1000;

}
function Get_Dvr_Starting_Time()
{
 if (xmlHttp.readyState == 4) {
  	var response = xmlHttp.responseText;
  	var d=new Date(response);
 //	alert(response);

  	g_server_dvr_sec=d.getTime();
  //	alert(g_server_dvr_sec);
  	
   	
  }
}
function play_channel(chno,container,dvr_on)
{
	var vlc;
	var vlc_id;
	var flash_video_window;
	var path;
	var video_path;
	var browser_name;
	var str;
	var pos1;
	var browser_name;
	//var video_area = parent.document.getElementById("video_area");
	//var backword_button_id = parent.document.getElementById("backword_button_id");
	//var forward_button_id = parent.document.getElementById("forward_button_id");
	//var to_live_button_id = parent.document.getElementById("to_live_button_id");
	//var cur_video_time = parent.document.getElementById("cur_video_time");
	//var time_text_id = parent.document.getElementById("time_text_id");
	var httpport = g_httpport;
//	var httpport = 8000;

	var  cgi_url;
	var d=new Date();
	var VideoWindow;

	bQuery_Channel_Status=0;
 	//cgi_url= "/server/query_dvr_starting_time?token="+escape(g_token)+ "&ch_no=" +chno+"&flag="+Math.random();
	//xmlHttp.open("GET", cgi_url, true);
	//xmlHttp.onreadystatechange = Get_Dvr_Starting_Time;
	//xmlHttp.send(null);
	//video_area.innerHTML='';
	
	//g_cur_sec=d.getTime();
	//g_dvr_sec=g_cur_sec;
//	video_path=path.substring(43,path.length-11)+'?u=root&p=1234';
	
  	//path=find_cookie_value("video_path");
  	
  	
	//alert(path);
 	//g_user_id=find_cookie_value("userid");
  	//g_password=find_cookie_value("password");

  	//video_path=path+'?u='+g_user_id+':p='+g_password;
	g_token=find_cookie_value("token");
 // 	video_path="http://"+location.host+"/ch"+chno+".flv"+'?token='+g_token;
 //alert(container);
	BrowserDetect.init();
	browser_name=BrowserDetect.browser;
	if (container.search("flv")>=0)
	{// flash	
  			video_path="http://"+location.hostname+":"+httpport+"/ch"+chno+"."+container+'?token='+g_token+':server_ip_port='+location.hostname+":"+httpport;
  		
	}	
	else if (container.search("ch")>=0)
	{
		if (browser_name.search("Safari")==0)
		{ // Apple	
 	 		video_path="http://"+location.hostname+":"+httpport+"/ch"+chno+"."+"m3u8"+'?token='+g_token+':server_ip_port='+location.hostname+":"+httpport;
 		} else
  		{ // VLC 
	 		video_path="http://"+location.hostname+":"+httpport+"/"+chno+"."+container+'?token='+g_token+':server_ip_port='+location.hostname+":"+httpport;
  		}
	}
  	g_video_path=video_path;
 	// alert(video_path);
 	//g_current_timestamp=0;
	//g_dvr_timestamp=0;
	//bdvr_on=0;
	 str="<head><title>CH "+chno+"</title><link rel='stylesheet' type='text/css' href='menu.css'/>"+'<script src="menu.js"></script></head><body>';
//	str='';
 	if (video_path.search("flv")>0)
	{
		if (browser_name.search("Explorer")==0)
		{
			str+='<object>'+
			'<param name="allowFullScreen" value="true" />'+
			'<param name="allowscriptaccess" value="always" />'+
			'<embed src="/flash_player10_1/StrobeMediaPlayback.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="300" height="220" flashvars="src='+video_path+'&autoPlay=true">'+ 
			'</embed>'+
			'</object>';	
		} else 
		{
			str+='<param name="allowFullScreen" value="true"></param>'+
			'<param name="allowscriptaccess" value="always"></param>'+
			'<embed src="/flash_player10_1/StrobeMediaPlayback.swf" autoplay="yes" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="300" height="220" flashvars="src='+video_path+'&autoPlay=true">';
		
	
		}
	}else if (video_path.search("m3u8")>0)
	{ // APPLIE
	 	str+='<video src="'+video_path+'" controls autoplay>';
	 		//alert(str);

	}else if (video_path.search("ch")>0) 
	{ // VLC
		  
		 if (browser_name.search("Explorer")==0)
 		 {
 		 	str+='<OBJECT id="VIDEO" width="100%" height="100%" CLASSID="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" type="application/x-oleobject">'+
			'<PARAM NAME="URL" VALUE="'+video_path+'">'+
			'<PARAM NAME="AutoStart" VALUE="True">'+
			'</OBJECT>';
			 
    		}else
		{
			str+='<embed type="application/x-vlc-plugin" name="player" autoplay="yes" loop="no" '+
			'target="'+video_path+'">';
		}		

	}
	
	str+='</body>';
	
	/* 
	time_text_id.innerHTML='<p align="center"><font face="Arial" size="2">Current Time</font></p>';
	if (dvr_on)
	{
		backword_button_id.innerHTML='<p align="right"><input type="button" value="<<" onclick="javascript:dvr_for_backward(0);" name="B1" /></p>';
		//forward_button_id.innerHTML='<p align="left"><input type="button" value=">>" onclick="javascript:dvr_for_backward(1);" name="B2" /></p>';
	}else
		{
			backword_button_id.innerHTML='';
			forward_button_id.innerHTML='';
			to_live_button_id.innerHTML='';
			cur_video_time.innerHTML='';
		}
		
	g_current_timestamp=0;
	g_timer=setInterval(function(){show_drv_time_cur_time(0)},1000);
	*/
	 VideoWindow= window.open("", "", "top=100, left=100, width=320, height=240"); 
	VideoWindow.document.write(str); 

	//flash_video_window=document.getElementById("flash_video_window");

	//alert(str);
	
	
}
function play_movie(movie_no)
{
	 var movie_src_id="moviesrc"+movie_no; 
	 var movie_src_name="moviename"+movie_no; 
	var movie_src;
	 var movie_name;
	var vlc;
	var vlc_id;
	var flash_video_window;
	var path;
	var video_path;
	var browser_name;
	var str;
	var pos1;
	var browser_name;
	 g_item_name=document.getElementById(movie_src_id);
	 movie_src = g_item_name.value;
	 g_item_name=document.getElementById(movie_src_name);
	 movie_name = g_item_name.value;
	//var video_area = parent.document.getElementById("video_area");
	//var backword_button_id = parent.document.getElementById("backword_button_id");
	//var forward_button_id = parent.document.getElementById("forward_button_id");
	//var to_live_button_id = parent.document.getElementById("to_live_button_id");
	//var cur_video_time = parent.document.getElementById("cur_video_time");
	//var time_text_id = parent.document.getElementById("time_text_id");
	var httpport = g_httpport;
//	var httpport = 8000;

	var  cgi_url;
	var d=new Date();
	var VideoWindow;

 	//cgi_url= "/server/query_dvr_starting_time?token="+escape(g_token)+ "&ch_no=" +chno+"&flag="+Math.random();
	//xmlHttp.open("GET", cgi_url, true);
	//xmlHttp.onreadystatechange = Get_Dvr_Starting_Time;
	//xmlHttp.send(null);
	//video_area.innerHTML='';
	
	//g_cur_sec=d.getTime();
	//g_dvr_sec=g_cur_sec;
//	video_path=path.substring(43,path.length-11)+'?u=root&p=1234';
	
  	//path=find_cookie_value("video_path");
  	
  	
	//alert(path);
 	//g_user_id=find_cookie_value("userid");
  	//g_password=find_cookie_value("password");

  	//video_path=path+'?u='+g_user_id+':p='+g_password;
	g_token=find_cookie_value("token");
 // 	video_path="http://"+location.host+"/ch"+chno+".flv"+'?token='+g_token;
 //alert(container);
	BrowserDetect.init();
	browser_name=BrowserDetect.browser;
	video_path="http://"+location.hostname+":"+httpport+"/"+movie_name+'?token='+g_token+':server_ip_port='+location.hostname+":"+httpport;
  	g_video_path=video_path;
 	//alert(video_path);
 	//g_current_timestamp=0;
	//g_dvr_timestamp=0;
	//bdvr_on=0;
	 str="<head><title>Movie "+movie_no+"</title><link rel='stylesheet' type='text/css' href='menu.css'/>"+'<script src="menu.js"></script></head><body>';
//	str='';
//alert(movie_src);
 	if (movie_src.search("flv")>0)
	{
		
		if (browser_name.search("Explorer")==0)
		{

			str+='<object>'+
			'<param name="allowFullScreen" value="true" />'+
			'<param name="allowscriptaccess" value="always" />'+
			'<embed src="/flash_player10_1/StrobeMediaPlayback.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="300" height="220" flashvars="src='+video_path+'&autoPlay=true">'+ 
			'</embed>'+
			'</object>';	
			
		} else 
		{
			
			
			str+='<param name="allowFullScreen" value="true"></param>'+
			'<param name="allowscriptaccess" value="always"></param>'+
			'<embed src="/flash_player10_1/StrobeMediaPlayback.swf" autoplay="yes" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="300" height="220" flashvars="src='+video_path+'&autoPlay=true">';
			
		
	
		}
		
	}else if (movie_src.search("mp4")>0)
	{ // APPLIE
	 	str+='<video src="'+video_path+'" controls autoplay>';
	 		//alert(str);

	}else if (movie_src.search("ts")>0) 
	{ // VLC
		  
		 if (browser_name.search("Explorer")==0)
 		 {
 		 	str+='<OBJECT id="VIDEO" width="100%" height="100%" CLASSID="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" type="application/x-oleobject">'+
			'<PARAM NAME="URL" VALUE="'+video_path+'">'+
			'<PARAM NAME="AutoStart" VALUE="True">'+
			'</OBJECT>';
			 
    		}else
		{
			str+='<embed type="application/x-vlc-plugin" name="player" autoplay="yes" loop="no" '+
			'target="'+video_path+'">';
		}		

	}
	
	str+='</body>';
	
	
	 VideoWindow= window.open("", "", "top=100, left=100, width=320, height=240"); 
	VideoWindow.document.write(str); 

	
	
}
function play_movie_by_name(movie_name,movie_src)
{
	//var movie_src_id="moviesrc"+movie_no; 
	 //var movie_src_name="moviename"+movie_no; 
	//var movie_src;
	 //var movie_name;
	var vlc;
	var vlc_id;
	var flash_video_window;
	var path;
	var video_path;
	var browser_name;
	var str;
	var pos1;
	var browser_name;
	 //g_item_name=document.getElementById(movie_src_id);
	 //movie_src = g_item_name.value;
	 //g_item_name=document.getElementById(movie_src_name);
	 //movie_name = g_item_name.value;
	//var video_area = parent.document.getElementById("video_area");
	//var backword_button_id = parent.document.getElementById("backword_button_id");
	//var forward_button_id = parent.document.getElementById("forward_button_id");
	//var to_live_button_id = parent.document.getElementById("to_live_button_id");
	//var cur_video_time = parent.document.getElementById("cur_video_time");
	//var time_text_id = parent.document.getElementById("time_text_id");
	var httpport = g_httpport;
//	var httpport = 8000;

	var  cgi_url;
	var d=new Date();
	var VideoWindow;

 	//cgi_url= "/server/query_dvr_starting_time?token="+escape(g_token)+ "&ch_no=" +chno+"&flag="+Math.random();
	//xmlHttp.open("GET", cgi_url, true);
	//xmlHttp.onreadystatechange = Get_Dvr_Starting_Time;
	//xmlHttp.send(null);
	//video_area.innerHTML='';
	
	//g_cur_sec=d.getTime();
	//g_dvr_sec=g_cur_sec;
//	video_path=path.substring(43,path.length-11)+'?u=root&p=1234';
	
  	//path=find_cookie_value("video_path");
  	
  	
	//alert(path);
 	//g_user_id=find_cookie_value("userid");
  	//g_password=find_cookie_value("password");

  	//video_path=path+'?u='+g_user_id+':p='+g_password;
	g_token=find_cookie_value("token");
 // 	video_path="http://"+location.host+"/ch"+chno+".flv"+'?token='+g_token;
 //alert(container);
	BrowserDetect.init();
	browser_name=BrowserDetect.browser;
	video_path="http://"+location.hostname+":"+httpport+"/"+unescape(movie_name)+'?token='+g_token+':server_ip_port='+location.hostname+":"+httpport;
	//alert(video_path);
  	g_video_path=video_path;
 	//alert(video_path);
 	//g_current_timestamp=0;
	//g_dvr_timestamp=0;
	//bdvr_on=0;
	 str="<head><title>Movie "+movie_name+"</title><link rel='stylesheet' type='text/css' href='menu.css'/>"+'<script src="menu.js"></script></head><body>';
//	str='';
//alert(movie_src);
 	if (movie_src.search("flv")>0)
	{
		
		if (browser_name.search("Explorer")==0)
		{

			str+='<object>'+
			'<param name="allowFullScreen" value="true" />'+
			'<param name="allowscriptaccess" value="always" />'+
			'<embed src="/flash_player10_1/StrobeMediaPlayback.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="300" height="220" flashvars="src='+video_path+'&autoPlay=true">'+ 
			'</embed>'+
			'</object>';	
			
		} else 
		{
					
			str+='<param name="allowFullScreen" value="true"></param>'+
			'<param name="allowscriptaccess" value="always"></param>'+
			'<embed src="/flash_player10_1/StrobeMediaPlayback.swf" autoplay="yes" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="300" height="220" flashvars="src='+video_path+'&autoPlay=true">';
			
		
	
		}
		
	}else if (movie_src.search("mp4")>0)
	{ // APPLIE
		str+='<video controls width=320 height=240 autoplay>'+
		'<source src="'+video_path+'" type="video/mp4">'+
		'</video>';
		//alert(str);
		

	}else if (movie_src.search("ts")>0) 
	{ // VLC
		  
		 if (browser_name.search("Explorer")==0)
 		 {
 		 	str+='<OBJECT id="VIDEO" width="100%" height="100%" CLASSID="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" type="application/x-oleobject">'+
			'<PARAM NAME="URL" VALUE="'+video_path+'">'+
			'<PARAM NAME="AutoStart" VALUE="True">'+
			'</OBJECT>';
			 
    		}else
		{
			str+='<embed type="application/x-vlc-plugin" name="player" autoplay="yes" loop="no" '+
			'target="'+video_path+'">';
		}		

	}
	
	str+='</body>';
	
	
	 VideoWindow= window.open("", "", "top=100, left=100, width=340, height=260"); 
	VideoWindow.document.write(str); 

	
	
}
//function dvr_response()
function dvr_for_backward(sign)
{

  	var video_window;
	var path;
	var video_path;
	var browser_name;
	var str;
	var pos1;
	var browser_name;
	var backid=document.getElementById("back");
	var to_live_button_id=document.getElementById("to_live_button_id");
	var time_text_id=document.getElementById("time_text_id");
	var cur_video_time=document.getElementById("cur_video_time");
	var timestamp;
	
	bdvr_on=1;
	
	//if (xmlHttp.readyState == 4) 
	//{	
	//	var response = xmlHttp.responseText;
		if (sign==0)
		{
			g_dvr_sec-=30*1000;
			forward_button_id.innerHTML='<p align="left"><input type="button" value=">>" onclick="javascript:dvr_for_backward(1);" name="B2" /></p>';

		}
		
		else if (sign==1)
		{
			g_dvr_sec+=30*1000;
			backword_button_id.innerHTML='<p align="right"><input type="button" value="<<" onclick="javascript:dvr_for_backward(0);" name="B1" /></p>';
		}


	//	var request_time_stamp;
	//	alert(g_dvr_timestamp);
	//	alert(g_current_timestamp);
		//alert(g_skip_value);
		// FLV
//		request_time_stamp=parseFloat(response)+g_skip_value*1000;
//		g_dvr_timestamp=g_dvr_timestamp+g_skip_value*1000;
		path=g_video_path;
		if (g_dvr_sec>g_cur_sec)
		{
			g_dvr_sec=g_cur_sec;
			forward_button_id.innerHTML='';
			to_live_button_id.innerHTML='';
			cur_video_time.innerHTML='';
			time_text_id.innerHTML='<p align="center"><font face="Arial" size="2">Cur Time</font></p>';
			bdvr_on=0;
		  	video_path=path;

		} else if (g_dvr_sec<=g_server_dvr_sec)
		{
			g_dvr_sec=g_server_dvr_sec;
			to_live_button_id.innerHTML='<p align="center"><input type="button" value="To Live" onclick="javascript:dvr_to_live();" name="B2" /></p>';
			time_text_id.innerHTML='<p align="center"><font face="Arial" size="2">DVR Time</font></p>';
			timestamp=g_dvr_sec-g_server_dvr_sec;	
		  	video_path=path+":timestamp="+timestamp;
			//backword_button_id.innerHTML='';
		}else
		{
			to_live_button_id.innerHTML='<p align="center"><input type="button" value="To Live" onclick="javascript:dvr_to_live();" name="B2" /></p>';
			time_text_id.innerHTML='<p align="center"><font face="Arial" size="2">DVR Time</font></p>';
			timestamp=g_dvr_sec-g_server_dvr_sec;
		  	video_path=path+":timestamp="+timestamp;

		}
		
	//	alert(request_time_stamp);
		//g_dvr_timestamp=request_time_stamp;
	  	
	  	
		//alert(path);
	 	//g_user_id=find_cookie_value("userid");
	  	//g_password=find_cookie_value("password");
	
	  	//video_path=path+'?u='+g_user_id+':p='+g_password;
		g_token=find_cookie_value("token");
		//timestamp=g_dvr_sec-g_server_dvr_sec;

	  	//video_path=path+":timestamp="+timestamp;
	 	//alert(video_path);
	 
	 	BrowserDetect.init();
		browser_name=BrowserDetect.browser;
		if (video_path.search("flv")>0)
		{
			if (browser_name.search("Explorer")==0)
			{
				str='<object>'+
				'<param name="allowFullScreen" value="true" />'+
				'<param name="allowscriptaccess" value="always" />'+
				'<embed src="/flash_player10_1/StrobeMediaPlayback.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" flashvars="src='+video_path+'&autoPlay=true">'+ 
				'</embed>'+
				'</object>';	
			} else if (browser_name.search("Safari")==0)
			{
		
			}else
			{			
				str='<param name="allowFullScreen" value="true"></param>'+
				'<param name="allowscriptaccess" value="always"></param>'+
				'<embed src="/flash_player10_1/StrobeMediaPlayback.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true"  flashvars="src='+video_path+'&autoPlay=true">';
			}
				
						
				
	
		} else if (video_path.search("m3u8")>0)
		{
			if (browser_name.search("Safari")==0)
			{
				str='<video src="'+video_path+':server_ip_port='+location.host+'" controls autoplay>';
			}
			
		}else if (video_path.search("ch")>0) 
		{
			 if (browser_name.search("Explorer")==0)
	 		 {
	 		 	str='<OBJECT id="VIDEO" width="100%" height="100%" CLASSID="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" type="application/x-oleobject">'+
				'<PARAM NAME="URL" VALUE="'+video_path+'">'+
				'<PARAM NAME="AutoStart" VALUE="True">'+
				'</OBJECT>';
				 
	    		}else
			{
				str='<embed type="application/x-vlc-plugin" name="player" autoplay="yes" loop="no" '+
				'target="'+video_path+'">';
			}	
		}
		
		

		
		video_window=document.getElementById("video_area");
	
		//alert(str);
		video_window.innerHTML=str;
	//}

}
function dvr_to_live()
{

  	var video_window;
	var path;
	var video_path;
	var browser_name;
	var str;
	var pos1;
	var browser_name;
	var backid=document.getElementById("back");
	var time_text_id=document.getElementById("time_text_id");
	var cur_video_time=document.getElementById("cur_video_time");
	var timestamp;

	var to_live_button_id=document.getElementById("to_live_button_id");
	bdvr_on=0;
	//if (xmlHttp.readyState == 4) 
	//{	
	//	var response = xmlHttp.responseText;
	

		
	//	alert(request_time_stamp);
		path=g_video_path;
		g_dvr_sec=g_cur_sec;
		timestamp=g_dvr_sec-g_server_dvr_sec;
		g_token=find_cookie_value("token");
//	  	video_path=path+":timestamp="+timestamp;
	  	video_path=path;
	 	//alert(video_path);

	 
	 	BrowserDetect.init();
		browser_name=BrowserDetect.browser;
		if (video_path.search("flv")>0)
		{
			if (browser_name.search("Explorer")==0)
			{
				str='<object>'+
				'<param name="allowFullScreen" value="true" />'+
				'<param name="allowscriptaccess" value="always" />'+
				'<embed src="/flash_player10_1/StrobeMediaPlayback.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" flashvars="src='+video_path+'&autoPlay=true">'+ 
				'</embed>'+
				'</object>';	
			} else if (browser_name.search("Safari")==0)
			{
		
			}else
			{			
				str='<param name="allowFullScreen" value="true"></param>'+
				'<param name="allowscriptaccess" value="always"></param>'+
				'<embed src="/flash_player10_1/StrobeMediaPlayback.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" flashvars="src='+video_path+'&autoPlay=true">';
			}
				
						
				
	
		} else if (video_path.search("m3u8")>0)
		{
			if (browser_name.search("Safari")==0)
			{
				str='<video src="'+video_path+':server_ip_port='+location.host+'" controls autoplay>';
				//alert(str);
			}
			
		}else if (video_path.search("ch")>0) 
		{ // VLC
			  
			 if (browser_name.search("Explorer")==0)
	 		 {
	 		 	str='<OBJECT id="VIDEO" width="100%" height="100%" CLASSID="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" type="application/x-oleobject">'+
				'<PARAM NAME="URL" VALUE="'+video_path+'">'+
				'<PARAM NAME="AutoStart" VALUE="True">'+
				'</OBJECT>';
				 
	    		}else
			{
				str='<embed type="application/x-vlc-plugin" name="player" autoplay="yes" loop="no" '+
				'target="'+video_path+'">';
			}		
		}
		

		
		video_window=document.getElementById("video_area");
	
		//alert(str);
		video_window.innerHTML=str;
		to_live_button_id.innerHTML='';
		time_text_id.innerHTML='<p align="center"><font face="Arial" size="2">Current Time</font></p>';
		cur_video_time.innerHTML='';
		forward_button_id.innerHTML='';
	//}

}

function get_system_log()
{
    if (xmlHttp.readyState == 4) {

	var response = xmlHttp.responseText;
	var content = parent.document.getElementById("content");
	var str;
	var str1;
	var iret;
	var totalret=0;
	var HTML_str='';
	var i=1;
	

	str1=response;
	while (1)
	{
		iret=str1.search("\n");
		//alert(iret);
		totalret+=iret;
	 	if (iret==-1) break;
	 	str=str1.substring(0,iret);
	 	//alert(str);
	 	HTML_str=HTML_str+'<font face="Arial" size="2">'+str+'</font><br>';
	 	str1=response.substring(totalret+i,response.length);
	 	//alert(str1);
	 	i++;
	 	
	}
	
	
	content.innerHTML='<table><tr><td><p align="right"><font face="Arial" size="2"><a href='+"'javascript:void(0)'"+' onclick=callServer_get_system_log()>Refresh</a></font></td></tr>'+
	'<tr><td>'+HTML_str+'</td></tr>'+
	'<tr><td><p align="right"><font face="Arial" size="2"><a href='+"'javascript:void(0)'"+' onclick=callServer_get_system_log()>Refresh</a></font></td></tr>'+
	'</table>';
	//alert(content.innerHTML);
    }
}

function callServer_get_system_log() {
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 	var content = parent.document.getElementById("content");
	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;

 	content.innerHTML='<table><tr><td><p align="right"><font face="Arial" size="2">Loading</font></p></td></tr></table>';
	if (g_token!=0)
	{
		cgi_url="/log/system.log"			
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = get_system_log;
		xmlHttp.send(null);
	}

}

function CH_inquery()
{
 
 if (xmlHttp.readyState == 4) {


    var response = xmlHttp.responseText.split("\r\n");
    var ch_no;
    var ch_name;
    var ch_src;
    var ch_icon;
    var ch_category;
    var ch_type;
    var ch_status;
    var ch_bitrate;
    var ch_play_id;
    var ch_title="<p>"+"Channel List"+"</p>";
    var ch_list;
    var i=0;
    var j=0;
    var box_no=1;
	var ch_active_no=0;
	var HTML_str='';
	var strlength=0;
	var pos=0;
    var content = parent.document.getElementById("content");
  //var detail = parent.document.getElementById("detail");
  var dvr_folder_on=0;
	var refresh_keyword=null;
	var play_keyword=null;
	var save_keyword=null;
	var add_keyword=null;
	var del_keyword=null;
	var more_keyword=null;


	content.innerHTML="";
//	detail.innerHTML="";
	
	g_search_channel_item.value=null;

	 HTML_str= '<table border="0" cellpadding="0" cellspacing="10">'+
	  '<tr>'+
	      '<td width="20" align="center"> <input type="checkbox" name="checkallbox" id=checkallbox  onclick=set_all_checked(g_total_ch_no)></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2"></font></td>'+
	      '<td width="100" align="center"><font face="Arial" size="2">Channel Name</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Media Source</font></td>'+
	      '<td width="140" align="center"><font face="Arial" size="2">Icon Path</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Category</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Type</font></td>'+
	      '<td width="120" align="center"><font face="Arial" size="2">Status(Uptime)</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Bitrate(Kbps)</font></td>'+
 	 '</tr>'+'<tr><td  colspan="9"><hr size="1" color="#66FFFF"></td></tr>';
 	
	while (1)
	{
 	 	if (response[i]==0) break;
		//alert(response[i]);
	 	strlength=response[i].length;
	 	//alert(strlength);
   	    	ch_no=response[i].slice(3,strlength);
     	 	strlength=response[i+1].length;
   	    	ch_name=response[i+1].slice(5,strlength);
     	 	strlength=response[i+2].length;
   	    	ch_src=response[i+2].slice(4,strlength);
     	 	strlength=response[i+3].length;
   	    	ch_icon=response[i+3].slice(5,strlength);
     	 	strlength=response[i+4].length;
 	    	ch_category=response[i+4].slice(9,strlength);
     	 	strlength=response[i+5].length;
   	    	ch_type=response[i+5].slice(5,strlength);
   	    	if (ch_type.search("dvr")>=0)
   	    	{
   	    		dvr_folder_on=1;
   	    	}else
   	    	{
   	    		dvr_folder_on=0;
   	    	}
   	    	strlength=response[i+6].length;
  	    	ch_status=response[i+6].slice(7,strlength);
  	    	//alert(ch_status);
  	    	strlength=response[i+7].length;
  	    	ch_bitrate=response[i+7].slice(8,strlength);
   	    		
   	    	

 		i=i+8;
		ch_active_no++;
		HTML_str=HTML_str+
		   '<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
		   '<td width="20" align="center">'+
	 		' <input type="checkbox" name=checkbox'+ch_no+
	 		' id=checkbox'+ch_no+'></td>'+
		      '<td width="20" align="center"><font face="Arial" size="2">'+ch_no+'</font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="chname"'+
	 		' id=chname'+ch_no+
	 		' size="14" value="'+
	 		unescape(ch_name)+'"/></font></td>'+
		      '<td width="200" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" title="'+ch_src+'" name="chsrc"'+
	 		' id=chsrc'+ch_no+
	 		' size="30" value="'+
	 		ch_src+'"/></font></td>'+
		      '<td width="140" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" title="'+ch_icon+'" name="chicon"'+
	 		' id=chicon'+ch_no+
	 		' size="20" value="'+
	 		ch_icon+'"/></font></td>'+
		      '<td width="10" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="chcategory"'+
	 		' id=chcategory'+ch_no+
	 		' size="15" value="'+
	 		unescape(ch_category)+'"/></font></td>'+
	 		
		      '<td width="60" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		
			' <select size="1" name="chtype" id=chtype'+ch_no+'>';
			//alert(ch_type);
			if (ch_type.search("live")>=0)
			{
				HTML_str+='<option selected="selected" value="live">'+"Live"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}else if (ch_type.search("delay")>=0)
			{
				for (k=0;k<g_delaytime_array.length;k++)
				{
					
					if (ch_type.search(g_delayvalue_array[k])==0)
					{
						break;
					}
				}
				//alert(k);
				HTML_str+='<option value="live">'+"Live"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					if (j!=k)
					{
						HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					}else 
					{
						HTML_str+='<option selected="selected" value="'+g_delayvalue_array[k]+'">'+g_delaytime_array[k]+'</option>';
					}
											
				}
			}else if (ch_type.search("dvr")>=0)
			{
				HTML_str+='<option selected="selected" value="dvr">'+"DVR"+'</option>'+
				'<option value="live">'+"Live"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}else if (ch_type.search("inactive")>=0)
			{
				HTML_str+='<option selected="selected" value="inactive">'+"Inactive"+'</option>'+
				'<option value="live">'+"Live"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}else if (ch_type.search("movie")>=0)
			{
				HTML_str+='<option selected="selected" value="movie">'+"Movie"+'</option>'+
				'<option value="live">'+"Live"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}
			/* else if (ch_type.search("hls")>=0)
			{
				HTML_str+='<option selected="selected" value="hls">'+"HLS"+'</option>'+
				'<option value="live">'+"Live"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}
			*/
			HTML_str+='</select></font></td>';
			
			//alert(ch_status);		

			if (ch_status.search("OFF")>=0)
			{
		      		HTML_str+='<td id=chstatus'+ch_no+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font></td>';
			}else
			{
		      		HTML_str+='<td id=chstatus'+ch_no+' width="100" align="center"><font face="Arial" size="2">'+ch_status+'</font></td>';

			}
	      		HTML_str+='<td id=chbitrate'+ch_no+' width="100" align="center"><font face="Arial" size="2">'+ch_bitrate+'</font></td>';
		
			add_keyword="Add";
			del_keyword="Del";
			save_keyword="Save";
			refresh_keyword="Refresh";
			play_keyword="Play";
			more_keyword="More";
			
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Add_New_Channel("'+ch_no+'")>'+
			' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';

			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Copy_10_Channels("'+ch_no+'")>'+
			' <img border="0" id="copybutton" alt="Copy 10 channels" title="Copy 10 channels" src="add_multiple_icon.PNG"></a></td>';

			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=callServer_CH_Update("'+ch_no+'")>'+
			' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
			
			
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Del_Channel("'+ch_no+'")>'+
			' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
			
			
			HTML_str+='<td id=querystatusbutton'+ch_no+' align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=callServer_Query_One_Channel_Status("'+ch_no+'")>'+
			' <img border="0" id="querybutton" alt="Query" title="Query" src="query_icon.PNG"></a></td>';

			
			
			HTML_str+='<td id=refreshchannelbutton'+ch_no+' align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Refresh_A_Channel("'+ch_no+'")>'+
			' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a></td>';
			
			
			HTML_str+='<td id=morechannelbutton'+ch_no+' align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Get_Server_IP("'+ch_no+'")>'+
			' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>';
			
			HTML_str+='<td align="center" id=ch_play_id'+ch_no+'>';
			if (ch_src.search("rtmp")==0)
			{
			    HTML_str+="<a href='javascript:void(0)'"+
			    ' onclick=play_channel("'+ch_no+'",'+'"flv"'+','+dvr_folder_on+')>'+
			    ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
			}
			else
			{
			    HTML_str+="<a href='javascript:void(0)'"+
			    ' onclick=play_channel("'+ch_no+'",'+'"ch"'+','+dvr_folder_on+')>'+
			    ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
			}				
			
							
			HTML_str+='</tr>';
			
				
		    
		box_no++;
     }
      //    content.innerHTML=HTML_str;
      // alert(menu_main.innerHTML);
      
  	      
      	      HTML_Menu_Bar_Str='<td id=ch_menu_bar>';
      	      if (g_show_free_version==1)
      	      {
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Cut</font>'+'&nbsp&nbsp&nbsp';
	
	 	      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Copy</font>'+'&nbsp&nbsp&nbsp';
	 
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Paste</font>'+'&nbsp&nbsp&nbsp';
      	      }else
      	      {
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_cut_selected_channel()>"+
		      '<font size="2" face="Arial">Cut</font></a>'+'&nbsp&nbsp&nbsp';
	
	 	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_copy_selected_channel()>"+
		      '<font size="2" face="Arial">Copy</font></a>'+'&nbsp&nbsp&nbsp';
	 
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_paste_selected_channel()>"+
		      '<font size="2" face="Arial">Paste</font></a>'+'&nbsp&nbsp&nbsp';
	
	      }


 	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_delete_selected_channel()>"+
	      '<font size="2" face="Arial">Delete</font></a>'+'&nbsp&nbsp&nbsp';

 	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_refresh_selected_channel()>"+
	      '<font size="2" face="Arial">Refresh</font></a>'+'&nbsp&nbsp&nbsp';

	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=Preview_callServer_CH_Inquery()>"+
	      '<font size="2" face="Arial">Preview</font></a>'+'&nbsp&nbsp&nbsp';
	      
	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callServer_CH_Inquery()>"+
	      '<font size="2" face="Arial">Auto Query</font></a>'+'&nbsp&nbsp&nbsp';

	      if (g_show_free_version==1)
	      {
	          HTML_Menu_Bar_Str+='<font size="2" face="Arial">Import</font>'+'&nbsp&nbsp&nbsp';
	      }else
	      {
	          HTML_Menu_Bar_Str+="<a href='javascript:void(0)' id='ImportBtn' onclick=call_import_channel()>"+
		     '<font size="2" face="Arial">Import</font></a>'+'&nbsp&nbsp&nbsp';
	      }
	      
 	      //HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_export_channel_definition()>"+
	      //'<font size="2" face="Arial">Export</font></a>'+'&nbsp&nbsp&nbsp';

	      HTML_Menu_Bar_Str+='</td>';

	if (ch_active_no==0)
	{	
		i=1;
		ch_src="";
		ch_icon="";
		ch_name="";
		ch_category="";
		ch_status="";
		ch_bitrate="";
	      HTML_str=HTML_str+'<tr>'+
	      '<td width="20" align="center">'+
		' <input type="checkbox" name=checkbox'+i+
		' id=checkbox'+i+'></td>'+
	      '<td width="100" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
	      '<td width="20" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="chname"'+
		' id=chname'+i+
		' size="14"/'+
		'</font></td>'+
	      '<td width="200" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="chsrc"'+
		' id=chsrc'+i+
		' size="30"/'+
		'</font></td>'+
	      '<td width="200" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="chicon"'+
		' id=chicon'+i+
		' size="30"/'+
		'</font></td>'+
	      '<td width="10" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="chcategory"'+
		' id=chcategory'+i+
		' size="10"/'+
		'</font></td>'+
		
	      '<td width="200" align="center">'+
		' <font face="Arial" size="2">'+
		' <select size="1" name="chtype" id=chtype'+i+'>';
		
		HTML_str+='<option selected="selected" value="live">'+"Live"+'</option>'+
		'<option value="movie">'+"Movie"+'</option>'+
		'<option value="dvr">'+"DVR"+'</option>'+
		//'<option value="hls">'+"HLS"+'</option>'+
		'<option value="inactive">'+"Inactive"+'</option>';
		for (j=0;j<g_delaytime_array.length;j++)
		{
			
			HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
			
		}
		HTML_str+='</select></font></td>';
	
		HTML_str+='<td id=chstatus'+i+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font></td>';
		HTML_str+='<td id=chbitrate'+i+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+'<b>'+ch_bitrate+'</b>'+'</font></td>';
	      	HTML_str+=
	      		'<td id=add_id_button align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_Channel("'+i+'")>'+
	      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>'+
	      	
	      		'<td id=copy_id_button align="center">'+
		       ' <font face="Arial" size="2"></font></a></td>'+
	      	      
		      '<td id=save_id_button align="center">'+		      
		      "<a href='javascript:void(0)'"+
		      ' onclick=Cancel_Add_Channel()>'+
	      	      ' <img border="0" id="delbutton" alt="Cancel" title="Cancel" src="del_icon.PNG"></a></td>'+
	      	      
		      '<td id=del_id_button  align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
	
		      
		      '<td id=querystatusbutton align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
	
		      '<td id=refreshchannelbutton'+i+' align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
		      
		      '<td id=more_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
		      
		      '<td align="center" id=ch_play_id'+i+' align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>';
	
	}
	

 	content.innerHTML='<table width=99%><tr><td>'+
  	'<font size="2" face="Arial">Channel Total: '+ ch_active_no+'</td></tr><tr>'+HTML_Menu_Bar_Str+
 	'<td><font face="Arial" size="2"> <input name="channel_search_field" id="channel_search_field" size="20"/></font><font face="Arial"><font size="2"></font>'+
	   '<input type="button" value="Search" onclick="javascript:search_channel_name();" name="search_channel_name" /></font>'+
	   '<input type="button" value="Go to" onclick="javascript:goto_line_no(1);" name="goto_channel_no" /></font>'+	   
	   '</td></tr>'+
	'</table>'+HTML_str+'</table>';
	
	g_total_ch_no=ch_active_no;
	
	// alert(g_Query_Channel_Status_timer);
	bQuery_Channel_Status=1;
	if (g_Query_Channel_Status_timer==0)
	{
		g_Query_Channel_Status_timer=setInterval(function(){callServer_Query_Channel_Status_Timer()},10*1000);
		// alert(g_Query_Channel_Status_timer);
	}

/*	if (g_Channel_Edit_Mode==1)
	{
		bQuery_Channel_Status=0;
	}else
	{	
		bQuery_Channel_Status=1;
		if (g_Query_Channel_Status_timer==0)
		{
			g_Query_Channel_Status_timer=setInterval(function(){callServer_Query_Channel_Status_Timer()},10*1000);
			// alert(g_Query_Channel_Status_timer);
		}
	}
*/	

 
 }

 
}
function Preview_CH_inquery()
{
   var content = parent.document.getElementById("content");
   var str;
   var buffer;
   var i;
 //  var path;
   var trstart=0;
   var strtext;
   var video_path;
   var browser_name;
   var buffer_video_text;
  // var media_text;
 //  var media_text_path;
     var ch_no;
    var ch_name;
    var ch_src;
   var ch_type;
     var dvr_folder_on=0;

 
  if (xmlHttp.readyState == 4) {
  var response = xmlHttp.responseText.split("\r\n");
   // alert(g_file_path);
     str='';
     strtext='';
      	  BrowserDetect.init();
  	  browser_name=BrowserDetect.browser;
 	g_token=find_cookie_value("token");
 	//alert(g_token);
	if (g_token==0) return; 


        for (i=0;;i=i+8)
  	{
	//  alert(response[i]);
	    if (response[i]==0)
  	    {
  	    	break;
 	    } else
  	    {
 	 	strlength=response[i].length;
	 //	alert(strlength);
   	    	ch_no=response[i].slice(3,strlength);
   	    	//alert(ch_no);
     	 	strlength=response[i+1].length;
   	    	ch_name=response[i+1].slice(5,strlength);
     	 	strlength=response[i+2].length;
   	    	ch_src=response[i+2].slice(4,strlength);
   	    	//alert(ch_src);
     	 	strlength=response[i+3].length;
   	    	picture_path=response[i+3].slice(11,strlength);
   	    	//alert(picture_path);
     	 	strlength=response[i+5].length;
   	    	ch_type=response[i+5].slice(5,strlength);
  	    	//picture_path='/'+g_file_path.replace("videos","pictures")+'/ch'+ch_no+'.jpg';;
	  	//media_text_path='/'+picture_path.replace("videos","text")+'/ch'+ch_no+'.htm';;
	    	if (trstart==0)
  	    	{
  	    		str+='<tr>';
  	    		strtext+='<tr>';
  	    	} 
  		if (ch_type.search("dvr")>=0)
   	    	{
   	    		dvr_folder_on=1;
   	    	}else
   	    	{
   	    		dvr_folder_on=0;
   	    	}
	  	 

		if (ch_src.search("rtmp")==0)
		{
			str+='<td width="16%" valign="middle" align="center" height="185">'+
			'<a style="text-decoration:none"'+ 
			"href='javascript:void(0)'"+
		    	' onclick=play_channel("'+ch_no+'",'+'"flv"'+','+dvr_folder_on+')>'+
			'<img border="0" src="'+picture_path+'" width="150" height="213"></a></td>';
			strtext+='<td width="16%" valign="middle" align="center" height="23"><font size="2" color="#000000" face="Arail">'+unescape(ch_name)+'</font></td>';
		}
		else
		{
			str+='<td width="16%" valign="middle" align="center" height="185">'+
			'<a style="text-decoration:none"'+ 
			"href='javascript:void(0)'"+
		    	' onclick=play_channel("'+ch_no+'",'+'"ch"'+','+dvr_folder_on+')>'+
			'<img border="0" src="'+picture_path+'" width="150" height="213"></a></td>';
			strtext+='<td width="16%" valign="middle" align="center" height="23"><font size="2" color="#000000" face="Arail">'+unescape(ch_name)+'</font></td>';
		}	
 		

		trstart++;
		if (trstart==5)
  	    	{
  	    		str+='</tr>';
  	    		strtext+='</tr>';
  	    		str+=strtext;
  	    		strtext='';
  	    		trstart=0;
 	    		
  	    	}
 		//alert(str);
 		
  	    } 
      }
  	if (trstart!=0)
 	{
 	  	    		str+='</tr>';
	  	    		strtext+='</tr>';
	  	    		str+=strtext;
	}
 	content.innerHTML='<center><table border="0" cellpadding="10" cellspacing="0" width="100%">'+str+'</table></center>';
   }
  	
}
function Preview_callServer_CH_Inquery() {
  var content = parent.document.getElementById("content");

 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	
	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;
   	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		cgi_url = "/server/query_channel_list?token="+escape(g_token)+"&flag="+Math.random();
		content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Channel Preview Loading...<p>';
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Preview_CH_inquery;
		xmlHttp.send(null);
	}

}
function Button_Server_System_Inquery() {
    //document.getElementById('home_button').onmousedown=function () {
   /* document.getElementById('homebutton').src = 
    "home_down.PNG";
   // };
    document.getElementById('home_button').onmouseout=function () {
    document.getElementById('homebutton').src = 
    "home.PNG";
    };
    */
   // document.getElementById(g_current_button_id).style.color = "#cccccc";
   // document.getElementById('home_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
    g_current_button_id='home_button';
	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";
   callServer_System_Inquery();
}


function Button_Get_Channel_Statistics() {
/*    document.getElementById('statisticsbutton').src = 
    "statistics_down.PNG";
    document.getElementById('statistics_button').onmouseout=function () {
    document.getElementById('statisticsbutton').src = 
    "statistics.PNG";
    };
    */
  //  document.getElementById(g_current_button_id).style.color = "#cccccc";
  // document.getElementById('statistics_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
   g_current_button_id='statistics_button';
	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";

    bGet_Channel_Statistics=0;
    callServer_Get_Channel_Statistics();
}
function Button_Server_EPG_Inquery() {
   // document.getElementById('channel_button').onmousedown=function () {
   /* document.getElementById('epgbutton').src = 
    "epg_down.PNG";
    //};
    document.getElementById('epg_button').onmouseout=function () {
    document.getElementById('epgbutton').src = 
    "epg.PNG";
    };
    */
 //   document.getElementById(g_current_button_id).style.color = "#cccccc";
 //  document.getElementById('epg_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
   g_current_button_id='epg_button';
	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";

    callServer_Get_EPG_Info();
}

function Button_get_all_user() {
   // document.getElementById('user_button').onmousedown=function () {
   /* document.getElementById('userbutton').src = 
    "user_down.PNG";
    //};
    document.getElementById('user_button').onmouseout=function () {
    document.getElementById('userbutton').src = 
    "user.PNG";
    };
    */
 //   document.getElementById(g_current_button_id).style.color = "#cccccc";
 //  document.getElementById('user_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
	g_current_button_id='user_button';
	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";

    var position=1;
    var limit=g_constant_limit;
    g_copy_paste=0;
    if (g_user_no<limit)
    {
    	limit=g_user_no;
    }
    g_user_name_order_flag=0;
    g_user_group_order_flag=0;
    g_user_expired_date_order_flag=0;

    call_get_users(position,limit);
    
}
function Button_Server_CH_Inquery() {
   // document.getElementById('channel_button').onmousedown=function () {
   /* document.getElementById('channelbutton').src = 
    "channel_down.PNG";
    //};
    document.getElementById('channel_button').onmouseout=function () {
    document.getElementById('channelbutton').src = 
    "channel.PNG";
    };
    */
 //    document.getElementById(g_current_button_id).style.color = "#cccccc";
 // document.getElementById('channel_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
   g_current_button_id='channel_button';
	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";

    var position=1;
    var limit=g_constant_limit;
    if (g_total_ch_no<limit)
    {
    	limit=g_total_ch_no;
    }
    g_channel_name_order_flag=0;
    g_channel_category_order_flag=0
    call_get_channels(position,limit);
 
  //  callServer_CH_Inquery();
}
function Button_Server_Movie_Inquery() {
   // document.getElementById('movie_button').onmousedown=function () {
   /* document.getElementById('moviebutton').src = 
    "movie_down.PNG";
    //};
    document.getElementById('movie_button').onmouseout=function () {
    document.getElementById('moviebutton').src = 
    "movie.PNG";
    };
    */
 //  document.getElementById(g_current_button_id).style.color = "#cccccc";
 //  document.getElementById('movie_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
   g_current_button_id='movie_button';
	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";

    var position=1;
    var limit=g_constant_limit;
    if (g_total_movie_no<limit)
    {
    	limit=g_total_movie_no;
    }
    g_movie_name_order_flag=0;
    g_movie_category_order_flag=0;

    call_get_movies(position,limit);
//  callServer_Movie_Inquery();
}
function Button_Server_group_Inquery() {
   // document.getElementById('group_button').onmousedown=function () {
   /* document.getElementById('groupbutton').src = 
    "group_down.PNG";
    //};
    document.getElementById('group_button').onmouseout=function () {
    document.getElementById('groupbutton').src = 
    "group.PNG";
    };
    */
 //   document.getElementById(g_current_button_id).style.color = "#cccccc";
 //  document.getElementById('group_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
   g_current_button_id='group_button';
 	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";
  callServer_group_Inquery();
}
function Button_active_player_info() {
    //document.getElementById('player_button').onmousedown=function () {
   /* document.getElementById('playerbutton').src = 
    "player_down.PNG";
    //};
    document.getElementById('player_button').onmouseout=function () {
    document.getElementById('playerbutton').src = 
    "player.PNG";
    };
    */
 //   document.getElementById(g_current_button_id).style.color = "#cccccc";
 //  document.getElementById('player_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
   g_current_button_id='player_button';
  	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";
  bQuery_Online_Player=0;
    var position=1;
    var limit=g_constant_limit;
     calllist_active_player_info(position,limit);
}
function Button_alert_player_info() {
    //document.getElementById('alert_player_button').onmousedown=function () {
    /* document.getElementById('alertplayerbutton').src = 
    "alert_player_down.PNG";
    //};
    document.getElementById('alert_player_button').onmouseout=function () {
    document.getElementById('alertplayerbutton').src = 
    "alert_player.PNG";
    };
    */
 //   document.getElementById(g_current_button_id).style.color = "#cccccc";
  // document.getElementById('alert_player_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
    g_current_button_id='alert_player_button';
 	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";
  calllist_alert_player_info();
}
function Button_get_reseller() {
    //document.getElementById('reseller_button').onmousedown=function () {
    /* document.getElementById('resellerbutton').src = 
    "reseller_down.PNG";
    //};
    document.getElementById('reseller_button').onmouseout=function () {
    document.getElementById('resellerbutton').src = 
    "reseller.PNG";
    };
    */
 //   document.getElementById(g_current_button_id).style.color = "#cccccc";
  // document.getElementById('reseller_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
    g_current_button_id='reseller_button';
  	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";
 call_get_reseller();
}
function Button_player_filter() {
    //document.getElementById('player_filter_button').onmousedown=function () {
   /* document.getElementById('playerfilterbutton').src = 
    "player_filter_down.PNG";
    //};
    document.getElementById('player_filter_button').onmouseout=function () {
    document.getElementById('playerfilterbutton').src = 
    "player_filter.PNG";
    };
    */
 //   document.getElementById(g_current_button_id).style.color = "#cccccc";
 //  document.getElementById('player_filter_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
    g_current_button_id='player_filter_button';
  	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";
 call_player_filter();
}
function Button_mac_blocker() {
    //document.getElementById('mac_blocker_button').onmousedown=function () {
   /* document.getElementById('macblockerbutton').src = 
    "mac_blocker_down.PNG";
    //};
    document.getElementById('mac_blocker_button').onmouseout=function () {
    document.getElementById('macblockerbutton').src = 
    "mac_blocker.PNG";
    };
    */
 //    document.getElementById(g_current_button_id).style.color = "#cccccc";
 // document.getElementById('mac_blocker_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
   g_current_button_id='mac_blocker_button';
	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";

    call_mac_blocker();
}
function Button_Server_blacklist_Inquery() {
    //document.getElementById('blacklist_button').onmousedown=function () {
    /* document.getElementById('blacklistbutton').src = 
    "blacklist_down.PNG";
    //};
    document.getElementById('blacklist_button').onmouseout=function () {
    document.getElementById('blacklistbutton').src = 
    "blacklist.PNG";
    };
    */
 //   document.getElementById(g_current_button_id).style.color = "#cccccc";
 //  document.getElementById('blacklist_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
   g_current_button_id='blacklist_button';
	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";

    callServer_blacklist_Inquery();
}
function Button_Server_balancer_Inquery() {
    //document.getElementById('blacklist_button').onmousedown=function () {
    /* document.getElementById('balancerbutton').src = 
    "balancer_down.PNG";
    //};
    document.getElementById('balancer_button').onmouseout=function () {
    document.getElementById('balancerbutton').src = 
    "balancer.PNG";
    };
    */
//    document.getElementById(g_current_button_id).style.color = "#cccccc";
 //  document.getElementById('balancer_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
   g_current_button_id='balancer_button';
	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";

    callServer_balancer_Inquery();
}
function Button_Setting() {
    //document.getElementById('setting_button').onmousedown=function () {
    /* document.getElementById('settingbutton').src = 
    "setting_down.PNG";
    //};
    document.getElementById('setting_button').onmouseout=function () {
    document.getElementById('settingbutton').src = 
    "setting.PNG";
    };
    */
 //  document.getElementById(g_current_button_id).style.color = "#cccccc";
  // document.getElementById('setting_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
   g_current_button_id='setting_button';
	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";

    callServer_Setting();
}
function Button_restart() {
    //document.getElementById('restart_button').onmousedown=function () {
    /* document.getElementById('restartbutton').src = 
    "restart_down.PNG";
    //};
    document.getElementById('restart_button').onmouseout=function () {
    document.getElementById('restartbutton').src = 
    "restart.PNG";
    };
    */
 //  document.getElementById(g_current_button_id).style.color = "#cccccc";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
   g_current_button_id='restart_button';
	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";

    callserver_restart();
}
function Button_shutdown() {
    //document.getElementById('shutdown_button').onmousedown=function () {
    /* document.getElementById('shutdownbutton').src = 
    "shutdown_down.PNG";
    //};
    document.getElementById('shutdown_button').onmouseout=function () {
    document.getElementById('shutdownbutton').src = 
    "shutdown.PNG";
    };
    */
 //   document.getElementById(g_current_button_id).style.color = "#cccccc";
  //  document.getElementById('shutdown_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
     g_current_button_id='shutdown_button';
  	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";
 callserver_shutdown();
}
function Button_get_system_log() {
    //document.getElementById('log_button').onmousedown=function () {
    /* document.getElementById('logbutton').src = 
    "log_down.PNG";
    //};
    document.getElementById('log_button').onmouseout=function () {
    document.getElementById('logbutton').src = 
    "log.PNG";
    };
    */
 //  document.getElementById(g_current_button_id).style.color = "#cccccc";
  //  document.getElementById('log_button').style.color = "#ffffff";
	document.getElementById(g_current_button_id).style.backgroundColor = TableMenuBackgroundNormalColor;
   g_current_button_id='log_button';
	document.getElementById(g_current_button_id).style.backgroundColor = "#E2E2E2";

    callServer_get_system_log();
}
function callServer_CH_Inquery() {
 // var ch_no = document.getElementById("ch_no").value;
  var content = parent.document.getElementById("content");

 //var url = "/cgi-bin/cgi_eziptv?channel_inquery="+escape(ch_no)+"&flag="+Math.random();
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	
	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;
   	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		cgi_url = "/server/query_channel_list?token="+escape(g_token)+"&flag="+Math.random();
		content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Channel Information Loading...<p>';
		
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = CH_inquery;
		xmlHttp.send(null);
	}

}

function callezserver_all_channel() {

	//var button_id = document.getElementById("channel_on_off_button");
	g_show_off_channel=0;
	g_channel_position=1;
	g_channel_limit=g_constant_limit;
	call_get_channels(g_channel_position,g_channel_limit);

}

function get_off_channel()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    //alert(response);
    if (response==0)
    {
   	alert("No OFF channel");
    }else if (response>0)
    {
	g_off_channel_no=response;
    	g_show_off_channel=1;
    	//alert(g_channel_position);
    	g_channel_position=1;
    	if (g_off_channel_no>g_constant_limit)
    	{
		g_channel_limit=g_constant_limit;
	}else
	{
		g_channel_limit=g_off_channel_no;
	}
	call_get_channels(g_channel_position,g_channel_limit);
    }
    	
  }
}
function callezserver_off_channel()
{
	var cgi_url;
	
	g_token=find_cookie_value("token");
	cgi_url = "/server/get_off_channel_no?token="+escape(g_token)+"&flag="+Math.random();
	
	xmlHttp.open("GET", cgi_url, true);
	xmlHttp.onreadystatechange = get_off_channel;
	xmlHttp.send(null);	
}
function call_get_channels(position,limit) {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 	//alert(position);
 	//alert(limit);
   	g_token=find_cookie_value("token");
	g_channel_position=position;
	g_channel_limit=limit;
	//alert(g_channel_limit);
	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;
	if (g_token!=0)
	{
		if (g_show_off_channel==0)
		{
			cgi_url = "/server/get_channels?token="+escape(g_token)+"&position="+position+"&limit="+limit+"&flag="+Math.random();
		}else if (g_show_off_channel==1)
		{
			cgi_url = "/server/get_channels?token="+escape(g_token)+"&position="+position+"&limit="+limit+"&offchannel=1"+"&flag="+Math.random();
		}
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = get_channels;
		xmlHttp.send(null);
	}

}
function close_modal() {
   var modal = document.getElementById('PanelModal');
   modal.style.display = "none";
}

function open_modal()
{
	var modal = document.getElementById('PanelModal');
	modal.style.display = "block";
}function open_setting_modal()
{
	var modal = document.getElementById('PanelModalSetting');
	modal.style.display = "block";
}
function close_setting_modal() {
   var modal = document.getElementById('PanelModalSetting');
   modal.style.display = "none";
}
function sort_channel_ascending()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
 	var content;
   //alert(response);
    if (response==0)
    {
   	alert("Sort Failed");
    	if (g_channel_name_order_flag==1)
    	{
    		g_channel_name_order_flag=0;
 		content = document.getElementById("channel_name_id");
 		content.innerHTML='<font face="Arial" size="2">Channel Name</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      '<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';
   	}else if (g_channel_category_order_flag==1)
    	{
    		g_channel_category_order_flag=0;
  		content = document.getElementById("category_id");
 		content.innerHTML='<font face="Arial" size="2">Category</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_ascending("category") title="A to Z">'+'&#x25b2'+'</a></font>'+
	      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_descending("category") title="Z to A">'+'&#x25bc'+'</a></font>';
 	}
    }else if (response>0)
    {
    	g_show_off_channel=0;
   	g_channel_position=1;
   	g_channel_limit=g_constant_limit;
   	call_get_channels(g_channel_position,g_channel_limit);
    }
    	
  }
}
function callezserver_sort_channel_ascending(sortkey)
{
	var cgi_url;
	var content;
	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;
	if (sortkey=="name")
	{
		content = document.getElementById("channel_name_id");
		g_channel_name_order_flag=1;
		g_channel_category_order_flag=0;
	}else if (sortkey=="category")
	{
		content = document.getElementById("category_id");
		g_channel_name_order_flag=0;
		g_channel_category_order_flag=1;
	}
	content.innerHTML='<div class="loader"></div>';
	g_token=find_cookie_value("token");
	cgi_url = "/server/sort_channel_ascending?token="+escape(g_token)+"&sortkey="+sortkey+"&flag="+Math.random();
	
	xmlHttp.open("GET", cgi_url, true);
	xmlHttp.onreadystatechange = sort_channel_ascending;
	xmlHttp.send(null);	
}
function sort_channel_descending()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
 	var content;
   //alert(response);
    if (response==0)
    {
  	alert("Sort Failed");
    	if (g_channel_name_order_flag==2)
    	{
    		g_channel_name_order_flag=0;
  		content = document.getElementById("channel_name_id");
  		content.innerHTML='<font face="Arial" size="2">Channel Name</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      '<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';
	     
  	}else if (g_channel_category_order_flag==2)
    	{
    		g_channel_category_order_flag=0;
 		content = document.getElementById("category_id");
 		content.innerHTML='<font face="Arial" size="2">Category</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_ascending("category") title="A to Z">'+'&#x25b2'+'</a></font>'+
	      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_descending("category") title="Z to A">'+'&#x25bc'+'</a></font>';
	      
   	}
     }else if (response>0)
    {
    	g_show_off_channel=0;
   	g_channel_position=1;
   	g_channel_limit=g_constant_limit;
  	call_get_channels(g_channel_position,g_channel_limit);
    }
    	
  }
}
function callezserver_sort_channel_descending(sortkey)
{
	var cgi_url;
	var content;
	
	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;
	if (sortkey=="name")
	{
		content = document.getElementById("channel_name_id");
		g_channel_name_order_flag=2;
		g_channel_category_order_flag=0;
	}else if (sortkey=="category")
	{
		content = document.getElementById("category_id");
		g_channel_name_order_flag=0;
		g_channel_category_order_flag=2;
	}
	content.innerHTML='<div class="loader"></div>';
	g_token=find_cookie_value("token");
	cgi_url = "/server/sort_channel_descending?token="+escape(g_token)+"&sortkey="+sortkey+"&flag="+Math.random();
	
	xmlHttp.open("GET", cgi_url, true);
	xmlHttp.onreadystatechange = sort_channel_descending;
	xmlHttp.send(null);	
}				
function get_channels()
{
 
 if (xmlHttp.readyState == 4) {


    var response = xmlHttp.responseText.split("\r\n");
    var ch_no;
    var ch_name;
    var ch_src;
    var ch_icon;
    var ch_category;
    var ch_type;
    var ch_status;
    var ch_bitrate;
    var ch_play_id;
    var ch_title="<p>"+"Channel List"+"</p>";
    var ch_list;
    var i=0;
    var j=0;
    var box_no=1;
	var ch_active_no=0;
	var total_no=0;
	var new_total_no;
	var HTML_str='';
	var strlength=0;
	var pos=0;
    var content = parent.document.getElementById("content");
  //var detail = parent.document.getElementById("detail");
  var dvr_folder_on=0;
	var refresh_keyword=null;
	var play_keyword=null;
	var save_keyword=null;
	var add_keyword=null;
	var del_keyword=null;
	var more_keyword=null;
	var endposition;
	var position;
	var limit;
	var curren_sequence_no;
	var total_sequence;
	var start_sequence_no;
	var current_position=g_channel_position;
	var total_count=0;;
	//alert(g_channel_position);
	if (g_show_off_channel==0)
	{
		total_count=g_total_ch_no;
	}else if (g_show_off_channel==1)
	{
		total_count=g_off_channel_no;
	}

	content.innerHTML="";
//	detail.innerHTML="";
	
	g_search_channel_item.value=null;

//	 HTML_str= '<table border="0" cellpadding="0" cellspacing="10">'+
	 HTML_str= '<table border="0" align="center">'+
	  '<tr>'+
	      '<td width="20" align="center"> <input type="checkbox" name="checkallbox" id=checkallbox  onclick=set_all_checked(g_total_ch_no)></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2"></font></td>'+
	      '<td id="channel_name_id" width="100" align="center"><font face="Arial" size="2">Channel Name</font>';
	      if (g_channel_name_order_flag==0)
	      {
		      HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      '<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';
	      }else if (g_channel_name_order_flag==1)
	      {
		      HTML_str+='<font face="Arial" size="2" color="#cccccc">'+'&#x25b2'+'</font>'+
		      '<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';
	      }else if (g_channel_name_order_flag==2)
	      {
		      HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      '<font face="Arial" size="2" color="#cccccc">'+'&#x25bc'+'</a></font>';
	      }
	      HTML_str+='</td>'+
	      '<td width="10" align="center"><font face="Arial" size="2"></font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Media Source</font></td>'+
	      '<td width="140" align="center"><font face="Arial" size="2">Icon Path</font></td>'+
	      '<td id="category_id" width="60" align="center"><font face="Arial" size="2">Category</font>';
	      if (g_channel_category_order_flag==0)
	      {
	      	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_ascending("category") title="A to Z">'+'&#x25b2'+'</a></font>'+
	      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_descending("category") title="Z to A">'+'&#x25bc'+'</a></font>';
	      }else if (g_channel_category_order_flag==1)
	      {
	      	HTML_str+='<font face="Arial" size="2" color="#cccccc">'+'&#x25b2'+'</font>'+
	      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_descending("category") title="Z to A">'+'&#x25bc'+'</a></font>';
	      }else if (g_channel_category_order_flag==2)
	      {
	      	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_channel_ascending("category") title="A to Z">'+'&#x25b2'+'</a></font>'+
	      	'<font face="Arial" size="2" color="#cccccc">'+'&#x25bc'+'</font>';
	      }
	      
	      HTML_str+='</td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Type</font></td>'+
	      '<td width="120" align="center"><font face="Arial" size="2">Status</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Bitrate(Kbps)</font></td>'+
 	 '</tr>'+'<tr><td  colspan="10"><hr size="1" color="#66FFFF"></td></tr>';
 	
	while (1)
	{
 	 	if (response[i]==0) break;
		//alert(response[i]);
	 	strlength=response[i].length;
	 	//alert(strlength);
   	    	ch_no=response[i].slice(3,strlength);
     	 	strlength=response[i+1].length;
   	    	ch_name=response[i+1].slice(5,strlength);
     	 	strlength=response[i+2].length;
   	    	ch_src=response[i+2].slice(4,strlength);
     	 	strlength=response[i+3].length;
   	    	ch_icon=response[i+3].slice(5,strlength);
     	 	strlength=response[i+4].length;
 	    	ch_category=response[i+4].slice(9,strlength);
     	 	strlength=response[i+5].length;
   	    	ch_type=response[i+5].slice(5,strlength);
   	    	if (ch_type.search("dvr")>=0)
   	    	{
   	    		dvr_folder_on=1;
   	    	}else
   	    	{
   	    		dvr_folder_on=0;
   	    	}
   	    	strlength=response[i+6].length;
  	    	ch_status=response[i+6].slice(7,strlength);
  	    	//alert(ch_status);
  	    	strlength=response[i+7].length;
  	    	ch_bitrate=response[i+7].slice(8,strlength);
   	    		
   	    	

 		i=i+8;
		total_no++;
		HTML_str=HTML_str+
		   '<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
		   '<td width="20" align="center">';
		      if (g_channel_found_position==ch_no)
		      {
	 		HTML_str+=' <input type="checkbox" checked name=checkbox'+ch_no;
	 	      }else
	 	      {
	 		HTML_str+=' <input type="checkbox" name=checkbox'+ch_no;
	 	      }
	 	      HTML_str+=' id=checkbox'+ch_no+'></td>';

		      HTML_str+='<td width="20" align="center"><font face="Arial" size="2">'+ch_no+'</font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" title="'+ch_name+'" name="chname"'+
	 		' id=chname'+ch_no+
	 		' size="14" value="'+
	 		unescape(ch_name)+'"/></font></td>'+
		       '<td  style="cursor: pointer;" width="20">'+
			'<div class="dropdown">'+
				'<button class="dropbtn">'+
 //				'<button class="dropbtn" title="Action">'+
  				'<div class="bar1"></div>'+
  				'<div class="bar2"></div>'+
  				'<div class="bar3"></div>'+
				'</button>'+
  				'<div class="dropdown-content">'+
     					"<a href='javascript:void(0)'"+
					' onclick=callServer_CH_Update("'+ch_no+'")>'+'<table><tr><td width=10%><img src="save.png"></td><td><font face="Arial" size="3"><b>Save</b></font></td></tr></table></a>'+
					"<a href='javascript:void(0)'"+
					' onclick=call_Get_Server_IP("'+ch_no+'")>'+'<table><tr><td width=10%><img src="edit.png"></td><td><font face="Arial" size="3"><b>Edit more options</b></font></td></tr></table></a>'+
    					'</div>'+
			'</div>'+
	 		'</td>'+
			'<td width="200" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" title="'+ch_src+'" name="chsrc"'+
	 		' id=chsrc'+ch_no+
	 		' size="30" value="'+
	 		ch_src+'"/></font></td>'+
		      '<td width="140" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" title="'+ch_icon+'" name="chicon"'+
	 		' id=chicon'+ch_no+
	 		' size="20" value="'+
	 		ch_icon+'"/></font></td>'+
		      '<td width="10" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="chcategory"'+
	 		' id=chcategory'+ch_no+
	 		' size="15" value="'+
	 		unescape(ch_category)+'"/></font></td>'+
	 		
		      '<td width="60" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		
			' <select size="1" name="chtype" id=chtype'+ch_no+'>';
			//alert(ch_type);
			if (ch_type.search("live")>=0)
			{
				HTML_str+='<option selected="selected" value="live">'+"Live"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}else if (ch_type.search("delay")>=0)
			{
				for (k=0;k<g_delaytime_array.length;k++)
				{
					
					if (ch_type.search(g_delayvalue_array[k])==0)
					{
						break;
					}
				}
				//alert(k);
				HTML_str+='<option value="live">'+"Live"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					if (j!=k)
					{
						HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					}else 
					{
						HTML_str+='<option selected="selected" value="'+g_delayvalue_array[k]+'">'+g_delaytime_array[k]+'</option>';
					}
											
				}
			}else if (ch_type.search("dvr")>=0)
			{
				HTML_str+='<option selected="selected" value="dvr">'+"DVR"+'</option>'+
				'<option value="live">'+"Live"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}else if (ch_type.search("inactive")>=0)
			{
				HTML_str+='<option selected="selected" value="inactive">'+"Inactive"+'</option>'+
				'<option value="live">'+"Live"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}else if (ch_type.search("movie")>=0)
			{
				HTML_str+='<option selected="selected" value="movie">'+"Movie"+'</option>'+
				'<option value="live">'+"Live"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}
			/* else if (ch_type.search("hls")>=0)
			{
				HTML_str+='<option selected="selected" value="hls">'+"HLS"+'</option>'+
				'<option value="live">'+"Live"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}
			*/
			HTML_str+='</select></font></td>';
			
			//alert(ch_status);		

			if (ch_status.search("OFF")>=0)
			{
		      		HTML_str+='<td id=chstatus'+ch_no+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font></td>';
			}else
			{
		      		HTML_str+='<td id=chstatus'+ch_no+' width="100" align="center"><font face="Arial" size="2">'+ch_status+'</font></td>';

			}
	      		HTML_str+='<td id=chbitrate'+ch_no+' width="100" align="center"><font face="Arial" size="2">'+ch_bitrate+'</font></td>';
			HTML_str+='</tr>';
			
				
		    
		box_no++;
     	}

	//if (total_no>0)
	//{	
		new_total_no=Number(g_total_ch_no)+1;
		menustr1='<table width=100%><tr>';
		menustr1+='<td width="4%">'+
		'<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Add" onclick="javascript:open_modal();" />';
		menustr1+='<div id="PanelModal" class="modal">'+
				'<div class="modal-content">'+
				'<span onclick="javascript:close_modal();" class="close">&times;</span>';
    				menustr1+='<table align="center">';
    				menustr1+='<tr><td><font face="Arial"><font size="2">Channel No. : </font></td><td width="350" height="23">'+
				' <font face="Arial" size="2">'+
				' <input type="text" name="chno"'+
				' id="chno"'+
				' size="3" value="'+
				new_total_no+
				'"/></font></td></tr>';
				menustr1+='<tr><td><font face="Arial" font size="2">Channel Name : </font></td><td width="20">'+
				 	' <font face="Arial" size="2">'+
				 	' <input type="text" name="chname"'+
				 	' id=chname'+
				 	' size="20"/'+
				 	'</font></td></tr>';
				menustr1+='<tr><td><font face="Arial" font size="2">Media Source : </font></td><td>'+
				 		' <font face="Arial" size="2">'+
				 		' <input type="text" name="chsrc"'+
				 		' id=chsrc'+
				 		' size="50"/'+
				 		'</font></td></tr>';
				menustr1+='<tr><td><font face="Arial" size="2">Icon Path : </font></td><td>'+
				 		' <font face="Arial" size="2">'+
				 		' <input type="text" name="chicon"'+
				 		' id=chicon'+
				 		' size="50"/'+
				 		'</font></td></tr>';
				menustr1+='<tr><td><font face="Arial" size="2">Category : </font></td><td>'+
				 		' <font face="Arial" size="2">'+
				 		' <input type="text" name="chcategory"'+
				 		' id=chcategory'+
				 		' size="20"/'+
				 		'</font></td></tr>';
				 		
				menustr1+='<tr><td><font face="Arial" size="2">Type : </font></td><td>'+
				 		' <font face="Arial" size="2">'+
						' <select size="1" name="chtype" id=chtype>';
				 		
						menustr1+='<option selected="selected" value="live">'+"Live"+'</option>'+
						'<option value="movie">'+"Movie"+'</option>'+
						'<option value="dvr">'+"DVR"+'</option>'+
						//'<option value="hls">'+"HLS"+'</option>'+
						'<option value="inactive">'+"Inactive"+'</option>';
						for (j=0;j<g_delaytime_array.length;j++)
						{
							
							menustr1+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
							
						}
				menustr1+='</select></font></td></tr>';
				menustr1+='<tr><td><input type="button" value="Add" onclick=call_Add_Channel() name="Save" /></td></tr></table>'+
				'</div>'+
			'</div></td>';
		if (g_show_free_version!=1)
		{
			if (g_copy_paste==0)
			{
				menustr1+='<td valign="top"><p style="margin-top: 10"><Input name="channel_cut_field" id="channel_cut_field" type="button" value="&nbsp;&nbsp;Cut&nbsp;&nbsp;&nbsp;" onclick="javascript:callezserver_cut_selected_channel();" />';
			}else
			{
				menustr1+='<td valign="top"><p style="margin-top: 10"><Input name="channel_cut_field" id="channel_cut_field" type="button" value="&nbsp;Paste&nbsp;" onclick="javascript:callezserver_paste_selected_channel();" />';
			}
		}else
		{
			menustr1+='<td valign="top"><p style="margin-top: 10"><Input disabled name="channel_cut_field" id="channel_cut_field" type="button" value="&nbsp;&nbsp;Cut&nbsp;&nbsp;&nbsp;" onclick="javascript:callezserver_cut_selected_channel();" />';
		}

		menustr1+='&nbsp<Input type="button" value="Refresh" onclick="javascript:callezserver_refresh_selected_channel();" />';
		
		if (g_show_free_version!=1)
		{
			menustr1+='&nbsp<Input type="button" value="Import" onclick="javascript:call_import_channel();" />';
				
		}else
		{
			menustr1+='&nbsp<Input disabled type="button" value="Import" onclick="javascript:call_import_channel();" />';
			
		}
		
		//menustr1+='<Input type="button" value="Export" onclick="javascript:call_export_channel_definition();" />';
		if (g_show_off_channel==0)
	 	{
			menustr1+='&nbsp<input id="channel_on_off_button" type="button" value="OFF" onclick="javascript:callezserver_off_channel();" />';
		}else if (g_show_off_channel==1)
		{
			
			menustr1+='&nbsp<input id="channel_on_off_button" type="button" value="All" onclick="javascript:callezserver_all_channel();" />';
		}
		menustr1+='&nbsp<input type="button" value="Delete" onclick="javascript:callezserver_delete_selected_channel();" />';
		menustr1+='&nbsp<input name="channel_search_field" id="channel_search_field" size="20" value="'+g_search_text+'"/></font><font face="Arial">';
		if (g_channel_found_position>0)
		{
		   menustr1+='&nbsp<input type="button" value="Find Next" onclick="javascript:callServer_search_channel();" id="channel_search_button" name="search_channel" />';
		}else
		{
		   menustr1+='&nbsp<input type="button" value="Search" onclick="javascript:callServer_search_channel();" id="channel_search_button" name="search_channel" />';
		}
		  menustr1+='</td></tr>'+
		 '<tr><td colspan=2><hr size="1" color="#66FFFF"></td></tr>'+
		      '</table>';
	
		if (total_count==0)
		{
			current_position=0;
			endposition=0;
		}else
		{
			endposition=current_position+total_no-1;
		}
		menustr2='<table width=100%><tr><td width="13%" align="right">'+'<font face="Arial"> <font size="2">Showing '+ current_position+' to '+endposition+' of </td>';
		menustr2+='<td width="20%" id=total_no_top_id>'+'<font face="Arial"> <font size="2">'+total_count+' channels</td>';
		position=1;
		limit=g_constant_limit;
		if (total_count>g_constant_limit)
		{	
			menustr2+='<td width="67%"><font face="Arial" size="2"><input type="button" value="First" onclick="javascript:call_get_first_channel('+position+','+limit+')"; /> </font>';
		
			if (current_position-g_constant_limit<0)
			{
					
				menustr2+='<font face="Arial" size="2"><input type="button" disabled value="Previous" onclick="javascript:call_get_channels('+position+','+limit+')"; /> </font>';
			}else
			{
				position=current_position-g_constant_limit;
				if ((position+g_constant_limit)<=total_count)
				{
					limit=g_constant_limit;
				}else
				{
					limit=total_count%g_constant_limit;
					if (limit==0) limit=g_constant_limit;
				}
				menustr2+='<font face="Arial" size="2"><input type="button" value="Previous" onclick="javascript:call_get_channels('+position+','+limit+')"; /> </font>';
			}
			// user sequence
			total_sequence=Math.floor(total_count/g_constant_limit);
			//alert(total_sequence);
			if ((total_count%g_constant_limit) > 0)
			{
				total_sequence++;
			}
			
			curren_sequence_no=Math.floor(current_position/g_constant_limit)+1;
			if ((total_sequence-curren_sequence_no)<g_sequence_constant_limit)
			{
				start_sequence_no=total_sequence-g_sequence_constant_limit;
			}else
			{
				start_sequence_no=curren_sequence_no-(g_sequence_constant_limit/2);
			}
			if (start_sequence_no<=0) start_sequence_no=1;
			//if (total_sequence<g_sequence_constant_limit)
			//{
			//	start_sequence_no=1;
			//}
			for (i=(start_sequence_no-1)*g_constant_limit+1,j=start_sequence_no,k=1;;j++,k++)
			{
				if (j>=total_sequence)
				{
					position=i;
					limit=total_count%g_constant_limit;
					if (limit==0) limit=g_constant_limit;
					if (j<10)
					{
						if (j==curren_sequence_no)
						{
							menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="0'+j+'" onclick="javascript:call_get_channels('+position+','+limit+')"; /> </font>';
						}else
						{
							menustr2+='<font face="Arial" size="2"><input type="button" value="0'+j+'" onclick="javascript:call_get_channels('+position+','+limit+')"; /> </font>';
						}
					}else
					{
						if (j==curren_sequence_no)
						{
							menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="'+j+'" onclick="javascript:call_get_channels('+position+','+limit+')"; /> </font>';
						}else
						{
							menustr2+='<font face="Arial" size="2"><input type="button" value="'+j+'" onclick="javascript:call_get_channels('+position+','+limit+')"; /> </font>';
						}
					}
					//menustr2+='</td>';
					break;
				}
				if (k<=g_sequence_constant_limit)
				{
					position=i;
					limit=g_constant_limit;
					if (j<10)
					{
						if (j==curren_sequence_no)
						{
							menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="0'+j+'" onclick="javascript:call_get_channels('+position+','+limit+')"; /> </font>';
						}else
						{
							menustr2+='<font face="Arial" size="2"><input type="button" value="0'+j+'" onclick="javascript:call_get_channels('+position+','+limit+')"; /> </font>';
						}
					}else
					{
						if (j==curren_sequence_no)
						{
							menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="'+j+'" onclick="javascript:call_get_channels('+position+','+limit+')"; /> </font>';
						}else
						{
							menustr2+='<font face="Arial" size="2"><input type="button" value="'+j+'" onclick="javascript:call_get_channels('+position+','+limit+')"; /> </font>';
						}
					}
					i+=g_constant_limit;
				}else
				{
					//menustr2+='</td>';
					break;
				}
				
				
			}
			if (endposition+1<=total_count)
			{
				position=endposition+1;
				if ((position+g_constant_limit)<=total_count)
				{
					limit=g_constant_limit;
				}else
				{
					limit=total_count%g_constant_limit;
					if (limit==0) limit=g_constant_limit;
				}
				menustr2+='<font face="Arial" size="2"><input type="button" value="Next" onclick="javascript:call_get_channels('+position+','+limit+')"; /> </font>';
			}else
			{
				menustr2+='<font face="Arial" size="2"><input type="button" disabled value="Next" onclick="javascript:call_get_channels('+position+','+limit+')"; /> </font>';
			}
			if ((total_count%g_constant_limit)==0)
			{
				position=total_count-g_constant_limit+1;
				limit=g_constant_limit;
			}else
			{
				position=total_count-(total_count%g_constant_limit)+1;
				limit=total_count%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
			}
			menustr2+='<font face="Arial" size="2"><input type="button" value="Last" onclick="javascript:call_get_channels('+position+','+limit+')"; /></font>';
			menustr2+='</td></tr></table>';
		}else
		{
			menustr2+='<td>';
		}
	 /*	content.innerHTML='<table width=99%><tr><td>'+
	  	'<font size="2" face="Arial">Channel Total: '+ total_no+'</td></tr><tr>'+HTML_Menu_Bar_Str+
	 	'<td><font face="Arial" size="2"> <input name="channel_search_field" id="channel_search_field" size="20"/></font><font face="Arial"><font size="2"></font>'+
		   '<input type="button" value="Search" onclick="javascript:search_channel_name();" name="search_channel_name" /></font>'+
		   '<input type="button" value="Go to" onclick="javascript:goto_line_no(1);" name="goto_channel_no" /></font>'+	   
		   '</td></tr>'+
		'</table>'+HTML_str+'</table>'+menustr2;
		*/
		content.innerHTML=menustr1+HTML_str+'</table>'+menustr2;
		
		//g_total_ch_no=total_no;
		
		// alert(g_Query_Channel_Status_timer);
		bQuery_Channel_Status=1;
		if (g_Query_Channel_Status_timer==0)
		{
			g_Query_Channel_Status_timer=setInterval(function(){callServer_Get_Channels_Status_Timer()},10*1000);
			// alert(g_Query_Channel_Status_timer);
		} 
	//}
 }
}
function Get_Channel_Statistics()
{
 
 if (xmlHttp.readyState == 4) {


	var response = xmlHttp.responseText.split("\r\n");
	var ch_no;
	var ch_name;
	var ch_watched_no=0;
	var ch_uptime=0;
	var ch_status;
	var ch_bitrate;
	var i=0;
	var j=0;
	var total_ch_no=0;
	var ch_active_player_no=0;
	var HTML_str='';
	var strlength=0;
	var content = parent.document.getElementById("content");
	var menustr1;
	if (response==0)
	{
	 	alert("For Enterprise Version Only...");
	}else
	{
		content.innerHTML="";
		
	
		 HTML_str= '<table border="0" cellpadding="0" cellspacing="10">'+
		  '<tr>'+
		      '<td width="5%" align="center"><font face="Arial" size="2">No.</font></td>'+
		      '<td width="20%" align="center"><font face="Arial" size="2">CH Name</font></td>'+
		      '<td width="15%" align="center"><font face="Arial" size="2">Today Watched_No.</font></td>'+
		      '<td width="15%" align="center"><font face="Arial" size="2">Active Player No.</font></td>'+
		      '<td width="15%" align="center"><font face="Arial" size="2">Uptime</font></td>'+
		      '<td width="20%" align="center"><font face="Arial" size="2">Status(Buffer Index, Buffer Size)</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">Bitrate(Kbps)</font></td>'+
	 	 '</tr>'+'<tr><td  colspan="7"><hr size="1" color="#66FFFF"></td></tr>';
	 	
		while (1)
		{
	 	 	if (response[i]==0) break;
			//alert(response[i]);
		 	strlength=response[i].length;
		 	//alert(strlength);
	   	    	ch_no=response[i].slice(3,strlength);
	     	 	strlength=response[i+1].length;
	   	    	ch_name=response[i+1].slice(5,strlength);
	     	 	strlength=response[i+2].length;
	   	    	ch_watched_no=response[i+2].slice(11,strlength);
	     	 	strlength=response[i+3].length;
	   	    	ch_active_player_no=response[i+3].slice(10,strlength);
	     	 	strlength=response[i+4].length;
	   	    	ch_uptime=response[i+4].slice(7,strlength);
	     	 	strlength=response[i+5].length;
	   	    	ch_status=response[i+5].slice(7,strlength);
	     	 	strlength=response[i+6].length;
	   	    	ch_bitrate=response[i+6].slice(8,strlength);
	   	    	
	  
	 		i=i+7;
			HTML_str=HTML_str+
			   '<tr>'+
			      '<td width="5%" align="center"><font face="Arial" size="2">'+ch_no+'</font></td>'+
			      '<td width="20%" align="center"><font face="Arial" size="2">'+unescape(ch_name)+'</font></td>'+
			      '<td width="15%" align="center"><font face="Arial" size="2">'+ch_watched_no+'</font></td>'+
			      '<td width="15%" align="center"><font face="Arial" size="2">'+ch_active_player_no+'</font></td>'+
			      '<td width="15%" align="center"><font face="Arial" size="2">'+ch_uptime+'</font></td>'+
			      '<td width="20%" align="center"><font face="Arial" size="2">'+ch_status+'</font></td>'+
			      '<td width="10%" align="center"><font face="Arial" size="2">'+ch_bitrate+'</font></td></tr>';
			total_ch_no++;
	     }
	      //    content.innerHTML=HTML_str;
	      // alert(menu_main.innerHTML);
	      	      
	menustr1='<table width=100%><tr>';
	menustr1+='<td width=92%>'+
	'<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Channel" disabled onclick="javascript:callServer_Get_Channel_Statistics();" />'+
	'&nbsp<Input type="button" value="Movie" onclick="javascript:callServer_Get_Movie_Statistics();" />'+
	'&nbsp<Input type="button" value="Auto Refresh" onclick="javascript:calllist_Auto_Get_Channel_Statistics();" />'+
	'</td>'+
	'<td width=8%>'+
	'<p style="margin-right: 5; margin-top: 10"><font size="2" face="Arial">Total: '+ total_ch_no+'</td>';
 	menustr1+='</tr>'+
	      '</table>';
	      	
	  	content.innerHTML=menustr1+HTML_str+'</table>';
	 	
	 	 if (bGet_Channel_Statistics==1)
	   	{
			if (g_Get_Channel_Statistics_timer==0)
			{
				g_Get_Channel_Statistics_timer=setInterval(function(){callServer_Get_Channel_Statistics_Timer()},10*1000);
				//alert(g_Get_Channel_Statistics_timer);
			}
		}
 	}
 }

 
}
function callServer_Get_Channel_Statistics_Timer() {
	var content = parent.document.getElementById("content");
	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	   	
   	
   	
   	if (bGet_Channel_Statistics==0)
	{
		clearInterval(g_Get_Channel_Statistics_timer);
		g_Get_Channel_Statistics_timer=0;
		// alert("Clear Status Timer");
	}else
	{
		bSystem_Inquery_Panel=0; 
		bQuery_Channel_Status=0;
		bQuery_Online_Player=0;
	   	g_token=find_cookie_value("token");
		if (g_token!=0)
		{
			cgi_url = "/server/get_channel_statistics?token="+escape(g_token)+"&flag="+Math.random();
			content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Channel Statistics Loading...<p>';
			
			
			xmlHttp.open("GET", cgi_url, true);
			xmlHttp.onreadystatechange = Get_Channel_Statistics;
			xmlHttp.send(null);
		}
	}
	

}
function callServer_Get_Channel_Statistics() {
	var content = parent.document.getElementById("content");
	var cgi_url;
	   	
	bSystem_Inquery_Panel=0; 
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
   	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		cgi_url = "/server/get_channel_statistics?token="+escape(g_token)+"&flag="+Math.random();
		content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Channel Statistics Loading...<p>';
		
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Get_Channel_Statistics;
		xmlHttp.send(null);
	}

}
function calllist_Auto_Get_Channel_Statistics(){
	
	bGet_Channel_Statistics=1;
	callServer_Get_Channel_Statistics();
}
function Query_One_Channel_Status()
{
	var ch_src_status;
	var ch_status;
	var ch_bitrate;
	var ch_src_bitrate;
	var item_name;
	var old_ch_status;
	var i;
	var strlength;
	
	if (xmlHttp.readyState == 4) {
		var response = xmlHttp.responseText.split("\r\n");
		    	strlength=response[0].length;
		    	ch_status=response[0].slice(7,strlength);
		    	//alert(ch_status);
		
			ch_src_status="chstatus"+(g_ch_no); 
			item_name=document.getElementById(ch_src_status);
			//alert(item_name.innerHTML);
			if (ch_status.search("OFF")>=0)
			{
				item_name.innerHTML="<a href='javascript:void(0)'"+' onclick=callServer_Get_Channel_Dump_Info('+g_ch_no+')>'+
		      		'<font face="Arial" size="2" color="#FF0000">'+'<b>OFF</b>'+'</font></a>';
//		      		item_name.innerHTML='<font face="Arial" size="2" color="#FF0000">'+'<b>OFF</b>'+'</font>';
			}else if (ch_status.search("Connecting")>=0)
			{
				item_name.innerHTML="<a href='javascript:void(0)'"+' onclick=callServer_Get_Channel_Dump_Info('+g_ch_no+')>'+
		      		'<font face="Arial" size="2" color="#FF0000">'+'<b>Connecting</b>'+'</font></a>';
			}else
			{
		      		item_name.innerHTML='<font face="Arial" size="2">'+ch_status+'</font>';
		      		
			}
			
			strlength=response[1].length;
		    	ch_bitrate=response[1].slice(8,strlength);
		    	//alert(ch_bitrate);
		
			ch_src_bitrate="chbitrate"+(g_ch_no); 
			item_name=document.getElementById(ch_src_bitrate);
			//alert(item_name.innerHTML);
	      		item_name.innerHTML='<font face="Arial" size="2">'+'<b>'+ch_bitrate+'</b>'+'</font>';	
	}
}

function callServer_Query_One_Channel_Status(ch_no) {
 	var cgi_url;
	
   	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		g_ch_no=ch_no;
		cgi_url = "/server/query_status_one_channel?token="+escape(g_token)+"&ch_no="+escape(ch_no)+"&flag="+Math.random();
		
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Query_One_Channel_Status;
		xmlHttp.send(null);
	}

}
function Get_Channel_Dump()
{
	
	if (xmlHttp.readyState == 4) {
		var response = xmlHttp.responseText.split("\r\n");
		var channel_dump;
		var i=0;
		
		channel_dump="Channel Dump:"+'\n';
		while (1)
		{
			if (response[i]==0) break;
			channel_dump+=response[i]+'\n';
			i++;
		}
		alert(channel_dump);
		
	}
}
function callServer_Get_Channel_Dump_Info(ch_no) {
 	var cgi_url;
	
   	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		g_ch_no=ch_no;
		cgi_url = "/server/get_channel_dump?token="+escape(g_token)+"&ch_no="+escape(ch_no)+"&flag="+Math.random();
		
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Get_Channel_Dump;
		xmlHttp.send(null);
	}

}
function Get_Channel_Status()
{
	var ch_src_status;
	var ch_status;
	var ch_bitrate;
	var ch_src_bitrate;
	var item_name;
	var old_ch_status;
	var i;
	var strlength;
	var nchno;
	var chtype;
	var chtype_id;
	
	if (xmlHttp.readyState == 4) {
		var response = xmlHttp.responseText.split("\r\n");
//		for (i=0,j=0;i<g_total_ch_no;i++,j++)
		for (i=g_channel_position,j=0;j<(g_channel_limit*2);i++,j++)
		{
		    	strlength=response[j].length;
		    	if (response[0].length==0)
		    	{
				clearInterval(g_Query_Channel_Status_timer);
				g_Query_Channel_Status_timer=0;
		    		break;
		    	}
		    	ch_status=response[j].slice(7,strlength);
		    	//alert(ch_status);
		
			ch_src_status="chstatus"+i; 
			item_name=document.getElementById(ch_src_status);
			//alert(item_name.innerHTML);
			if (ch_status.search("OFF")>=0)
			{
				chtype_id="chtype"+i;
				chtype=document.getElementById(chtype_id);
				//alert(chtype);
				//alert(chtype.value);
				nchno=i+1;
				if (chtype.value=="inactive")
				{
			      		item_name.innerHTML='<font face="Arial" size="2" color="#FF0000">'+'<b>OFF</b>'+'</font>';
				}else
				{
					item_name.innerHTML="<a href='javascript:void(0)'"+' onclick=callServer_Get_Channel_Dump_Info('+nchno+')>'+
			      		'<font face="Arial" size="2" color="#FF0000">'+'<b>OFF</b>'+'</font></a>';
		      		}
			}else if (ch_status.search("Connecting")>=0)
			{
				nchno=i+1;
				item_name.innerHTML="<a href='javascript:void(0)'"+' onclick=callServer_Get_Channel_Dump_Info('+nchno+')>'+
		      		'<font face="Arial" size="2" color="#FF0000">'+'<b>Connecting</b>'+'</font></a>';
			}else
			{
		      		item_name.innerHTML='<font face="Arial" size="2">'+ch_status+'</font>';
		      		
			}
			j++;
			strlength=response[j].length;
		    	ch_bitrate=response[j].slice(8,strlength);
		
			ch_src_bitrate="chbitrate"+i; 
			//alert(ch_src_bitrate);
		    	//alert(ch_bitrate);
			item_name=document.getElementById(ch_src_bitrate);
			//alert(item_name.innerHTML);
	      		item_name.innerHTML='<font face="Arial" size="2">'+'<b>'+ch_bitrate+'</b>'+'</font>';

			
				
		}
	}
}
function callServer_Get_Channels_Status_Timer() {
 	var cgi_url;
	
	
	if (bQuery_Channel_Status==0)
	{
		clearInterval(g_Query_Channel_Status_timer);
		g_Query_Channel_Status_timer=0;
		// alert("Clear Status Timer");
	}else
	{
		bSystem_Inquery_Panel=0; 
		bQuery_Online_Player=0;
		bGet_Channel_Statistics=0;
	   	g_token=find_cookie_value("token");
		if (g_token!=0)
		{
			cgi_url = "/server/get_channels_status?token="+escape(g_token)+"&position="+g_channel_position+"&limit="+g_channel_limit+"&flag="+Math.random();

			
			xmlHttp.open("GET", cgi_url, true);
			xmlHttp.onreadystatechange = Get_Channel_Status;
			xmlHttp.send(null);
		}
	}

}

function Query_Channel_Status()
{
	var ch_src_status;
	var ch_status;
	var ch_bitrate;
	var ch_src_bitrate;
	var item_name;
	var old_ch_status;
	var i;
	var strlength;
	
	if (xmlHttp.readyState == 4) {
		var response = xmlHttp.responseText.split("\r\n");
		for (i=0,j=0;i<g_total_ch_no;i++,j++)
		{
		    	strlength=response[j].length;
		    	if (response[0].length==0)
		    	{
				clearInterval(g_Query_Channel_Status_timer);
				g_Query_Channel_Status_timer=0;
		    		break;
		    	}
		    	ch_status=response[j].slice(7,strlength);
		    	//alert(ch_status);
		
			ch_src_status="chstatus"+(i+1); 
			item_name=document.getElementById(ch_src_status);
			//alert(item_name.innerHTML);
			 if (ch_status.search("OFF")>=0)
			{
		      		item_name.innerHTML='<font face="Arial" size="2" color="#FF0000">'+'<b>OFF</b>'+'</font>';
			}else
			{
		      		item_name.innerHTML='<font face="Arial" size="2">'+ch_status+'</font>';
		      		
			}
			j++;
			strlength=response[j].length;
		    	ch_bitrate=response[j].slice(8,strlength);
		    	//alert(ch_bitrate);
		
			ch_src_bitrate="chbitrate"+(i+1); 
			item_name=document.getElementById(ch_src_bitrate);
			//alert(item_name.innerHTML);
	      		item_name.innerHTML='<font face="Arial" size="2">'+'<b>'+ch_bitrate+'</b>'+'</font>';

			
				
		}
	}
}
function callServer_Query_Channel_Status_Timer() {
 	var cgi_url;
	
	
	if (bQuery_Channel_Status==0)
	{
		clearInterval(g_Query_Channel_Status_timer);
		g_Query_Channel_Status_timer=0;
		// alert("Clear Status Timer");
	}else
	{
		bSystem_Inquery_Panel=0; 
		bQuery_Online_Player=0;
		bGet_Channel_Statistics=0;
	   	g_token=find_cookie_value("token");
		if (g_token!=0)
		{
			cgi_url = "/server/query_status_channel_list?token="+escape(g_token)+"&flag="+Math.random();
			
			
			xmlHttp.open("GET", cgi_url, true);
			xmlHttp.onreadystatechange = Query_Channel_Status;
			xmlHttp.send(null);
		}
	}

}

function callServer_Query_Online_Player_Timer() {
 	var cgi_url;
	
	if (bQuery_Online_Player==0)
	{
		clearInterval(g_Query_Online_Player_timer);
		g_Query_Online_Player_timer=0;
		// alert("Clear Status Timer");
	}else
	{
		bSystem_Inquery_Panel=0; 
		bQuery_Channel_Status=0;
	   	g_token=find_cookie_value("token");
		if (g_token!=0)
		{
			cgi_url= "/player/get_player_list?token="+escape(g_token)+"&position="+g_active_connection_position+"&limit="+g_active_connection_limit+"&flag="+Math.random();
			content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Player Information Loading...<p>';
			
			
			xmlHttp.open("GET", cgi_url, true);
			xmlHttp.onreadystatechange = list_active_player_info;
			xmlHttp.send(null);
		}
	}

}
function Cancel_Add_New_EPG()
{
	var content = parent.document.getElementById("content");
	content.innerHTML=g_content;
}
function Add_EPG_Info() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    var item_save;
    var item_add;
    var item_del;
    var ch_no=g_ch_no;
    if (response==1)
    {
    	g_total_program_no++;
	callServer_Get_EPG_Info();
/*
  //  	alert("Sucessfully, Refresh Channels to active all channels");
 	g_item.value=g_temp;
	g_item.style.backgroundColor = "#ffffff";
	//alert(add_id_button.innerHTML);
	// callServer_CH_Inquery();
	item_save=document.getElementById("save_id_button");
	item_del=document.getElementById("del_id_button");
	item_add=document.getElementById("add_id_button");
	
	item_save.innerHTML='<td align="center">'+
		      "<a href='javascript:void(0)'"+
			' onclick=callServer_Update_EPG_Info("'+g_program_no+'")>'+
	      	      ' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
	item_del.innerHTML='<td width="50" align="center">'+
		      "<a href='javascript:void(0)'"+
			' onclick=call_Del_EPG_Info("'+g_program_no+'")>'+
	      	      ' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
	item_add.innerHTML='<td align="center">'+
		      "<a href='javascript:void(0)'"+
			' onclick=call_Add_New_EPG_Info("'+g_program_no+'")>'+
	      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
*/	      	      
  } else
    {
   	alert("Failed to Add EPG");
 	//	callServer_Get_EPG_Info();
   }
	      	      
	/*if (g_Channel_Edit_Mode==0) 
	{
	}*/
	
    }
}
function call_Add_EPG()
{

	var ch_no= document.getElementById("cur_ch_no").value;
	var starttime_id="starttime";
	var starttime;
	var stoptime_id="stoptime";
	var stoptime;
	var program_title_id="program_title";
	var program_title;
	var program_descrption_id="program_descrption";
	var program_descrption;
	var program_icon_id="program_icon";
	var program_icon;
	var program_rec_id="program_rec";
	var program_rec;
	var program_no_id="program_no";
	var program_no;

	var confirm_msg;
 	var cgi_url;

	g_item=document.getElementById(program_no_id);
	program_no = g_item.value;

	g_item=document.getElementById(starttime_id);
	starttime = g_item.value;
	if (starttime.length==0)
	{
		alert("Start Time is empty");
		return;
	}else if (starttime.length!=19)
	{
		alert("Start Time length is not 19 (YYYY/MM/DD hh:mm:ss)")
		return;
	}
	
		
	g_item=document.getElementById(stoptime_id);
	stoptime = g_item.value;
	if (stoptime.length==0)
	{
		alert("Stop Time is empty");
		return;
	}else if (stoptime.length!=19)
	{
		alert("Stop Time length is not 19 (YYYY/MM/DD hh:mm:ss)")
		return;
	}
	
	g_item=document.getElementById(program_descrption_id);
	program_descrption = g_item.value;

	g_item=document.getElementById(program_icon_id);
	program_icon = g_item.value;
	
	g_item=document.getElementById(program_rec_id);
	program_rec = g_item.value;

	g_item=document.getElementById(program_title_id);
	program_title = g_item.value;
	if (program_title.length==0)
	{
		alert("Program Title is empty");
		return;
	}


	bSystem_Inquery_Panel=0; 
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;
   	g_token=find_cookie_value("token");

	g_ch_no=ch_no;
	g_program_title=program_title;
	g_program_no=program_no;
	cgi_url = "/server/add_epg_info?token="+escape(g_token)+"&ch_no="+escape(ch_no)+"&program_no=" + escape(program_no)+"&starttime=" + escape(starttime)+ "&stoptime=" + escape(stoptime)+ "&program_title=" + escape(program_title)+ "&program_descrption=" + escape(program_descrption)+ "&program_icon=" + escape(program_icon)+ "&program_rec=" + escape(program_rec)+"&flag="+Math.random();
 
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Add_EPG_Info;
	 xmlHttp.send(null);
	// g_temp=g_item.value;
	 //g_item.value=g_item.value+" (adding...)";
	 //g_item.style.backgroundColor = "#ff0000";
 


}
function call_Add_New_EPG_Info(program_no)
{
	var content = parent.document.getElementById("content");
	g_content=content.innerHTML;
	var program_active_no=g_total_program_no;
	var i, m;
	var starttime_id;
	var starttime;
	var stoptime_id;
	var stoptime;
	var program_title_id;
	var program_title;
	var program_descrption_id;
	var program_descrption;
	var program_icon_id;
	var program_icon;
	var program_rec_id;
	var program_rec;
	var HTML_Menu_Bar_Str="";
	var cur_month;
	var cur_temp_year;
	var cur_year;

	
	program_active_no++;
	cur_year=g_cur_year;
	cur_month=g_cur_month;
	//alert(program_active_no);
 
	HTML_Menu_Bar_Str='<td width="10%" align="right"><font face="Arial" size="2">Channel No.:</font></td>';
	HTML_Menu_Bar_Str+='<td width="5%" align="center">'+
	' <font face="Arial"> <font size="2">'+
	' <select size="1" name="cur_ch_no" id=cur_ch_no>';
	HTML_Menu_Bar_Str+='<option selected="selected" value="'+g_ch_no+'">'+g_ch_no+'</option>';
	for (i=1;i<=g_total_ch_no;i++)
	{
		if (i!=g_ch_no)
		{
			HTML_Menu_Bar_Str+='<option value="'+i+'">'+i+'</option>';
		}
	}
	HTML_Menu_Bar_Str+='</select></font></td>';

	HTML_Menu_Bar_Str+='<td width="5%" align="center">'+
	' <font face="Arial"> <font size="2">'+
	' <select size="1" name="cur_year" id=cur_year>';
	HTML_Menu_Bar_Str+='<option selected="selected" value="'+g_cur_year+'">'+g_cur_year+'</option>';
	cur_temp_year=g_cur_year-1;
	for (i=0;i<5;i++)
	{
		index_year=cur_temp_year+i;
		if (g_cur_year!=index_year)
		{
			HTML_Menu_Bar_Str+='<option value="'+index_year+'">'+index_year+'</option>';
		}
		
	}
	HTML_Menu_Bar_Str+='</select></font></td>';

 	HTML_Menu_Bar_Str+='<td width="5%" align="right">'+
	' <font face="Arial"> <font size="2">'+
	' <select size="1" name="cur_month" id=cur_month>';
	HTML_Menu_Bar_Str+='<option selected="selected" value="'+cur_month+'">'+cur_month+'</option>';
	for (i=1;i<13;i++)
	{
		if (i!=cur_month)
		{
			if (i<10)
			{
				HTML_Menu_Bar_Str+='<option value="0'+i+'">0'+i+'</option>';
				
			}else
			{
				HTML_Menu_Bar_Str+='<option value="'+i+'">'+i+'</option>';
			}
		}
		
	}
	HTML_Menu_Bar_Str+='</select></font></td>';

     HTML_Menu_Bar_Str+='<td width=80% align="left">';
      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callServer_Get_EPG_Info_By_Month()>"+
      '<font size="2" face="Arial">Query</font></a>'+'&nbsp&nbsp&nbsp';
      HTML_Menu_Bar_Str+='</td>';
      HTML_str=  '<table border="0" cellpadding="0" cellspacing="10">'+
	  '<tr>'+
	      '<td width="60" align="center"><font face="Arial" size="2">No.</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Start Time(YYYY/MM/DD hh:mm:ss)</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Stop Time(YYYY/MM/DD hh:mm:ss)</font></td>'+
	      '<td width="260" align="center"><font face="Arial" size="2">Program Title</font></td>'+
	      '<td width="400" align="center"><font face="Arial" size="2">Program Description</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Record Icon Path</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Record</font></td>'+
 	 '</tr>'+'<tr><td  colspan="8"><hr size="1" color="#66FFFF"></td></tr>';
 	 for (i=1,m=1;i<=program_active_no;i++,m++)
	{
		starttime_id="starttime"+m; 
		//alert(starttime_id);
		item_name=document.getElementById(starttime_id);
		// alert(item_name.value);
		starttime = item_name.value;
		
		stoptime_id="stoptime"+m; 
		item_name=document.getElementById(stoptime_id);
		// alert(item_name.value);
		stoptime = item_name.value;
		
		program_title_id="program_title"+m; 
		item_name=document.getElementById(program_title_id);
		// alert(item_name.value);
		program_title = item_name.value;
		
		program_descrption_id="program_descrption"+m; 
		item_name=document.getElementById(program_descrption_id);
		// alert(item_name.value);
		program_descrption = item_name.value;

		program_icon_id="program_icon"+m; 
		item_name=document.getElementById(program_icon_id);
		// alert(item_name.value);
		program_icon = item_name.value;

		program_rec_id="program_rec"+m; 
		item_name=document.getElementById(program_rec_id);
		// alert(item_name.value);
		program_rec = item_name.value;
		HTML_str=HTML_str+
		   '<tr>'+
		      '<td width="60" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="starttime"'+
	 		' id=starttime'+i+
	 		' size="19" value="'+
	 		starttime+'"/></font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="stoptime"'+
	 		' id=stoptime'+i+
	 		' size="19" value="'+
	 		stoptime+'"/></font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="program_title"'+
	 		' id=program_title'+i+
	 		' size="20" value="'+
	 		program_title+'"/></font></td>'+
		      '<td width="40" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="program_descrption"'+
	 		' id=program_descrption'+i+
	 		' size="40" value="'+
	 		program_descrption+'"/></font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="program_icon"'+
	 		' id=program_icon'+i+
	 		' size="20" value="'+
	 		program_icon+'"/></font></td>';
	 		
	 		HTML_str=HTML_str+
	 		'<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <select size="1" name="program_rec" '+'id=program_rec'+i+'>';
	 		if (program_rec=="ON")
	 		{
		      
		      		// alert(program_rec);
		 		HTML_str=HTML_str+'<option selected="selected" value="'+"ON"+'">'+"ON"+'</option>'+
		 		'<option value="'+"OFF"+'">'+"OFF"+'</option>'+'</select></font></td>';
	 		}else
 			{
		      		// alert(program_rec);
		 		HTML_str=HTML_str+'<option selected="selected" value="'+"OFF"+'">'+"OFF"+'</option>'+
		 		'<option value="'+"ON"+'">'+"ON"+'</option>'+'</select></font></td>';
 			}
	 		
	 		if (m==program_no)
			{
				save_keyword="Save";
				add_keyword="Add";
				del_keyword="Del";
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=callServer_Update_EPG_Info("'+i+'")>'+
				' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Del_EPG_Info("'+i+'")>'+
				' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Add_New_EPG_Info("'+i+'")>'+
				' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
				
				i++;
				starttime=cur_year+'/'+cur_month+'/'+'01 00:00:00';
				stoptime=cur_year+'/'+cur_month+'/'+'01 00:00:00';

			//	starttime="";
			//	stoptime="";
				program_title="";
				program_descrption="";
				program_icon="";
				
				HTML_str=HTML_str+
			   	'<tr>'+
			      '<td width="60" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
			      '<td width="20" align="center">'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="starttime"'+
		 		' id=starttime'+i+
		 		' size="19" value="'+
		 		starttime+'"/></font></td>'+
			      '<td width="20" align="center">'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="stoptime"'+
		 		' id=stoptime'+i+
		 		' size="19" value="'+
		 		stoptime+'"/></font></td>'+
			      '<td width="20" align="center">'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="program_title"'+
		 		' id=program_title'+i+
		 		' size="20" value="'+
		 		program_title+'"/></font></td>'+
			      '<td width="40" align="center">'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="program_descrption"'+
		 		' id=program_descrption'+i+
		 		' size="40" value="'+
		 		program_descrption+'"/></font></td>'+
			      '<td width="20" align="center">'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="program_icon"'+
		 		' id=program_icon'+i+
		 		' size="20" value="'+
		 		program_icon+'"/></font></td>'+
		 		'<td width="20" align="center">'+
				' <font face="Arial" size="2">'+
		 		' <select size="1" name="program_rec" '+'id=program_rec'+i+'>'+
				'<option selected="selected" value="ON">ON</option>'+
				 '<option value="OFF">OFF</option>'+
				'</select></font></td>';
			      	HTML_str+='<td id=save_id_button width="80" align="center">'+
				      "<a href='javascript:void(0)'"+
				      ' onclick=call_Add_EPG("'+i+'")>'+
			      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>'+
			      	      
				      '<td id=del_id_button width="80" align="center">'+		      
				      "<a href='javascript:void(0)'"+
				      ' onclick=Cancel_Add_New_EPG()>'+
			      	      ' <img border="0" id="delbutton" alt="Cancel" title="Cancel" src="del_icon.PNG"></a></td>'+
	
				      '<td id=add_id_button width="80" align="center">'+		      
				      ' <font face="Arial" size="2"></font></a></td>';
			}else
			{
				save_keyword="Save";
				add_keyword="Add";
				del_keyword="Del";
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=callServer_Update_EPG_Info("'+i+'")>'+
				' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Del_EPG_Info("'+i+'")>'+
				' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Add_New_EPG_Info("'+i+'")>'+
				' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
			}
							
			HTML_str+='</tr>';
		
	}
	
	content.innerHTML='<table width=99%><tr><td width=20%>'+
  	'<font size="2" face="Arial">Total: '+ program_active_no+'</td>'+HTML_Menu_Bar_Str+
 	'</tr></table>'+HTML_str+'</table>';
	//g_total_program_no=program_active_no;
}

function Get_EPG_Info()
{
 
 if (xmlHttp.readyState == 4) {


	var response = xmlHttp.responseText.split("\r\n");
	var ch_no;
	var program_no=0;
	var starttime;
	var stoptime;
	var program_title;
	var program_descrption;
	var program_icon;
	var program_rec;
	var i=0;
	var j=0;
	var HTML_str='';
	var strlength=0;
	var content = parent.document.getElementById("content");
	var save_keyword=null;
	var add_keyword=null;
	var del_keyword=null;
	//var cur_year;
	var cur_month;
	var HTML_Menu_Bar_Str="";
	var index_year;
	var d=new Date();
	var cur_year=d.getFullYear();
	var cur_temp_year;

	//cur_year=g_cur_year;
	cur_month=g_cur_month;
	content.innerHTML="";
	

	 HTML_str= '<table border="0" cellpadding="0" cellspacing="10">'+
	  '<tr>'+
	      '<td width="60" align="left"><p style="margin-left: 5"><font face="Arial" size="2">No.</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Start Time<br>YYYY/MM/DD<br>hh:mm:ss</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Stop Time<br>YYYY/MM/DD<br>hh:mm:ss</font></td>'+
	      '<td width="10" align="center"></td>'+
	      '<td width="260" align="center"><font face="Arial" size="2">Program Title</font></td>'+
	      '<td width="400" align="center"><font face="Arial" size="2">Program Description</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Record Icon Path</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Record</font></td>'+
 	 '</tr>'+'<tr><td  colspan="9"><hr size="1" color="#66FFFF"></td></tr>';
 	
	while (1)
	{
 	 	if (response[i]==0) break;
		//alert(response[i]);
	 	strlength=response[i].length;
	 	//alert(strlength);
   	    	starttime=response[i].slice(10,strlength);
     	 	strlength=response[i+1].length;
   	    	stoptime=response[i+1].slice(9,strlength);
     	 	strlength=response[i+2].length;
   	    	program_title=response[i+2].slice(6,strlength);
     	 	strlength=response[i+3].length;
 	    	program_descrption=response[i+3].slice(12,strlength);
     	 	strlength=response[i+4].length;
 	    	program_icon=response[i+4].slice(5,strlength);
     	 	strlength=response[i+5].length;
 	    	program_rec=response[i+5].slice(4,strlength);
 	    	i=i+6;
		program_no++;
		HTML_str=HTML_str+
		   '<tr>'+
		      '<td width="60" align="left"><p style="margin-left: 5"><font face="Arial" size="2">'+program_no+'</font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="starttime"'+
	 		' id=starttime'+program_no+
	 		' size="15" value="'+
	 		starttime+'"/></font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="stoptime"'+
	 		' id=stoptime'+program_no+
	 		' size="15" value="'+
	 		stoptime+'"/></font></td>'+
			'<td  style="cursor: pointer;" width="10">'+
			'<div class="dropdown">'+
				'<button class="dropbtn">'+
  				'<div class="bar1"></div>'+
  				'<div class="bar2"></div>'+
  				'<div class="bar3"></div>'+
				'</button>'+
  				'<div class="dropdown-content">'+
     					"<a href='javascript:void(0)'"+
					' onclick=callServer_Update_EPG_Info("'+program_no+'")>'+'<table><tr><td width=10%><img src="save.png"></td><td><font face="Arial" size="3"><b>Save</b></font></td></tr></table></a>'+
					"<a href='javascript:void(0)'"+
					' onclick=call_Del_EPG_Info("'+program_no+'")>'+'<table><tr><td width=10%><img src="del.png"></td><td><font face="Arial" size="3"><b>Delete</b></font></td></tr></table></a>'+
    					'</div>'+
			'</div>'+
	 		'</td>'+	 		
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="program_title"'+
	 		' id=program_title'+program_no+
	 		' size="20" value="'+
	 		unescape(program_title)+'"/></font></td>'+
		      '<td width="40" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="program_descrption"'+
	 		' id=program_descrption'+program_no+
	 		' size="40" value="'+
	 		unescape(program_descrption)+'"/></font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="program_icon"'+
	 		' id=program_icon'+program_no+
	 		' size="20" value="'+
	 		program_icon+'"/></font></td>';
	 		
	 		HTML_str=HTML_str+
	 		'<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <select size="1" name="program_rec" '+'id=program_rec'+program_no+'>';
	 		if (program_rec==1)
	 		{
		      
		 		HTML_str=HTML_str+'<option selected="selected" value="'+"ON"+'">'+"ON"+'</option>'+
		 		'<option value="'+"OFF"+'">'+"OFF"+'</option>'+'</select></font></td>';
	 		}else
 			{
		 		HTML_str=HTML_str+'<option selected="selected" value="'+"OFF"+'">'+"OFF"+'</option>'+
		 		'<option value="'+"ON"+'">'+"ON"+'</option>'+'</select></font></td>';
 			}
	 			
	 	
			HTML_str+='</tr>';
			
				
		    
     }

	HTML_Menu_Bar_Str+='<td width="10%" align="right"><font face="Arial" size="2">Channel No.:</font></td>';
	HTML_Menu_Bar_Str+='<td width="5%" align="center">'+
	' <font face="Arial"> <font size="2">'+
	' <select size="1" name="cur_ch_no" id=cur_ch_no>';
	HTML_Menu_Bar_Str+='<option selected="selected" value="'+g_ch_no+'">'+g_ch_no+'</option>';
//	alert(g_total_ch_no);
	for (i=1;i<=g_total_ch_no;i++)
	{
		if (i!=g_ch_no)
		{
			HTML_Menu_Bar_Str+='<option value="'+i+'">'+i+'</option>';
		}
	}
	HTML_Menu_Bar_Str+='</select></font></td>';

	HTML_Menu_Bar_Str+='<td width="5%" align="center">'+
	' <font face="Arial"> <font size="2">'+
	' <select size="1" name="cur_year" id=cur_year>';
	HTML_Menu_Bar_Str+='<option selected="selected" value="'+g_cur_year+'">'+g_cur_year+'</option>';
	cur_temp_year=g_cur_year-1;
	for (i=0;i<5;i++)
	{
		index_year=cur_temp_year+i;
		if (g_cur_year!=index_year)
		{
			HTML_Menu_Bar_Str+='<option value="'+index_year+'">'+index_year+'</option>';
		}
		
	}
	HTML_Menu_Bar_Str+='</select></font></td>';

 	HTML_Menu_Bar_Str+='<td width="5%" align="right">'+
	' <font face="Arial"> <font size="2">'+
	' <select size="1" name="cur_month" id=cur_month>';
	HTML_Menu_Bar_Str+='<option selected="selected" value="'+cur_month+'">'+cur_month+'</option>';
	for (i=1;i<13;i++)
	{
		if (i!=cur_month)
		{
			if (i<10)
			{
				HTML_Menu_Bar_Str+='<option value="0'+i+'">0'+i+'</option>';
				
			}else
			{
				HTML_Menu_Bar_Str+='<option value="'+i+'">'+i+'</option>';
			}
		}
		
	}
	HTML_Menu_Bar_Str+='</select></font></td>';

     HTML_Menu_Bar_Str+='<td width=38% align="left">';
          HTML_Menu_Bar_Str+='<Input type="button" value="Query" onclick="javascript:callServer_Get_EPG_Info_By_Month();" />';

     HTML_Menu_Bar_Str+='</td>';
     menustr1='<td width="4%">';
	menustr1+='<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Add" onclick="javascript:open_modal();" />';
	menustr1+='<div id="PanelModal" class="modal">'+
		'<div class="modal-content">'+
		'<span onclick="javascript:close_modal();" class="close">&times;</span>';
		menustr1+='<table align="center">';
		menustr1+='<tr><td><font face="Arial"><font size="2">Program No. : </font></td><td width="350" height="23">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="program_no"'+
		' id="program_no"'+
		' size="3" value="'+
		'1'+
		'"/></font></td></tr>';
		
		menustr1+='<tr><td><font face="Arial" font size="2">Start Time : </font></td><td>'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="starttime"'+
		 		' id=starttime'+
		 		' size="15"/'+
		 		'</font></td></tr>';
		menustr1+='<tr><td><font face="Arial" size="2">Stop Time : </font></td><td>'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="stoptime"'+
		 		' id=stoptime'+
		 		' size="15"/'+
		 		'</font></td></tr>';
		menustr1+='<tr><td><font face="Arial" size="2">Program Title : </font></td><td>'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="program_title"'+
		 		' id=program_title'+
		 		' size="20"/'+
		 		'</font></td></tr>';
		 		
		menustr1+='<tr><td><font face="Arial" size="2">Program Description : </font></td><td>'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="program_descrption"'+
		 		' id=program_descrption'+
		 		' size="40"/'+
		 		'</font></td></tr>';

		menustr1+='<tr><td><font face="Arial" size="2">Record Icon Path : </font></td><td>'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="program_icon"'+
		 		' id=program_icon'+
		 		' size="20"/'+
		 		'</font></td></tr>';

		menustr1+='<tr><td><font face="Arial" size="2">Record : </font></td><td>'+
		 		' <font face="Arial" size="2">'+
				' <select size="1" name="program_rec" id=program_rec>';
		 		
				menustr1+='<option selected="selected" value="ON">'+"ON"+'</option>'+
				'<option value="OFF">'+"OFF"+'</option>';
		menustr1+='</select></font></td></tr>';
		menustr1+='<tr><td><input type="button" value="Add" onclick=call_Add_EPG() name="Save" /></td></tr></table>'+
		'</div>'+
	'</div></td>';
	
  	content.innerHTML='<table width=100%><tr>'+
  	menustr1+
  	'<td valign="top"><p style="margin-top: 10"><Input type="button" value="Refresh" onclick="javascript:callServer_Refresh_EPG_Info();" />'+
	'</td>'+
  	HTML_Menu_Bar_Str+
  	'<td width=7%>'+
  	'<p style="margin-right: 5; margin-top: 10"><font size="2" face="Arial">Total: '+ program_no+
  	'</td>'+
 	'</tr></table>'+HTML_str+'</table>';
	g_total_program_no=program_no;
 
 }
}
function callServer_Get_EPG_Info() {
	var content = parent.document.getElementById("content");
	
	var cgi_url;
	var ch_no=1;
	var from_month;
	var to_month;
	var d=new Date();
	var cur_year=d.getFullYear();
	var cur_month=d.getMonth()+1;
	
	bSystem_Inquery_Panel=0; 
 	bQuery_Channel_Status=0;	
 	bQuery_Online_Player=0;
 	bGet_Channel_Statistics=0;
 
  	g_token=find_cookie_value("token");
   	g_ch_no=ch_no;
	if (g_token!=0)
	{
		g_ch_no=ch_no;
		from_month=cur_month;
		to_month=cur_month;
		g_cur_year=cur_year;
		//g_cur_month=cur_month;
		if (cur_month<10)
		{
			g_cur_month='0'+cur_month;
		}else
		{
			g_cur_month=cur_month;		
		}
		cgi_url = "/server/get_epg_info?token="+escape(g_token)+"&ch_no="+escape(ch_no)+ "&from_year=" + escape(cur_year)+ "&from_month=" + escape(from_month)+ "&to_month=" + escape(to_month)+"&flag="+Math.random();
		
		content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">EPG Information Loading...<p>';
		
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Get_EPG_Info;
		xmlHttp.send(null);
	}

}
function Refresh_EPG(){
 
  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
     if (response==1)
    {
 	callServer_Get_EPG_Info();
    }else
    {
   	alert("Failed to Refresh EPG");
    }
 }
 
}
function callServer_Refresh_EPG_Info()
{
	var cgi_url;
	var confirm_msg;

	
      	g_token=find_cookie_value("token");

	cgi_url = "/server/refresh_epg_info?token="+escape(g_token)+"&flag="+Math.random();

	confirm_msg="Refresh EPG Information?";
	if (confirm(confirm_msg))
	{
		bQuery_Channel_Status=0;
	 	 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = Refresh_EPG;
		 xmlHttp.send(null);
	}
	

 	
}  
function callServer_Get_EPG_Info_By_Month() {
	var content = parent.document.getElementById("content");
	var ch_no= document.getElementById("cur_ch_no").value;
	var cur_year= document.getElementById("cur_year").value;
	var from_month= document.getElementById("cur_month").value;
	var to_month= document.getElementById("cur_month").value;
	var cgi_url;
	
	bSystem_Inquery_Panel=0; 
 	bQuery_Channel_Status=0;
 	bQuery_Online_Player=0;
 	bGet_Channel_Statistics=0;
  	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		g_cur_year=parseInt(cur_year);
		g_cur_month=from_month;
		g_ch_no=ch_no;
		cgi_url = "/server/get_epg_info?token="+escape(g_token)+"&ch_no="+escape(ch_no)+ "&from_year=" + escape(cur_year)+ "&from_month=" + escape(from_month)+ "&to_month=" + escape(to_month)+"&flag="+Math.random();
		
		content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">EPG Information Loading...<p>';
		
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Get_EPG_Info;
		xmlHttp.send(null);
	}

}

function Update_EPG_Info() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    	//callServer_Get_EPG_Current_Info();
     } else
    {
   	alert("Failed to Update EPG.");
    }
	g_item.value=g_temp;
	g_item.style.backgroundColor = "#ffffff";
    }
}

function callServer_Update_EPG_Info(program_no) {
	
	var ch_no= document.getElementById("cur_ch_no").value;
	//var content = parent.document.getElementById("content");
	var starttime_id="starttime"+program_no;
	var starttime;
	var stoptime_id="stoptime"+program_no;
	var stoptime;
	var program_title_id="program_title"+program_no;
	var program_title;
	var program_descrption_id="program_descrption"+program_no;
	var program_descrption;
	var program_icon_id="program_icon"+program_no;
	var program_icon;
	var program_rec_id="program_rec"+program_no;
	var program_rec;

	var confirm_msg;
 	var cgi_url;

	g_item=document.getElementById(starttime_id);
	starttime = g_item.value;
	if (starttime.length==0)
	{
		alert("Start Time is empty");
		return;
	}else if (starttime.length!=19)
	{
		alert("Start Time length is not 19 (YYYY/MM/DD hh:mm:ss)")
		return;
	}
	g_item=document.getElementById(stoptime_id);
	stoptime = g_item.value;
	if (stoptime.length==0)
	{
		alert("Stop Time is empty");
		return;
	}else if (stoptime.length!=19)
	{
		alert("Stop Time length is not 19 (YYYY/MM/DD hh:mm:ss)")
		return;
	}
	g_item=document.getElementById(program_descrption_id);
	program_descrption = g_item.value;

	g_item=document.getElementById(program_icon_id);
	program_icon = g_item.value;

	g_item=document.getElementById(program_rec_id);
	program_rec = g_item.value;
		
	g_item=document.getElementById(program_title_id);
	program_title = g_item.value;
	if (program_title.length==0)
	{
		alert("Program Title is empty");
		return;
	}
	
	bSystem_Inquery_Panel=0; 
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;
   	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		cgi_url = "/server/update_epg_info?token="+escape(g_token)+"&ch_no="+escape(ch_no)+"&program_no=" + escape(program_no)+"&starttime=" + escape(starttime)+ "&stoptime=" + escape(stoptime)
 + "&program_title=" + escape(program_title)+ "&program_descrption=" + escape(program_descrption)+ "&program_icon=" + escape(program_icon)+ "&program_rec=" + escape(program_rec)+"&flag="+Math.random();
		
		//content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">EPG Information Loading...<p>';
		
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Update_EPG_Info;
		xmlHttp.send(null);
		 g_temp=g_item.value;
		 g_item.value=g_item.value+" (updating...)";
		 g_item.style.backgroundColor = "#ff0000";
	}

}
function After_Del_EPG(del_program_no){
	
	var content = parent.document.getElementById("content");
	g_content=content.innerHTML;
	var program_active_no=g_total_program_no;
	var i, m;
	var starttime_id;
	var starttime;
	var stoptime_id;
	var stoptime;
	var program_title_id;
	var program_title;
	var program_descrption_id;
	var program_descrption;
	var program_icon_id;
	var program_icon;
	var program_rec_id;
	var program_rec;
	var HTML_Menu_Bar_Str="";
	var cur_month;
	var cur_temp_year;
	var program_no=0;


	program_active_no--;
	
	cur_month=g_cur_month;
	
 
	HTML_Menu_Bar_Str='<td width="10%" align="right"><font face="Arial" size="2">Channel No.:</font></td>';
	HTML_Menu_Bar_Str+='<td width="5%" align="center">'+
	' <font face="Arial"> <font size="2">'+
	' <select size="1" name="cur_ch_no" id=cur_ch_no>';
	HTML_Menu_Bar_Str+='<option selected="selected" value="'+g_ch_no+'">'+g_ch_no+'</option>';
	for (i=1;i<=g_total_ch_no;i++)
	{
		if (i!=g_ch_no)
		{
			HTML_Menu_Bar_Str+='<option value="'+i+'">'+i+'</option>';
		}
	}
	HTML_Menu_Bar_Str+='</select></font></td>';

	HTML_Menu_Bar_Str+='<td width="5%" align="center">'+
	' <font face="Arial"> <font size="2">'+
	' <select size="1" name="cur_year" id=cur_year>';
	HTML_Menu_Bar_Str+='<option selected="selected" value="'+g_cur_year+'">'+g_cur_year+'</option>';
	cur_temp_year=g_cur_year-1;
	for (i=0;i<5;i++)
	{
		index_year=cur_temp_year+i;
		if (g_cur_year!=index_year)
		{
			HTML_Menu_Bar_Str+='<option value="'+index_year+'">'+index_year+'</option>';
		}
		
	}
	HTML_Menu_Bar_Str+='</select></font></td>';

 	HTML_Menu_Bar_Str+='<td width="5%" align="right">'+
	' <font face="Arial"> <font size="2">'+
	' <select size="1" name="cur_month" id=cur_month>';
	HTML_Menu_Bar_Str+='<option selected="selected" value="'+cur_month+'">'+cur_month+'</option>';
	
	for (i=1;i<13;i++)
	{
		if (i!=cur_month)
		{
			if (i<10)
			{
				HTML_Menu_Bar_Str+='<option value="0'+i+'">0'+i+'</option>';
				
			}else
			{
				HTML_Menu_Bar_Str+='<option value="'+i+'">'+i+'</option>';
			}
		}
		
	}
	HTML_Menu_Bar_Str+='</select></font></td>';

     HTML_Menu_Bar_Str+='<td width=38% align="left">';
     HTML_Menu_Bar_Str+='<Input type="button" value="Query" onclick="javascript:callServer_Get_EPG_Info_By_Month();" />';
     HTML_Menu_Bar_Str+='</td>';
      HTML_str=  '<table border="0" cellpadding="0" cellspacing="10">'+
	  '<tr>'+
	      '<td width="60" align="left"><p style="margin-left: 5"><font face="Arial" size="2">No.</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Start Time<br>YYYY/MM/DD<br>hh:mm:ss</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Stop Time<br>YYYY/MM/DD<br>hh:mm:ss</font></td>'+
	      '<td width="10" align="center"></td>'+
	      '<td width="260" align="center"><font face="Arial" size="2">Program Title</font></td>'+
	      '<td width="400" align="center"><font face="Arial" size="2">Program Description</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Record Icon Path</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Record</font></td>'+
 	 '</tr>'+'<tr><td  colspan="9"><hr size="1" color="#66FFFF"></td></tr>';
	 for (i=1,m=1;i<=program_active_no;i++,m++)
	{
		if (m==del_program_no)
		{
			m++;
		}
		starttime_id="starttime"+m; 
		//alert(starttime_id);
		item_name=document.getElementById(starttime_id);
		// alert(item_name.value);
		starttime = item_name.value;
		
		stoptime_id="stoptime"+m; 
		item_name=document.getElementById(stoptime_id);
		// alert(item_name.value);
		stoptime = item_name.value;
		
		program_title_id="program_title"+m; 
		item_name=document.getElementById(program_title_id);
		// alert(item_name.value);
		program_title = item_name.value;
		
		program_descrption_id="program_descrption"+m; 
		item_name=document.getElementById(program_descrption_id);
		// alert(item_name.value);
		program_descrption = item_name.value;

		program_icon_id="program_icon"+m; 
		item_name=document.getElementById(program_icon_id);
		// alert(item_name.value);
		program_icon = item_name.value;

		program_rec_id="program_rec"+m; 
		item_name=document.getElementById(program_rec_id);
		// alert(item_name.value);
		program_rec = item_name.value;
		program_no++;
		HTML_str=HTML_str+
		   '<tr>'+
		      '<td width="60" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="starttime"'+
	 		' id=starttime'+i+
	 		' size="15" value="'+
	 		starttime+'"/></font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="stoptime"'+
	 		' id=stoptime'+i+
	 		' size="15" value="'+
	 		stoptime+'"/></font></td>'+
	 		'<td  style="cursor: pointer;" width="10">'+
			'<div class="dropdown">'+
				'<button class="dropbtn">'+
  				'<div class="bar1"></div>'+
  				'<div class="bar2"></div>'+
  				'<div class="bar3"></div>'+
				'</button>'+
  				'<div class="dropdown-content">'+
     					"<a href='javascript:void(0)'"+
					' onclick=callServer_Update_EPG_Info("'+program_no+'")>'+'<table><tr><td width=10%><img src="save.png"></td><td><font face="Arial" size="3"><b>Save</b></font></td></tr></table></a>'+
					"<a href='javascript:void(0)'"+
					' onclick=call_Del_EPG_Info("'+program_no+'")>'+'<table><tr><td width=10%><img src="del.png"></td><td><font face="Arial" size="3"><b>Delete</b></font></td></tr></table></a>'+
    					'</div>'+
			'</div>'+
	 		'</td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="program_title"'+
	 		' id=program_title'+i+
	 		' size="20" value="'+
	 		program_title+'"/></font></td>'+
		      '<td width="40" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="program_descrption"'+
	 		' id=program_descrption'+i+
	 		' size="40" value="'+
	 		program_descrption+'"/></font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="program_icon"'+
	 		' id=program_icon'+i+
	 		' size="20" value="'+
	 		program_icon+'"/></font></td>';
	 		
	 		HTML_str=HTML_str+
	 		'<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <select size="1" name="program_rec" '+'id=program_rec'+i+'>';
	 		if (program_rec=="ON")
	 		{
		      
		 		HTML_str=HTML_str+'<option selected="selected" value="'+"ON"+'">'+"ON"+'</option>'+
		 		'<option value="'+"OFF"+'">'+"OFF"+'</option>'+'</select></font></td>';
	 		}else
 			{
		 		HTML_str=HTML_str+'<option selected="selected" value="'+"OFF"+'">'+"OFF"+'</option>'+
		 		'<option value="'+"ON"+'">'+"ON"+'</option>'+'</select></font></td>';
 			}	 		
			
			HTML_str+='</tr>';
		
	}
	
	content.innerHTML='<table width=100%><tr><td width=30%>'+
  	'<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Add" onclick="javascript:call_add_epg();" />'+
 	'&nbsp<Input type="button" value="Refresh" onclick="javascript:callServer_Refresh_EPG_Info();" />'+
	'</td>'+
  	HTML_Menu_Bar_Str+
  	'<td width=7%>'+
  	'<p style="margin-right: 5; margin-top: 10"><font size="2" face="Arial">Total: '+ program_no+
  	'</td>'+
 	'</tr></table>'+HTML_str+'</table>';
	g_total_program_no=program_active_no;
}

function Del_EPG_Info() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    //	callServer_Get_EPG_Current_Info();
   //   	alert("Del EPG Sucessfully");
   	After_Del_EPG(g_program_no);
    } else
    {
   	alert("Failed to Del EPG.");
    }
 }
}
function call_Del_EPG_Info(program_no) {
	var confirm_msg;
 	var cgi_url;
	var ch_no= document.getElementById("cur_ch_no").value;
	var starttime_id="starttime"+program_no;
	var starttime;
	
	g_item=document.getElementById(starttime_id);
	starttime = g_item.value;
	if (starttime.length==0)
	{
		alert("Start Time is empty");
		return;
	}
	g_program_no=program_no;
		
	bSystem_Inquery_Panel=0; 
 	bQuery_Channel_Status=0;
 	bQuery_Online_Player=0;
 	bGet_Channel_Statistics=0;
  	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		cgi_url = "/server/del_epg_info?token="+escape(g_token)+"&ch_no="+escape(ch_no)+"&program_no=" + escape(program_no)+"&starttime=" + escape(starttime)+"&flag="+Math.random();
				
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Del_EPG_Info;
		xmlHttp.send(null);
	}

}
function Query_A_Movie_More()
{
  var str;
 
 var movie_no;
 var movie_name;
 var movie_description;
   var MovieDetailWindow;
   var rentpoint;
   var buypoint;
   var ratingflag;
   var quality;
   var rentperiod; 	
   var forwardflag;
	var prev_movie_no;
	var next_movie_no;
	var total_movie_no;
	var nObj;


  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText.split("\r\n");
 		i=0;
  		//alert(response[i]);

	 	strlength=response[i].length;
   	    	movie_no=response[i].slice(8,strlength);

		i++;
  		//alert(response[i]);
	 	strlength=response[i].length;
   	    	movie_name=response[i].slice(5,strlength);
   	 	//	alert(movie_name);
   	    	
    str="<head><title>"+unescape(movie_name)+" [No. "+movie_no+"]"+"</title><link rel='stylesheet' type='text/css' href='menu.css'/>"+'<script src="menu.js"></script></head><body><table align="center">';
		
		i++;
  		//alert(response[i]);
	 	strlength=response[i].length;
   	    	movie_description=response[i].slice(12,strlength);
 	 		//alert(movie_description);
  
		i++;
  		//alert(response[i]);
	 	strlength=response[i].length;
   	    	rentpoint=response[i].slice(10,strlength);
   	    	
  	    	i++;
  		//alert(response[i]);
    	 	strlength=response[i].length;
   	    	buypoint=response[i].slice(9,strlength);

   	    	i++;
   		//alert(response[i]);
   	 	strlength=response[i].length;
   	    	ratingflag=response[i].slice(11,strlength);
   	    	
   	    	i++;
  		//alert(response[i]);
    	 	strlength=response[i].length;
   	    	quality=response[i].slice(8,strlength);

   	    	i++;
  		//alert(response[i]);
	 	strlength=response[i].length;
   	    	rentperiod=response[i].slice(11,strlength);
 	    	
  	    	i++;
  		//alert(response[i]);
	 	strlength=response[i].length;
   	    	forwardflag=response[i].slice(8,strlength);

    	    	
   		if (window.self.name=="MovieDetailWindow")
   		{
   			nObj=window.self.document.getElementById("total_movie_no");
   			//alert(nObj);
   			//alert(nObj.innerText);
   			
   			total_movie_no=parseInt(nObj.innerText);
   			//alert(total_movie_no);
   		}else
   		{
   			total_movie_no=g_total_movie_no;
   		}
   		str+='<tr><td><font face="Arial"> <font size="2">Movie No. : </font></td><td width="350" height="23"><table><tr><td><font face="Arial"> <font size="2"><b>'+movie_no+'</b> / </font></td><td id=total_movie_no> <font size="2">'+total_movie_no+'</font></td></tr></table></td></tr>';
		
 //		str+='<tr><td><font face="Arial"> <font size="2">Movie No. : </font></td><td width="350" height="23"><font face="Arial"> <font size="2"><b>'+movie_no+'</b></font></td></tr>';
 		str+='<tr><td><font face="Arial"> <font size="2">Movie Name: </font></td><td width="350" height="23"><font face="Arial"> <font size="2"><b>'+unescape(movie_name)+'</b></font></td></tr>';
 		str+='<tr><td colspan="2"><font face="Arial"> <font size="2">Description : </font></td></tr>';
		str+='<tr><td colspan="2" width="450" height="23">'+
		' <textarea maxlength="500" name="movie_description"'+
 		' id="movie_description'+movie_no+'"'+
 		' cols="50" rows="10">'+
 		movie_description+
 		'</textarea></font></td></tr>';
		str+='<tr><td><font face="Arial"> <font size="2">Rent Point : </font></td><td width="350" height="23">'+
		' <input type="text" name="rentpoint"'+
 		' id="rentpoint'+movie_no+'"'+
 		' size="5" value="'+
 		rentpoint+
 		'"/></font></td></tr>';

		str+='<tr><td><font face="Arial"> <font size="2">Buy Point : </font></td><td width="350" height="23">'+
 		' <input type="text" name="buypoint"'+
 		' id="buypoint'+movie_no+'"'+
 		' size="5" value="'+
 		buypoint+
 		'"/></font></td></tr>';

		str+='<tr><td><font face="Arial"> <font size="2">Rent Period : </font></td><td width="350" height="23">'+
 		' <input type="text" name="rentperiod"'+
 		' id="rentperiod'+movie_no+'"'+
 		' size="3" value="'+
 		rentperiod+
 		'"/></font><font face="Arial"> <font size="2">hours</font></td></tr>';



 		str+='<tr><td><font face="Arial"> <font size="2">Video Quality : </font></td><td width="350" height="23">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" name="quality" id="quality'+movie_no+'">';
		if (quality=='md')
		{
			str+='<option selected="selected" value="md">Mobile</option>';
			str+='<option value="sd">SD</option>';
			str+='<option value="hd">HD</option>';
		}
		else if (quality=='sd')
		{
			str+='<option selected="selected" value="sd">SD</option>';
			str+='<option value="md">Mobile</option>';
			str+='<option value="hd">HD</option>';
		}
		else
		{
			str+='<option selected="selected" value="hd">HD</option>';
			str+='<option value="md">Mobile</option>';
			str+='<option value="sd">SD</option>';
		}	 			
 		str+='</select></font></td></tr>';

 		str+='<tr><td><font face="Arial"> <font size="2">Ratings : </font></td><td width="350" height="23">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" name="ratingflag" id="ratingflag'+movie_no+'">';
		if (ratingflag==0)
		{
			str+='<option selected="selected" value="0">No Protection</option>';
			str+='<option value="1">Protection</option>';
		}
		else
		{
			str+='<option selected="selected" value="1">Protection</option>';
			str+='<option value="0">No Protection</option>';
		}	 			
 		str+='</select></font></td></tr>';
 		
		str+='<tr><td><font face="Arial"> <font size="2">Proxy Mode : </font></td><td width="350" height="23">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" name="forwardflag" id="forwardflag'+movie_no+'">';
		if (forwardflag==0)
		{
			str+='<option selected="selected" value="0">0</option>';
			str+='<option value="1">1</option>';
			
		}else if (forwardflag==1)
		{
			str+='<option selected="selected" value="1">1</option>';
			str+='<option value="0">0</option>';
			
		}
		/*
		if (forwardflag==0)
		{
			str+='<option selected="selected" value="0">0</option>';
			str+='<option value="1">1</option>';
			str+='<option value="2">2</option>';
			str+='<option value="3">3</option>';
		}else if (forwardflag==1)
		{
			str+='<option selected="selected" value="1">1</option>';
			str+='<option value="0">0</option>';
			str+='<option value="2">2</option>';
			str+='<option value="3">3</option>';
		}else if (forwardflag==2)
		{
			str+='<option selected="selected" value="2">2</option>';
			str+='<option value="0">0</option>';
			str+='<option value="1">1</option>';
			str+='<option value="3">3</option>';
		}else if (forwardflag==3)
		{
			str+='<option selected="selected" value="3">3</option>';
			str+='<option value="0">0</option>';
			str+='<option value="1">1</option>';
			str+='<option value="2">2</option>';
		}
		*/	 			
 		str+='</select></font></td></tr>';
		

		str+='<tr><td><input type="button" value="Save" onclick=callServer_Save_Movie_More("'+movie_no+'") name="B2" /></td>';
		if (parseInt(movie_no)>1)
		{
		    prev_movie_no=parseInt(movie_no)-1;
		    str+='<td width="350"  height="23"><input type="button" value="Prev" onclick=call_Query_A_Movie_More("'+prev_movie_no+'") name="Prev" />';
		}else
		{
		    str+='<td width="350"  height="23"><input type="button" disabled value="Prev" onclick=call_Query_A_Movie_More("'+prev_movie_no+'") name="Prev" />';
		}
		if (parseInt(movie_no)<total_movie_no)
		{
		    next_movie_no=parseInt(movie_no)+1;
		    str+='&nbsp&nbsp&nbsp<input type="button" value="Next" onclick=call_Query_A_Movie_More("'+next_movie_no+'") name="Next" />';
		}else
		{
		    str+='&nbsp&nbsp&nbsp<input disabled type="button" value="Next" onclick=call_Query_A_Movie_More("'+next_movie_no+'") name="Next" />';
		}
		str+='</td></tr>';
		
		str+='</table></body>';  
		if (window.self.name=="MovieDetailWindow")
		{
			window.self.document.body.innerHTML=str;
		}else
		{
			if (g_MovieDetailWindow && !g_MovieDetailWindow.closed)
	   		{
	   			g_MovieDetailWindow.focus();
	   		}else
	   		{
				MovieDetailWindow= window.open("", "MovieDetailWindow", "top=100, left=200, width=500, height=450"); 
				MovieDetailWindow.document.write(str);
		 		g_MovieDetailWindow=MovieDetailWindow;
 			}			
 		}

 		

  }
}

function call_Query_A_Movie_More(movie_no)
{
  var confirm_msg;
  var cgi_url;


   	g_token=find_cookie_value("token");

	 cgi_url = "/server/get_movie_more?token="+escape(g_token)+"&movie_no="+escape(movie_no)+ "&flag="+Math.random();
	 g_movie_no=movie_no;
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Query_A_Movie_More;
	 xmlHttp.send(null);

}
function Save_Movie_More() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    	alert("Save Movie More Sucessfully");
    } else if (response==0)
    {
   	alert("Failed to Save Movie More");
    }
  }
}

function callServer_Save_Movie_More(movie_no)
{

 
   var movie_description_id="movie_description"+movie_no;
   var rentpoint_id="rentpoint"+movie_no;
   var buypoint_id="buypoint"+movie_no;
   var ratingflag_id="ratingflag"+movie_no;
   var quality_id="quality"+movie_no;
   var rentperiod_id="rentperiod"+movie_no;
   var forwardflag_id="forwardflag"+movie_no;;


   var movie_description;
   var rentpoint;
   var buypoint;
   var ratingflag;
   var quality;
   var rentperiod;
   var forwardflag;
 	

 
 

var confirm_msg;
 	var cgi_url;

	g_item=document.getElementById(movie_description_id);
	//alert(g_item.value);
	movie_description=g_item.value;
	g_item=document.getElementById(rentpoint_id);
	//alert(g_item.value);
	rentpoint=g_item.value;
	g_item=document.getElementById(buypoint_id);
	//alert(g_item.value);
	buypoint=g_item.value;
	g_item=document.getElementById(ratingflag_id);
	//alert(g_item.value);
	ratingflag=g_item.value;
	g_item=document.getElementById(quality_id);
	//alert(g_item.value);
	quality=g_item.value;
	g_item=document.getElementById(rentperiod_id);
	//alert(g_item.value);
	rentperiod=g_item.value;
	g_item=document.getElementById(forwardflag_id);
	// alert(g_item.value);
	forwardflag=g_item.value;

  	g_token=find_cookie_value("token");

 confirm_msg="Save Movie: "+movie_no+" Information?";
 cgi_url = "/server/save_movie_more?token="+escape(g_token)+"&movie_no="+escape(movie_no)+
  "&description="+movie_description+
  "&rentpoint="+rentpoint+
  "&buypoint="+buypoint+
  "&ratingflag="+ratingflag+
  "&quality="+quality+
  "&rentperiod="+rentperiod+
    "&forward="+forwardflag;

  
 //alert(cgi_url);

 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Save_Movie_More;
	 xmlHttp.send(null);

 }


}
function Movie_inquery()
{
 
 if (xmlHttp.readyState == 4) {


    var response = xmlHttp.responseText.split("\r\n");
	var movie_no;
	var movie_name;
	var movie_src;
	var icon_path;
	var movie_category;
	var duration;
	var bitrate;
	var movie_status;
    var movie_play_id;
    var movie_title="<p>"+"Movie List"+"</p>";
    var move_list;
    var i=0;
    var j=0;
    var total_movie_no=0;
	var movie_active_no=0;
	var HTML_str='';
	var strlength=0;
	var pos=0;
    var content = parent.document.getElementById("content");
  //var detail = parent.document.getElementById("detail");
	var refresh_keyword=null;
	var play_keyword=null;
	var save_keyword=null;
	var add_keyword=null;
	var del_keyword=null;
	var nduration =0;


	content.innerHTML="";
//	detail.innerHTML="";
	
	g_search_movie_item.value=null;

	 HTML_str= '<table border="0" cellpadding="0" cellspacing="10">'+
	  '<tr>'+
	      '<td width="20" align="center"><input type="checkbox" name="checkallbox" id=checkallbox  onclick=set_all_checked(g_total_movie_no)></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2"></font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Movie Name</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Media Source</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Icon Path</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Category</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Duration(min.)</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Bitrate(Kbps)</font></td>'+
	      '<td width="80" align="center"><font face="Arial" size="2">Status</font></td>'+
 	 '</tr>'+'<tr><td  colspan="8"><hr size="1" color="#66FFFF"></td></tr>';
 
	while (1)
	{
 		//alert(response[i]);
	 	if (response[i]==0) break;
	 	strlength=response[i].length;
   	    	movie_no=response[i].slice(8,strlength);
   	    	
     	 	strlength=response[i+1].length;
     	 	movie_name=response[i+1].slice(5,strlength);
   	    	
     	 	strlength=response[i+2].length;
   	    	movie_src=response[i+2].slice(4,strlength);
   	    	
    	 	strlength=response[i+3].length;
   	    	icon_path=response[i+3].slice(4,strlength);
   	    	
     	 	strlength=response[i+4].length;
 	    	movie_category=response[i+4].slice(9,strlength);

   	    	
 	    	
     	 	strlength=response[i+5].length;
 	    	duration=response[i+5].slice(9,strlength);
 	    	nduration=parseFloat(duration);
 	    	nduration = nduration /60;
 	    	nduration =nduration.toFixed(3);

 	    	
     	 	strlength=response[i+6].length;
 	    	bitrate=response[i+6].slice(8,strlength);
 	    	
       	 	strlength=response[i+7].length;
 	    	movie_status=response[i+7].slice(7,strlength);
   	    		
   	    	

 		i=i+8;
		movie_active_no++;
		HTML_str=HTML_str+
		   '<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
		   '<td width="20" align="center">'+
	 		' <input type="checkbox" name=checkbox'+movie_no+
	 		' id=checkbox'+movie_no+'></td>'+
		      '<td width="20" align="center"><font face="Arial" size="2">'+movie_no+'</font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="moviename"'+
	 		' id=moviename'+movie_no+
	 		' size="20" value="'+
	 		unescape(movie_name)+'"/></font></td>'+
		      '<td width="200" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" title="'+movie_src+'" name="moviesrc"'+
	 		' id=moviesrc'+movie_no+
	 		' size="35" value="'+
	 		movie_src+'"/></font></td>'+		      
	 		'<td width="200" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" title="'+icon_path+'" name="iconpath"'+
	 		' id=iconpath'+movie_no+
	 		' size="35" value="'+
	 		icon_path+'"/></font></td>'+
		      '<td width="10" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="moviecategory"'+
	 		' id=moviecategory'+movie_no+
	 		' size="15" value="'+
	 		unescape(movie_category)+'"/></font></td>'+
	 		'<td id=movieduration'+movie_no+' width="100" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		nduration+'</font></td>'+
		      '<td id=moviebitrate'+movie_no+' width="100" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		bitrate+'</font></td>';

	 		

			
			//alert(ch_status);		
			if (movie_status.search("1")>=0)
			{
		      		HTML_str+='<td id=moviestatus'+movie_no+' width="100" align="center"><font face="Arial" size="2">'+"ON"+'</font></td>';
			} else if (movie_status.search("0")>=0)
			{
		      		HTML_str+='<td id=moviestatus'+movie_no+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font></td>';
			} else if (movie_status.search("2")>=0)
			{
		      		HTML_str+='<td id=moviestatus'+movie_no+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+"<b>RM</b>"+'</font></td>';
			}

			save_keyword="Save";
			refresh_keyword="Refresh";
			add_keyword="Add";
			del_keyword="Del";
			play_keyword="Play";
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Add_New_Movie("'+movie_no+'")>'+
			' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
			
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Copy_10_Movies("'+movie_no+'")>'+
			' <img border="0" id="copybutton" alt="Copy 10 Movies" title="Copy 10 Movies" src="add_multiple_icon.PNG"></a></td>';

			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=callServer_Movie_Update("'+movie_no+'")>'+
			' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
			
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Del_Movie("'+movie_no+'")>'+
			' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
			
			 HTML_str+='<td id=refreshmoviebutton'+movie_no+' align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Refresh_A_Movie("'+movie_no+'")>'+
			' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a></td>';
			
			 HTML_str+='<td id=refreshmoviebutton'+movie_no+' align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Query_A_Movie_More("'+movie_no+'")>'+
			' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>';
			
			
			HTML_str+='<td align="left" id=movie_play_id'+movie_no+'>';
			HTML_str+="<a href='javascript:void(0)'"+
			' onclick=play_movie("'+movie_no+'")>'+
				' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';

			
							
			HTML_str+='</tr>';				
		   // alert(HTML_str);
		total_movie_no++;
     }
    //    content.innerHTML=HTML_str;
      // alert(menu_main.innerHTML);
  //    alert(HTML_str);
  	i=1;
	  if (total_movie_no==0)
	  {
		movie_src="";
		movie_name="";
		icon_path="";
		movie_category="";
		
	      HTML_str=HTML_str+'<tr>'+
	   '<td width="20" align="center">'+
 		' <input type="checkbox" name=checkbox'+i+
 		' id=checkbox'+movie_no+'></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
	      '<td width="20" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="moviename"'+
		' id=moviename'+i+
		' size="20"/'+
		'</font></td>'+
	      '<td width="200" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="moviesrc"'+
		' id=moviesrc'+i+
		' size="35"/'+
		'</font></td>'+
		'<td width="200" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="iconpath"'+
		' id=iconpath'+i+
		' size="35"/'+
		'</font></td>'+
	      '<td width="10" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="moviecategory"'+
		' id=moviecategory'+i+
		' size="10"/'+
		'</font></td>';
		
	     
	
		HTML_str+='<td id=movieduration'+i+' width="100" align="center"><font face="Arial" size="2">'+'0.0'+'</font></td>';
		HTML_str+='<td id=moviebitrate'+i+' width="100" align="center"><font face="Arial" size="2">'+'0.0'+'</font></td>';
		HTML_str+='<td id=moviestatus'+i+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font></td>';
	      	HTML_str+='<td id=add_id_button align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_Movie("'+i+'")>'+
	      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>'+
	      	      
		      '<td id=copy_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+

		      '<td id=save_id_button align="center">'+		      
		      "<a href='javascript:void(0)'"+
		      ' onclick=Cancel_Add_Movie()>'+
	      	      ' <img border="0" id="delbutton" alt="Canel" title="Cancel" src="del_icon.PNG"></a></td>'+
	
		      '<td id=del_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
		      '<td id=refresh_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
		      '<td id=more_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
		      '<td id=play_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>';
			        	
  		}

      
      	      HTML_Menu_Bar_Str='<td id=movie_menu_bar>';

	      if (g_show_free_version==1)
	      {
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Cut</font>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Copy</font>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Paste</font>'+'&nbsp&nbsp&nbsp';
	      }else
	      {
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_cut_selected_movie()>"+
		      '<font size="2" face="Arial">Cut</font></a>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_copy_selected_movie()>"+
		      '<font size="2" face="Arial">Copy</font></a>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_paste_selected_movie()>"+
		      '<font size="2" face="Arial">Paste</font></a>'+'&nbsp&nbsp&nbsp';
	      }

	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_delete_selected_movie()>"+
	      '<font size="2" face="Arial">Delete</font></a>'+'&nbsp&nbsp&nbsp';

	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_refresh_selected_movie()>"+
	      '<font size="2" face="Arial">Refresh</font></a>'+'&nbsp&nbsp&nbsp';
 
 	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=Preview_callServer_Movie_Inquery()>"+
	      '<font size="2" face="Arial">Preview</font></a>'+'&nbsp&nbsp&nbsp';
	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callServer_Movie_Inquery()>"+
	      '<font size="2" face="Arial">Query</font></a>'+'&nbsp&nbsp&nbsp';
	      
	      if (g_show_free_version==1)
	      {
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Import</font>'+'&nbsp&nbsp&nbsp';
	      }else
	      {
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_import_movie()>"+
		      '<font size="2" face="Arial">Import</font></a>'+'&nbsp&nbsp&nbsp';
	      }
	     // HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_export_movie_definition()>"+
	     // '<font size="2" face="Arial">Export</font></a>'+'&nbsp&nbsp&nbsp';

 
		      
	      HTML_Menu_Bar_Str+='</td>';

  	content.innerHTML='<table width=99%><tr><td>'+
  	'<font size="2" face="Arial">Movie Total: '+ movie_active_no+'</td></tr><tr>'+HTML_Menu_Bar_Str+
 	'<td><font face="Arial" size="2"> <input name="movie_search_field" id="movie_search_field" size="20"/></font><font face="Arial"><font size="2"></font>'+
	   '<input type="button" value="Search" onclick="javascript:search_movie_name();" name="search_movie_name" /></font>'+
	   '<input type="button" value="Go to" onclick="javascript:goto_line_no(2);" name="goto_movie_no" /></font>'+	   
	   '</td></tr>'+
	'</table>'+HTML_str+'</table>';
	g_total_movie_no=movie_active_no;
 
 }

 
}
function callServer_Movie_Inquery() {
  var content = parent.document.getElementById("content");

  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	
	bSystem_Inquery_Panel=0; 
  	bQuery_Channel_Status=0;
  	bQuery_Online_Player=0;
  	bGet_Channel_Statistics=0;
 	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		cgi_url = "/server/query_movie_list?token="+escape(g_token)+"&flag="+Math.random();
		
		content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Movie Information Loading...<p>';
		
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Movie_inquery;
		xmlHttp.send(null);
	}

}
function call_get_movies(position,limit) {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
   	g_token=find_cookie_value("token");
	g_movie_position=position;
	g_movie_limit=limit;
	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;
	if (g_token!=0)
	{
		cgi_url = "/server/get_movies?token="+escape(g_token)+"&position="+position+"&limit="+limit+"&flag="+Math.random();

		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = get_movies;
		xmlHttp.send(null);
	}

}
function sort_movie_ascending()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    //alert(response);
    if (response==0)
    {
     	alert("Sort Failed");
  	if (g_movie_name_order_flag==1)
    	{
    		g_movie_name_order_flag=0;
    		content = document.getElementById("movie_name_id");
    		content.innerHTML='<font face="Arial" size="2">Movie Name</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
	      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';
  	}else if (g_movie_category_order_flag==1)
    	{
    		g_movie_category_order_flag=0;
    		content = document.getElementById("category_id");
 	      	content.innerHTML='<font face="Arial" size="2">Category</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_ascending("category") title="A to Z">'+'&#x25b2'+'</a></font>'+
	      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_descending("category") title="Z to A">'+'&#x25bc'+'</a></font>';
    	}
    }else if (response>0)
    {
    	g_movie_position=1;
   	g_movie_limit=g_constant_limit;
	call_get_movies(g_movie_position,g_movie_limit);
    }
    	
  }
}
function callezserver_sort_movie_ascending(sortkey)
{
	var cgi_url;
	var content;
	
	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;
   	if (sortkey=="name")
	{
		content = document.getElementById("movie_name_id");
		g_movie_name_order_flag=1;
		g_movie_category_order_flag=0;
	}else if (sortkey=="category")
	{
		content = document.getElementById("category_id");
		g_movie_name_order_flag=0;
		g_movie_category_order_flag=1;
	}	
	content.innerHTML='<div class="loader"></div>';
	g_token=find_cookie_value("token");
	cgi_url = "/server/sort_movie_ascending?token="+escape(g_token)+"&sortkey="+sortkey+"&flag="+Math.random();
	
	xmlHttp.open("GET", cgi_url, true);
	xmlHttp.onreadystatechange = sort_movie_ascending;
	xmlHttp.send(null);	
}
function sort_movie_descending()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    var content;
   //alert(response);
    if (response==0)
    {
   	alert("Sort Failed");
 	if (g_movie_name_order_flag==2)
    	{
    		g_movie_name_order_flag=0;
    		content = document.getElementById("movie_name_id");
  		content.innerHTML='<font face="Arial" size="2">Movie Name</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
	      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';

    	}else if (g_movie_category_order_flag==2)
    	{
    		g_movie_category_order_flag=0;
    		content = document.getElementById("category_id");
	      	content.innerHTML='<font face="Arial" size="2">Category</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_ascending("category") title="A to Z">'+'&#x25b2'+'</a></font>'+
	      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_descending("category") title="Z to A">'+'&#x25bc'+'</a></font>';
    	}
     }else if (response>0)
    {
   	g_movie_position=1;
   	g_movie_limit=g_constant_limit;
	call_get_movies(g_movie_position,g_movie_limit);
    }
    	
  }
}
function callezserver_sort_movie_descending(sortkey)
{
	var cgi_url;
	var content;
	
	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;
	if (sortkey=="name")
	{
		content = document.getElementById("movie_name_id");
		g_movie_name_order_flag=2;
		g_movie_category_order_flag=0;
	}else if (sortkey=="category")
	{
		content = document.getElementById("category_id");
		g_movie_name_order_flag=0;
		g_movie_category_order_flag=2;
	}
	content.innerHTML='<div class="loader"></div>';
	g_token=find_cookie_value("token");
	cgi_url = "/server/sort_movie_descending?token="+escape(g_token)+"&sortkey="+sortkey+"&flag="+Math.random();
	
	xmlHttp.open("GET", cgi_url, true);
	xmlHttp.onreadystatechange = sort_movie_descending;
	xmlHttp.send(null);	
}	
function get_movies()
{
 
 if (xmlHttp.readyState == 4) {


    var response = xmlHttp.responseText.split("\r\n");
	var movie_no;
	var movie_name;
	var movie_src;
	var icon_path;
	var movie_category;
	var duration;
	var bitrate;
	var movie_status;
    var movie_play_id;
    var movie_title="<p>"+"Movie List"+"</p>";
    var move_list;
    var i=0;
    var j=0;
    var total_no=0;
	var movie_active_no=0;
	var HTML_str='';
	var strlength=0;
	var pos=0;
    var content = parent.document.getElementById("content");
  //var detail = parent.document.getElementById("detail");
	var refresh_keyword=null;
	var play_keyword=null;
	var save_keyword=null;
	var add_keyword=null;
	var del_keyword=null;
	var nduration =0;
	var endposition;
	var position;
	var limit;
	var curren_sequence_no;
	var total_sequence;
	var start_sequence_no;
	var current_position=g_movie_position;
	var total_count=g_total_movie_no;
	var menustr1="";
	var menustr2="";
	var new_total_no;


	content.innerHTML="";
//	detail.innerHTML="";
	
	g_search_movie_item.value=null;

	 HTML_str= '<table border="0" align="center">'+
	  '<tr>'+
	      '<td width="20" align="center"><input type="checkbox" name="checkallbox" id=checkallbox  onclick=set_all_checked(g_total_movie_no)></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2"></font></td>'+
	      '<td  id="movie_name_id" width="200" align="center"><font face="Arial" size="2">Movie Name</font>';
	      if (g_movie_name_order_flag==0)
	      {
	      	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
	      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';
	      }else if (g_movie_name_order_flag==1)
	      {
	      	HTML_str+='<font face="Arial" size="2" color="#cccccc">'+'&#x25b2'+'</font>'+
	      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';
	      }else if (g_movie_name_order_flag==2)
	      {
	      	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
	      	'<font face="Arial" size="2" color="#cccccc">'+'&#x25bc'+'</font>';
	      }
	      HTML_str+='</td>'+
	      '<td width="20" align="center"></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Media Source</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Icon Path</font></td>'+
	      '<td id="category_id" width="60" align="center"><font face="Arial" size="2">Category</font>';
	      if (g_movie_category_order_flag==0)
	      {
	      	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_ascending("category") title="A to Z">'+'&#x25b2'+'</a></font>'+
	      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_descending("category") title="Z to A">'+'&#x25bc'+'</a></font>';
	      }else if (g_movie_category_order_flag==1)
	      {
	      	HTML_str+='<font face="Arial" size="2" color="#cccccc">'+'&#x25b2'+'</font>'+
	      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_descending("category") title="Z to A">'+'&#x25bc'+'</a></font>';
	      }else if (g_movie_category_order_flag==2)
	      {
	      	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_movie_ascending("category") title="A to Z">'+'&#x25b2'+'</a></font>'+
	      	'<font face="Arial" size="2" color="#cccccc">'+'&#x25bc'+'</font>';
	      } 
	      HTML_str+='</td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Duration(min.)</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Bitrate(Kbps)</font></td>'+
	      '<td width="80" align="center"><font face="Arial" size="2">Status</font></td>'+
 	 '</tr>'+'<tr><td  colspan="10"><hr size="1" color="#66FFFF"></td></tr>';
 
	while (1)
	{
 		//alert(response[i]);
	 	if (response[i]==0) break;
	 	strlength=response[i].length;
   	    	movie_no=response[i].slice(8,strlength);
   	    	
     	 	strlength=response[i+1].length;
     	 	movie_name=response[i+1].slice(5,strlength);
   	    	
     	 	strlength=response[i+2].length;
   	    	movie_src=response[i+2].slice(4,strlength);
   	    	
    	 	strlength=response[i+3].length;
   	    	icon_path=response[i+3].slice(4,strlength);
   	    	
     	 	strlength=response[i+4].length;
 	    	movie_category=response[i+4].slice(9,strlength);

   	    	
 	    	
     	 	strlength=response[i+5].length;
 	    	duration=response[i+5].slice(9,strlength);
 	    	nduration=parseFloat(duration);
 	    	nduration = nduration /60;
 	    	nduration =nduration.toFixed(3);

 	    	
     	 	strlength=response[i+6].length;
 	    	bitrate=response[i+6].slice(8,strlength);
 	    	
       	 	strlength=response[i+7].length;
 	    	movie_status=response[i+7].slice(7,strlength);
   	    		
   	    	

 		i=i+8;
		movie_active_no++;
		HTML_str=HTML_str+
		   '<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
		   '<td width="20" align="center">';
		      if (g_movie_found_position==movie_no)
		      {
	 		HTML_str+=' <input type="checkbox" checked name=checkbox'+movie_no;
	 	      }else
	 	      {
	 		HTML_str+=' <input type="checkbox" name=checkbox'+movie_no;
	 	      }
	 	      HTML_str+=' id=checkbox'+movie_no+'></td>';

	 		
		      HTML_str+='<td width="20" align="center"><font face="Arial" size="2">'+movie_no+'</font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" title="'+movie_name+'" name="moviename"'+
	 		' id=moviename'+movie_no+
	 		' size="20" value="'+
	 		unescape(movie_name)+'"/></font></td>'+
	 		'<td  style="cursor: pointer;" width="20">'+
			'<div class="dropdown">'+
				'<button class="dropbtn">'+
  				'<div class="bar1"></div>'+
  				'<div class="bar2"></div>'+
  				'<div class="bar3"></div>'+
				'</button>'+
  				'<div class="dropdown-content">'+
     					"<a href='javascript:void(0)'"+
					' onclick=callServer_Movie_Update("'+movie_no+'")>'+'<table><tr><td width=10%><img src="save.png"></td><td><font face="Arial" size="3"><b>Save</b></font></td></tr></table></a>'+
					"<a href='javascript:void(0)'"+
					' onclick=call_Query_A_Movie_More("'+movie_no+'")>'+'<table><tr><td width=10%><img src="edit.png"></td><td><font face="Arial" size="3"><b>Edit more options</b></font></td></tr></table></a>'+
    					'</div>'+
			'</div>'+
	 		'</td>'+
		      '<td width="200" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" title="'+movie_src+'" name="moviesrc"'+
	 		' id=moviesrc'+movie_no+
	 		' size="28" value="'+
	 		movie_src+'"/></font></td>'+		      
	 		'<td width="200" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" title="'+icon_path+'" name="iconpath"'+
	 		' id=iconpath'+movie_no+
	 		' size="25" value="'+
	 		icon_path+'"/></font></td>'+
		      '<td width="10" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="moviecategory"'+
	 		' id=moviecategory'+movie_no+
	 		' size="15" value="'+
	 		unescape(movie_category)+'"/></font></td>'+
	 		'<td id=movieduration'+movie_no+' width="100" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		nduration+'</font></td>'+
		      '<td id=moviebitrate'+movie_no+' width="100" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		bitrate+'</font></td>';

	 		

			
			//alert(movie_status);		
			if (movie_status.search("1")>=0)
			{
		      		HTML_str+='<td id=moviestatus'+movie_no+' width="100" align="center"><font face="Arial" size="2">'+"ON"+'</font></td>';
			} else if (movie_status.search("0")>=0)
			{
		      		HTML_str+='<td id=moviestatus'+movie_no+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font></td>';
			} else if (movie_status.search("2")>=0)
			{
		      		HTML_str+='<td id=moviestatus'+movie_no+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+"<b>RM</b>"+'</font></td>';
			}else if (movie_status.search("3")>=0)
			{
		      		HTML_str+='<td id=moviestatus'+movie_no+' width="100" align="center"><font face="Arial" size="2">'+"FWD"+'</font></td>';
			}
HTML_str+='</tr>';				
		   // alert(HTML_str);
		total_no++;
     }
    //    content.innerHTML=HTML_str;
      // alert(menu_main.innerHTML);
  //    alert(HTML_str);
  	i=1;
	//if (total_no>0)
	//{

		new_total_no=Number(g_total_movie_no)+1;
		menustr1='<table width=100%><tr>';
		menustr1+='<td width="4%">'+
		'<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Add" onclick="javascript:open_modal();" />';
		menustr1+='<div id="PanelModal" class="modal">'+
				'<div class="modal-content">'+
				'<span onclick="javascript:close_modal();" class="close">&times;</span>';
    				menustr1+='<table align="center">';
    				menustr1+='<tr><td><font face="Arial"><font size="2">Movie No. : </font></td><td width="350" height="23">'+
				' <font face="Arial" size="2">'+
				' <input type="text" name="movie_no"'+
				' id="movie_no"'+
				' size="3" value="'+
				new_total_no+
				'"/></font></td></tr>';
				
				menustr1+='<tr><td><font face="Arial" font size="2">Movie Name : </font></td><td width="20">'+
				 	' <font face="Arial" size="2">'+
				 	' <input type="text" name="moviename"'+
				 	' id=moviename'+
				 	' size="20"/'+
				 	'</font></td></tr>';
				menustr1+='<tr><td><font face="Arial" font size="2">Media Source : </font></td><td>'+
				 		' <font face="Arial" size="2">'+
				 		' <input type="text" name="moviesrc"'+
				 		' id=moviesrc'+
				 		' size="50"/'+
				 		'</font></td></tr>';
				menustr1+='<tr><td><font face="Arial" size="2">Icon Path : </font></td><td>'+
				 		' <font face="Arial" size="2">'+
				 		' <input type="text" name="iconpath"'+
				 		' id=iconpath'+
				 		' size="50"/'+
				 		'</font></td></tr>';
				menustr1+='<tr><td><font face="Arial" size="2">Category : </font></td><td>'+
				 		' <font face="Arial" size="2">'+
				 		' <input type="text" name="moviecategory"'+
				 		' id=moviecategory'+
				 		' size="20"/'+
				 		'</font></td></tr>';
				menustr1+='<tr><td><input type="button" value="Add" onclick=call_Add_Movie() name="Save" /></td></tr></table>'+
				'</div>'+
			'</div></td>';
		if (g_show_free_version!=1)
		{
			if (g_copy_paste==0)
			{
				menustr1+='<td valign="top"><p style="margin-top: 10"><Input name="movie_cut_field" id="movie_cut_field" type="button" value="&nbsp;&nbsp;Cut&nbsp;&nbsp;&nbsp;" onclick="javascript:callezserver_cut_selected_movie();" />';
			}else
			{
				menustr1+='<td valign="top"><p style="margin-top: 10"><Input name="movie_cut_field" id="movie_cut_field" type="button" value="&nbsp;Paste&nbsp;" onclick="javascript:callezserver_paste_selected_movie();" />';
			}
		}else
		{
			menustr1+='<td valign="top"><p style="margin-top: 10"><Input disabled name="movie_cut_field" id="movie_cut_field" type="button" value="&nbsp;&nbsp;Cut&nbsp;&nbsp;&nbsp;" onclick="javascript:callezserver_cut_selected_movie();" />';
		}
		menustr1+='&nbsp<Input type="button" value="Refresh" onclick="javascript:callezserver_refresh_selected_movie();" />';
		
		if (g_show_free_version!=1)
		{
			menustr1+='&nbsp<Input type="button" value="Import" onclick="javascript:call_import_movie();" />';
		}else
		{
			menustr1+='&nbsp<Input disabled type="button" value="Import" onclick="javascript:call_import_movie();" />';
		}
		
	//	menustr1+='&nbsp<Input type="button" value="Export" onclick="javascript:call_export_movie_definition();" />'+
		menustr1+='&nbsp<input type="button" value="Delete" onclick="javascript:callezserver_delete_selected_movie();" />'+
		'&nbsp<input name="movie_search_field" id="movie_search_field" size="20" value="'+g_search_text+'"/></font><font face="Arial">';
		if (g_movie_found_position>0)
		{
		   menustr1+='&nbsp<input type="button" value="Find Next" onclick="javascript:callServer_search_movie();" id="movie_search_button" name="search_movie" />';
		}else
		{
		   menustr1+='&nbsp<input type="button" value="Search" onclick="javascript:callServer_search_movie();" id="movie_search_button" name="search_movie" />';
		}
		  menustr1+='</td></tr>'+
		      '<tr><td colspan=2><hr size="1" color="#66FFFF"></td></tr>'+
		      '</table>';
		if (total_count==0)
		{
			current_position=0;
			endposition=0;
		}else
		{
			endposition=current_position+total_no-1;
		}
		menustr2='<table width=100%><tr><td width="13%" align="right">'+'<font face="Arial"> <font size="2">Showing '+ current_position+' to '+endposition+' of </td>';
		menustr2+='<td width="20%" id=total_no_top_id>'+'<font face="Arial"> <font size="2">'+total_count+' movies</td>';
		position=1;
		limit=g_constant_limit;
		if (total_count>g_constant_limit)
		{
			menustr2+='<td width="67%"><font face="Arial" size="2"><input type="button" value="First" onclick="javascript:call_get_first_movie('+position+','+limit+')"; /> </font>';
	
			if (current_position-g_constant_limit<0)
			{
					
				menustr2+='<font face="Arial" size="2"><input type="button" disabled value="Previous" onclick="javascript:call_get_movies('+position+','+limit+')"; /> </font>';
			}else
			{
				position=current_position-g_constant_limit;
				if ((position+g_constant_limit)<=total_count)
				{
					limit=g_constant_limit;
				}else
				{
					limit=total_count%g_constant_limit;
					if (limit==0) limit=g_constant_limit;
				}
				menustr2+='<font face="Arial" size="2"><input type="button" value="Previous" onclick="javascript:call_get_movies('+position+','+limit+')"; /> </font>';
			}
			// user sequence
			total_sequence=Math.floor(total_count/g_constant_limit);
			//alert(total_sequence);
			if ((total_count%g_constant_limit) > 0)
			{
				total_sequence++;
			}
			
			curren_sequence_no=Math.floor(current_position/g_constant_limit)+1;
			if ((total_sequence-curren_sequence_no)<g_sequence_constant_limit)
			{
				start_sequence_no=total_sequence-g_sequence_constant_limit;
			}else
			{
				start_sequence_no=curren_sequence_no-(g_sequence_constant_limit/2);
			}
			if (start_sequence_no<=0) start_sequence_no=1;
			//if (total_sequence<g_sequence_constant_limit)
			//{
			//	start_sequence_no=1;
			//}
			for (i=(start_sequence_no-1)*g_constant_limit+1,j=start_sequence_no,k=1;;j++,k++)
			{
				if (j>=total_sequence)
				{
					position=i;
					limit=total_count%g_constant_limit;
					if (limit==0) limit=g_constant_limit;
					if (j<10)
					{
						if (j==curren_sequence_no)
						{
							menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="0'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /> </font>';
						}else
						{
							menustr2+='<font face="Arial" size="2"><input type="button" value="0'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /> </font>';
						}
					}else
					{
						if (j==curren_sequence_no)
						{
							menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /> </font>';
						}else
						{
							menustr2+='<font face="Arial" size="2"><input type="button" value="'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /> </font>';
						}
					}
					//menustr2+='</td>';
					break;
				}
				if (k<=g_sequence_constant_limit)
				{
					position=i;
					limit=g_constant_limit;
					if (j<10)
					{
						if (j==curren_sequence_no)
						{
							menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="0'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /> </font>';
						}else
						{
							menustr2+='<font face="Arial" size="2"><input type="button" value="0'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /> </font>';
						}
					}else
					{
						if (j==curren_sequence_no)
						{
							menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /> </font>';
						}else
						{
							menustr2+='<font face="Arial" size="2"><input type="button" value="'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /> </font>';
						}
					}
					i+=g_constant_limit;
				}else
				{
					//menustr2+='</td>';
					break;
				}
				
				
			}
			if (endposition+1<=total_count)
			{
				position=endposition+1;
				if ((position+g_constant_limit)<=total_count)
				{
					limit=g_constant_limit;
				}else
				{
					limit=total_count%g_constant_limit;
					if (limit==0) limit=g_constant_limit;
				}
				menustr2+='<font face="Arial" size="2"><input type="button" value="Next" onclick="javascript:call_get_movies('+position+','+limit+')"; /> </font>';
			}else
			{
				menustr2+='<font face="Arial" size="2"><input type="button" disabled value="Next" onclick="javascript:call_get_movies('+position+','+limit+')"; /> </font>';
			}
			if ((total_count%g_constant_limit)==0)
			{
				position=total_count-g_constant_limit+1;
				limit=g_constant_limit;
			}else
			{
				position=total_count-(total_count%g_constant_limit)+1;
				limit=total_count%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
			}
			menustr2+='<font face="Arial" size="2"><input type="button" value="Last" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
			menustr2+='</td></tr></table>';
		}else
		{
			menustr2+='<td>';
		}
	//}
  	
	content.innerHTML=menustr1+HTML_str+'</table>'+menustr2;
	
 }

 
}
function Preview_Movie_inquery()
{
   var content = parent.document.getElementById("content");
    var str;
   var buffer;
   var i;
   var path;
   var trstart=0;
   var strtext;
   var video_path;
   var browser_name;
   var buffer_video_text;
   var media_text;
   var media_text_path;
   var movie_no;
  var movie_name;
   var subtitle_path;
   var icon_path;
   var movie_type;
   var movie_status;
 
 
 
  if (xmlHttp.readyState == 4) {
  var response = xmlHttp.responseText.split("\r\n");
   // alert(g_file_path);
     str='';
     strtext='';
  //    	  BrowserDetect.init();
  //	  browser_name=BrowserDetect.browser;
 	g_token=find_cookie_value("token");
 	if (g_token==0) return; 
 	//alert(g_token);


        for (i=0;;i+=8)
  	{
  //	   alert(response[i]);
	    if (response[i]==0)
  	    {
  	    	break;
 	    } else
  	    {
 	 	strlength=response[i].length;
   	    	movie_no=response[i].slice(8,strlength);
   	    	
     	 	strlength=response[i+1].length;
     	 	movie_name=response[i+1].slice(5,strlength);
   	    	
     	 	strlength=response[i+2].length;
   	    	movie_src=response[i+2].slice(4,strlength);
   	    	
    	 	strlength=response[i+3].length;
   	    	icon_path=response[i+3].slice(10,strlength);
   	    	//alert(icon_path);
     	 	strlength=response[i+4].length;
 	    	movie_category=response[i+4].slice(9,strlength);

   	    	
 	    	
     	 	strlength=response[i+5].length;
 	    	duration=response[i+5].slice(9,strlength);
 	    	nduration=parseFloat(duration);
 	    	nduration = nduration /60;
 	    	nduration =nduration.toFixed(3);

 	    	
     	 	strlength=response[i+6].length;
 	    	bitrate=response[i+6].slice(8,strlength);
 	    	
       	 	strlength=response[i+7].length;
 	    	movie_status=response[i+7].slice(7,strlength);
 
 		if (trstart==0)
  	    	{
  	    		str+='<tr>';
  	    		strtext+='<tr>';
  	    	} 
 		
		str+='<td width="16%" valign="middle" align="center" height="185">'+
		'<a style="text-decoration:none"'+ 
		"href='javascript:void(0)'"+
		//' onclick=play_movie_by_name("'+escape(movie_name)+'","'+subtitle_path+'","'+movie_type+'")>'+
		' onclick=play_movie_by_name("'+escape(movie_name)+'","'+escape(movie_src)+'")>'+
		//' onclick=play_movie("'+movie_no+'")>'+
		'<img border="0" src="'+icon_path+'" width="140" height="200"></a></td>';
		strtext+='<td width="16%" valign="middle" align="center" height="23"><font size="2" color="#000000" face="Verdana">'+unescape(movie_name)+'</font></td>';

			
		

		trstart++;
		if (trstart==5)
  	    	{
  	    		str+='</tr>';
  	    		strtext+='</tr>';
  	    		str+=strtext;
  	    		strtext='';
  	    		trstart=0;
 	    		
  	    	}
	 		//alert(str);
   	    } 
      }
  	if (trstart!=0)
 	{
 	  	    		str+='</tr>';
	  	    		strtext+='</tr>';
	  	    		str+=strtext;
	}
	if (i==0)
	{
		str='<tr><td><p align="center"><b><i><font face="Arial" color="#FFFFFF" size="5">No Content</font></i></b></p>'+
     		'</td></tr>';
	}
	
 	content.innerHTML='<center><table border="0" cellpadding="10" cellspacing="0" width="100%">'+str+'</table></center>';
   }
}

function Preview_callServer_Movie_Inquery() {
  var content = parent.document.getElementById("content");

  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	
	bSystem_Inquery_Panel=0; 
  	bQuery_Channel_Status=0;
  	bQuery_Online_Player=0;
  	bGet_Channel_Statistics=0;
 	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		cgi_url = "/server/query_movie_list?token="+escape(g_token)+"&flag="+Math.random();
		
		content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Movie Information Loading...<p>';
		
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Preview_Movie_inquery;
		xmlHttp.send(null);
	}

}



function Set_Channel_update()
{
	add_cookie_value("ch_up_flag",1);
}
function Clear_Channel_update()
{
	add_cookie_value("ch_up_flag",0);
}
function Set_Movie_update()
{
	add_cookie_value("mv_up_flag",1);
}
function Clear_Movie_update()
{
	add_cookie_value("mv_up_flag",0);
}
function Cancel_Add_User()
{
	var content = parent.document.getElementById("content");
	content.innerHTML=g_content;

}
function Cancel_Add_Channel()
{
	var content = parent.document.getElementById("content");
	//g_Channel_Edit_Mode=0;
	content.innerHTML=g_content;
}
function Cancel_Add_Movie()
{
	var content = parent.document.getElementById("content");
	g_Movie_Edit_Mode=0;
	content.innerHTML=g_content;
}
function call_Edit_Movie()
{
	g_Movie_Edit_Mode=1;
	callServer_Movie_Inquery();
}

function call_Edit_Channel()
{
	//g_Channel_Edit_Mode=1;
	callServer_CH_Inquery();
}
/*function Refresh_OK_Msg(){
alert("Refresh Channel Sucessfully");
}
*/
function show_channel_menu_bar()
{
	var ch_menu_bar= document.getElementById("ch_menu_bar");
	
	if (ch_menu_bar!=null)
	{
 
      	      if (g_show_free_version==1)
      	      {
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Cut</font>'+'&nbsp&nbsp&nbsp';
	
	 	      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Copy</font>'+'&nbsp&nbsp&nbsp';
	 
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Paste</font>'+'&nbsp&nbsp&nbsp';
      	      }else
      	      {
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_cut_selected_channel()>"+
		      '<font size="2" face="Arial">Cut</font></a>'+'&nbsp&nbsp&nbsp';
	
	 	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_copy_selected_channel()>"+
		      '<font size="2" face="Arial">Copy</font></a>'+'&nbsp&nbsp&nbsp';
	 
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_paste_selected_channel()>"+
		      '<font size="2" face="Arial">Paste</font></a>'+'&nbsp&nbsp&nbsp';
	
	      }
	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_delete_selected_channel()>"+
	      '<font size="2" face="Arial">Delete</font></a>'+'&nbsp&nbsp&nbsp';

	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_refresh_selected_channel()>"+
	      '<font size="2" face="Arial">Refresh</font></a>'+'&nbsp&nbsp&nbsp';

	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=Preview_callServer_CH_Inquery()>"+
	      '<font size="2" face="Arial">Preview</font></a>'+'&nbsp&nbsp&nbsp';
	      
	      HTML_Menu_Bar_Str="<a href='javascript:void(0)' onclick=callServer_CH_Inquery()>"+
	      '<font size="2" face="Arial">Auto Query</font></a>'+'&nbsp&nbsp&nbsp';

	      if (g_show_free_version==1)
	      {
	          HTML_Menu_Bar_Str+='<font size="2" face="Arial">Import</font>'+'&nbsp&nbsp&nbsp';
	      }else
	      {
	          HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_import_channel()>"+
		      '<font size="2" face="Arial">Import</font></a>'+'&nbsp&nbsp&nbsp';
	      }
	      
	      //HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_export_channel_definition()>"+
	      //'<font size="2" face="Arial">Export</font></a>'+'&nbsp&nbsp&nbsp';
	      
	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_refresh_channel()>"+
	      '<font size="2" face="Arial">Refresh All</font></a>';
		ch_menu_bar.innerHTML=HTML_Menu_Bar_Str;
	}
}
function show_movie_menu_bar()
{
	var movie_menu_bar= document.getElementById("movie_menu_bar");
	
	if (movie_menu_bar!=null)
	{
	      if (g_show_free_version==1)
	      {
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Cut</font>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Copy</font>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Paste</font>'+'&nbsp&nbsp&nbsp';
	      }else
	      {
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_cut_selected_movie()>"+
		      '<font size="2" face="Arial">Cut</font></a>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_copy_selected_movie()>"+
		      '<font size="2" face="Arial">Copy</font></a>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_paste_selected_movie()>"+
		      '<font size="2" face="Arial">Paste</font></a>'+'&nbsp&nbsp&nbsp';
	      }


	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_delete_selected_movie()>"+
	      '<font size="2" face="Arial">Delete</font></a>'+'&nbsp&nbsp&nbsp';

	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_refresh_selected_movie()>"+
	      '<font size="2" face="Arial">Refresh</font></a>'+'&nbsp&nbsp&nbsp';
 
 	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=Preview_callServer_Movie_Inquery()>"+
	      '<font size="2" face="Arial">Preview</font></a>'+'&nbsp&nbsp&nbsp';
	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callServer_Movie_Inquery()>"+
	      '<font size="2" face="Arial">Query</font></a>'+'&nbsp&nbsp&nbsp';
	      
	      if (g_show_free_version==1)
	      {
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Import</font>'+'&nbsp&nbsp&nbsp';
	      }else
	      {
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_import_movie()>"+
		      '<font size="2" face="Arial">Import</font></a>'+'&nbsp&nbsp&nbsp';
	      }
	            
	      //HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_export_movie_definition()>"+
	      //'<font size="2" face="Arial">Export</font></a>'+'&nbsp&nbsp&nbsp';

	      movie_menu_bar.innerHTML=HTML_Menu_Bar_Str;
	}
}
function ezserver_quit_refresh_channel(){
 
  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;

    if (response==0)
    {
   	alert("Failed to finish Channels");
    }
	//g_Channel_Edit_Mode=0;
	g_Channel_Updated=0;
	show_channel_menu_bar();      
	callServer_CH_Inquery();	


 }
 
}
function callezserver_quit_updated_channel()
{
	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var confirm_msg;
  var ch_menu_bar= document.getElementById("ch_menu_bar");

	
      	g_token=find_cookie_value("token");

	cgi_url = "/server/refresh_channel?token="+escape(g_token)+"&flag="+Math.random();
	
	alert("Need to wait 10 sec. to get new channel status.");
	if (g_Channel_Updated==1)
	{
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = ezserver_quit_refresh_channel;
		xmlHttp.send(null);
		ch_menu_bar.innerHTML='<font size="2" face="Arial">Refreshing</font>';

/*		confirm_msg="Channel Updated, Refresh Channles?";
		if (confirm(confirm_msg))
		{
		 	 xmlHttp.open("GET", cgi_url, true);
			 xmlHttp.onreadystatechange = ezserver_quit_refresh_channel;
			 xmlHttp.send(null);
		      ch_menu_bar.innerHTML='<font size="2" face="Arial">Refreshing</font>';
	
		}else
		{
			g_Channel_Updated=0;
			callServer_CH_Inquery();
		}
		*/
	}else
	{
		g_Channel_Updated=0;
		callServer_CH_Inquery();
	}
		
		
	

 	
} 
function ezserver_quit_refresh_movie(){
 
  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;

    if (response==0)
    {
   	alert("Failed to finish Movies");
    }
	g_Movie_Edit_Mode=0;
	g_Movie_Updated=0;
	show_movie_menu_bar();      
	callServer_Movie_Inquery();	


 }
 
}
function callezserver_quit_updated_movie()
{
	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var confirm_msg;
  var movie_menu_bar= document.getElementById("movie_menu_bar");

	
      	g_token=find_cookie_value("token");

	cgi_url = "/server/refresh_movie?token="+escape(g_token)+"&flag="+Math.random();
	
	if (g_Movie_Updated==1)
	{
		alert("Please wait to refresh movies...");
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = ezserver_quit_refresh_movie;
		xmlHttp.send(null);
		movie_menu_bar.innerHTML='<font size="2" face="Arial">Refreshing</font>';

	}else
	{
		g_Movie_Updated=0;
		callServer_Movie_Inquery();
	}
		
		
	

 	
} 
function ezserver_quit_movie(){
 
	g_Movie_Edit_Mode=0;
	if (g_Movie_Updated==1)
	{
		callezserver_quit_updated_movie();
		g_Movie_Updated=0;
	}else
	{
		callServer_Movie_Inquery();
	}
}
function Add_Movie(movie_no) {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    var item_save;
    var item_add;
   var item_copy;
    var item_del;
   var item_refresh;
   var item_more;
    var item_play;
    if (response==1)
    {
    	g_Movie_Updated=1;
    	Set_Movie_update();
    	g_total_movie_no++;
    	if ((g_movie_position+g_constant_limit)<=g_total_movie_no)
	{
		if (((g_total_movie_no)%g_constant_limit)==1)
		{
			g_movie_position=parseInt(g_total_movie_no);
		}
		g_movie_limit=g_constant_limit;
	}else
	{
		g_movie_limit=g_total_movie_no%g_constant_limit;
		if (g_movie_limit==0) 
		{
			if (g_total_movie_no<g_movie_position)
			{
				g_movie_position=g_total_movie_no-g_constant_limit+1;
			}
			g_movie_limit=g_constant_limit;
		}
	}
	call_get_movies(g_movie_position,g_movie_limit);
   } else
    {
   	alert("Failed to Add Movie");
 	//	g_Movie_Edit_Mode=1;
	//	callServer_Movie_Inquery();
   }

	
    }
}
function call_Add_Movie()
{

 var movie_src_id="moviesrc"; 
 var movie_src_name="moviename"; 
  var movie_src_category="moviecategory"; 
var icon_path_name="iconpath"; 
var movie_src_no="movie_no"; 
 var movie_src;
 var movie_category;
 var movie_name;
 var icon_path;
 var g_item_name;
var movie_no;


var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
   g_item_name=document.getElementById(movie_src_no);
 	movie_no = g_item_name.value;
	/*
	if (movie_no>(g_total_movie_no+1))
	{
		alert("Movie No. is invaild.");
		return;
	}
	*/
 g_item=document.getElementById(movie_src_id);
 movie_src = g_item.value;
 if (movie_src.length==0)
 {
 	alert("Media Source is empty");
 	return;
 }


 g_item_name=document.getElementById(movie_src_category);
 movie_category = g_item_name.value;

 g_item_name=document.getElementById(movie_src_name);
 movie_name = g_item_name.value;
 //alert(movie_name);
 if (movie_name.length==0)
 {
 	alert("Movie Name is empty");
 	return;
 }
 g_item_name=document.getElementById(icon_path_name);
 icon_path = g_item_name.value;
 


   	g_token=find_cookie_value("token");
g_movie_no=movie_no;
 confirm_msg="Add Movie "+movie_no+" Information?";
 cgi_url = "/server/add_movie?token="+escape(g_token)+"&movie_no="+escape(movie_no)+ "&movie_name=" + escape(movie_name)+ "&src=" + escape(movie_src)+ "&category=" + escape(movie_category)+ "&img=" + escape(icon_path)+"&flag="+Math.random();
// if (confirm(confirm_msg))
// {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Add_Movie;
	 xmlHttp.send(null);
 //}


}

// need to edit add new channel in any position
function call_Add_New_Movie(movie_no)
{
	
	var HTML_str;
	//var ch_no;
	var len;
	var movie_refresh_button; 
	var movie_play_id;
	var movie_src_id; 
	var movie_src_name; 
	var movie_src_category; 
	var icon_path_name; 
	var movie_src_status; 
	var movie_src_duration;
	var movie_src_bitrate;
	
	var movie_src;
	var movie_name;
	var icon_path;
	var movie_category;
	var movie_status;
	var movie_duration;
	var movie_bitrate;
	
	var item_name;
	var i;
	var save_keyword="Save";
	var add_keyword="Add";
	var del_keyword="Del";
	var refresh_keyword="Refresh";
	var play_keyword="Play";
	var movie_active_no;
	var m;
	var k;
	
	var menustr2;
	var endposition;
	var position;
	var limit;
	var curren_sequence_no;
	var total_sequence;
	var start_sequence_no;
	var current_position=g_movie_position;
	var total_count=g_total_movie_no;
	var pagelineno=0;
	var total_no=0;

	
	var content = parent.document.getElementById("content");
 	var movie_menu_bar= document.getElementById("movie_menu_bar");

	g_content=content.innerHTML;
	movie_active_no=g_total_movie_no;
	movie_active_no++;
	
		HTML_Menu_Bar_Str='<td id=movie_menu_bar>';
	      if (g_show_free_version==1)
	      {
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Cut</font>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Copy</font>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Paste</font>'+'&nbsp&nbsp&nbsp';
	      }else
	      {
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_cut_selected_movie()>"+
		      '<font size="2" face="Arial">Cut</font></a>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_copy_selected_movie()>"+
		      '<font size="2" face="Arial">Copy</font></a>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_paste_selected_movie()>"+
		      '<font size="2" face="Arial">Paste</font></a>'+'&nbsp&nbsp&nbsp';
	      }


		HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_delete_selected_movie()>"+
		'<font size="2" face="Arial">Delete</font></a>'+'&nbsp&nbsp&nbsp';
		
		HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_refresh_selected_movie()>"+
		'<font size="2" face="Arial">Refresh</font></a>'+'&nbsp&nbsp&nbsp';
		
		HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=Preview_callServer_Movie_Inquery()>"+
		'<font size="2" face="Arial">Preview</font></a>'+'&nbsp&nbsp&nbsp';
		HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callServer_Movie_Inquery()>"+
		'<font size="2" face="Arial">Query</font></a>'+'&nbsp&nbsp&nbsp';
		
	      if (g_show_free_version==1)
	      {
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Import</font>'+'&nbsp&nbsp&nbsp';
	      }else
	      {
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_import_movie()>"+
		      '<font size="2" face="Arial">Import</font></a>'+'&nbsp&nbsp&nbsp';
	      }
		    
		//HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_export_movie_definition()>"+
		//'<font size="2" face="Arial">Export</font></a>'+'&nbsp&nbsp&nbsp';
		HTML_Menu_Bar_Str+='</td>';
	      
	  HTML_str= '<table border="0" align="center">'+
	  '<tr>'+
	      '<td width="20" align="center"> <input type="checkbox" name="checkallbox" id=checkallbox  onclick=set_all_checked(g_total_movie_no)></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2"></font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Movie Name</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Media Source</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Icon Path</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Category</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Duration(min.)</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Bitrate(Kbps)</font></td>'+
	      '<td width="80" align="center"><font face="Arial" size="2">Status</font></td>'+
 	 '</tr>'+'<tr><td  colspan="8"><hr size="1" color="#66FFFF"></td></tr>';
 	
//	for (i=1,m=1;i<=movie_active_no;i++,m++)
	pagelineno=parseInt(current_position)+parseInt(g_movie_limit)+1;
	for (i=current_position,m=current_position;i<pagelineno;i++,m++)
	{
	//	alert(i);
		movie_src_id="moviesrc"+m; 
		item_name=document.getElementById(movie_src_id);
		// alert(item_name.value);
		movie_src = item_name.value;
		
		movie_src_name="moviename"+m; 
		item_name=document.getElementById(movie_src_name);
		movie_name = item_name.value;

		icon_path_name="iconpath"+m; 
		item_name=document.getElementById(icon_path_name);
		icon_path = item_name.value;
		
		movie_src_category="moviecategory"+m; 
		item_name=document.getElementById(movie_src_category);
		movie_category = item_name.value;
		
		
		movie_src_status="moviestatus"+m; 
		item_name=document.getElementById(movie_src_status);
		movie_status = item_name.innerHTML;

		movie_src_duration="movieduration"+m; 
		item_name=document.getElementById(movie_src_duration);
		movie_duration = item_name.innerHTML;

		movie_src_bitrate="moviebitrate"+m; 
		item_name=document.getElementById(movie_src_bitrate);
		movie_bitrate = item_name.innerHTML;
		
		
//		alert(ch_status);
	
		HTML_str=HTML_str+'<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
	      '<td width="20" align="center">'+
 		' <input type="checkbox" name=checkbox'+i+
 		' id=checkbox'+i+'></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
	      '<td width="20" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="moviename"'+
 		' id=moviename'+i+
 		' size="20" value="'+
	 	movie_name+'"/'+
 		'</font></td>'+
	      '<td width="200" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="moviesrc"'+
 		' id=moviesrc'+i+
 		' size="35" value="'+
	 	movie_src+'"/'+
 		'</font></td>'+
 		'<td width="200" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="iconpath"'+
 		' id=iconpath'+i+
 		' size="35" value="'+
	 	icon_path+'"/'+
 		'</font></td>'+
	      '<td width="10" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="moviecategory"'+
 		' id=moviecategory'+i+
 		' size="10" value="'+
	 	movie_category+'"/'+
 		'</font></td>';
		HTML_str+='<td id=movieduration'+i+' width="100" align="center"><font face="Arial" size="2">'+movie_duration+'</font></td>';
		HTML_str+='<td id=moviebitrate'+i+' width="100" align="center"><font face="Arial" size="2">'+movie_bitrate+'</font></td>';

		total_no++;


					
		if (m==(movie_no))
		{
			HTML_str+='<td id=moviestatus'+i+' width="100" align="center">'+movie_status+'</td>';
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Add_New_Movie("'+i+'")>'+
			' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Copy_10_Movies("'+i+'")>'+
			' <img border="0" id="copybutton" alt="Copy 10 Movies" title="Copy 10 Movies" src="add_multiple_icon.PNG"></a></td>';
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=callServer_Movie_Update("'+i+'")>'+
			' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
			/*
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Del_Movie("'+i+'")>'+
			' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';

			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Refresh_A_Movie("'+i+'")>'+
			' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a></td>';
			*/
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Query_A_Movie_More("'+i+'")>'+
			' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>';
			
			
			/*
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=play_movie("'+i+'")>'+
			' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
			HTML_str+='</tr>';
			*/

			i++;
			
			movie_src="";
			movie_name="";
			icon_path="";
			movie_category="";
			
		      HTML_str=HTML_str+'<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
		      '<td width="20" align="center">'+
	 		' <input type="checkbox" name=checkbox'+i+
	 		' id=checkbox'+i+'></td>'+
		      '<td width="60" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="moviename"'+
	 		' id=moviename'+i+
	 		' size="20"/'+
	 		'</font></td>'+
		      '<td width="200" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="moviesrc"'+
	 		' id=moviesrc'+i+
	 		' size="35"/'+
	 		'</font></td>'+
	 		'<td width="200" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="iconpath"'+
	 		' id=iconpath'+i+
	 		' size="35"/'+
	 		'</font></td>'+
		      '<td width="10" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="moviecategory"'+
	 		' id=moviecategory'+i+
	 		' size="10"/'+
	 		'</font></td>';
	 		
		     
		
			HTML_str+='<td id=movieduration'+i+' width="100" align="center"><font face="Arial" size="2">'+'0.0'+'</font></td>';
			HTML_str+='<td id=moviebitrate'+i+' width="100" align="center"><font face="Arial" size="2">'+'0.0'+'</font></td>';
			HTML_str+='<td id=moviestatus'+i+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font></td>';
		      	HTML_str+='<td id=add_id_button align="center">'+
			      "<a href='javascript:void(0)'"+
			      ' onclick=call_Add_Movie("'+i+'")>'+
		      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>'+
		      	      
			      '<td id=copy_id_button align="center">'+		      
			      ' <font face="Arial" size="2"></font></a></td>'+
		      	      
			      '<td id=save_id_button align="center">'+		      
			      "<a href='javascript:void(0)'"+
			      ' onclick=Cancel_Add_Movie()>'+
		      	      ' <img border="0" id="delbutton" alt="Canel" title="Cancel" src="del_icon.PNG"></a></td>'+

			      /*
			      '<td id=del_id_button align="center">'+		      
			      ' <font face="Arial" size="2"></font></a></td>'+
			      '<td id=refresh_id_button align="center">'+		      
			      ' <font face="Arial" size="2"></font></a></td>'+
			      */
			      '<td id=more_id_button align="center">'+		      
			      ' <font face="Arial" size="2"></font></a></td>';
			     /* '<td id=play_id_button align="center">'+		      
			      ' <font face="Arial" size="2"></font></a></td>';
			      */
		      	      
		}else
		{
			HTML_str+='<td id=moviestatus'+i+' width="100" align="center"><font face="Arial" size="2">'+movie_status+'</font></td>';
	
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Add_New_Movie("'+i+'")>'+
			' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Copy_10_Movies("'+i+'")>'+
			' <img border="0" id="copybutton" alt="Copy 10 Movies" title="Copy 10 Movies" src="add_multiple_icon.PNG"></a></td>';
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=callServer_Movie_Update("'+i+'")>'+
			' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
			/*
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Del_Movie("'+i+'")>'+
			' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
			 HTML_str+='<td id=refreshmoviebutton'+i+' align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Refresh_A_Movie("'+i+'")>'+
			' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a></td>';
			*/
			 HTML_str+='<td id=morebutton'+i+' align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Query_A_Movie_More("'+i+'")>'+
			' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>';

			/*
			HTML_str+='<td align="left" id=movie_play_id'+movie_no+'>';
			HTML_str+="<a href='javascript:void(0)'"+
			' onclick=play_movie("'+i+'")>'+
				' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
				*/
	
			
		}
		HTML_str+='</tr>';
	      	     
	      	      	
	}
     
     
//	alert(HTML_str);
	menustr1='<table width=100%><tr>';
	menustr1+='<td width=55%"></td>'+'<td width=45%>'+
	'<Input type="button" value="Refresh" onclick="javascript:callezserver_refresh_selected_movie();" />';
	
	if (g_show_free_version!=1)
	{
		menustr1+='<Input type="button" value="Import" onclick="javascript:call_import_movie();" />';
	}else
	{
		menustr1+='<Input disabled type="button" value="Import" onclick="javascript:call_import_movie();" />';
	}
	
	//menustr1+='<Input type="button" value="Export" onclick="javascript:call_export_movie_definition();" />'+
	menustr1+='<input type="button" value="Delete" onclick="javascript:callezserver_delete_selected_movie();" />'+
	'<input name="movie_search_field" id="movie_search_field" size="20" value="'+g_search_text+'"/></font><font face="Arial">';
	if (g_movie_found_position>0)
	{
	   menustr1+='<input type="button" value="Find Next" onclick="javascript:callServer_search_movie();" id="movie_search_button" name="search_movie" />';
	}else
	{
	   menustr1+='<input type="button" value="Search" onclick="javascript:callServer_search_movie();" id="movie_search_button" name="search_movie" />';
	}
	  menustr1+='</td></tr>'+
	      '</table>';

 	if (total_count==0)
	{
		current_position=0;
		endposition=0;
	}else
	{
		endposition=current_position+total_no-1;
	}
//	menustr2='<table width=100%><tr><td>'+'<font face="Arial"> <font size="2">Showing '+ current_position+' to '+endposition+' of '+total_count+' users</td>';
	menustr2='<table width=100%><tr><td width="13%" align="right">'+'<font face="Arial"> <font size="2">Showing '+ current_position+' to '+endposition+' of </td>';
	menustr2+='<td width="20%" id=total_no_top_id>'+'<font face="Arial"> <font size="2">'+total_count+' movies</td>';
	position=1;
	limit=g_constant_limit;
	if (total_count>g_constant_limit)
	{	
		menustr2+='<td width="67%"><font face="Arial" size="2"><input type="button" value="First" onclick="javascript:call_get_first_movie('+position+','+limit+')"; /></font>';
	
		if (current_position-g_constant_limit<0)
		{
				
			menustr2+='<font face="Arial" size="2"><input type="button" disabled value="Previous" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
		}else
		{
			position=current_position-g_constant_limit;
			if ((position+g_constant_limit)<=total_count)
			{
				limit=g_constant_limit;
			}else
			{
				limit=total_count%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
			}
			menustr2+='<font face="Arial" size="2"><input type="button" value="Previous" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
		}
		// user sequence
		total_sequence=Math.floor(total_count/g_constant_limit);
		//alert(total_sequence);
		if ((total_count%g_constant_limit) > 0)
		{
			total_sequence++;
		}
		
		curren_sequence_no=Math.floor(current_position/g_constant_limit)+1;
		if ((total_sequence-curren_sequence_no)<g_sequence_constant_limit)
		{
			start_sequence_no=total_sequence-g_sequence_constant_limit;
		}else
		{
			start_sequence_no=curren_sequence_no-(g_sequence_constant_limit/2);
		}
		if (start_sequence_no<=0) start_sequence_no=1;
		//if (total_sequence<g_sequence_constant_limit)
		//{
		//	start_sequence_no=1;
		//}
		for (i=(start_sequence_no-1)*g_constant_limit+1,j=start_sequence_no,k=1;;j++,k++)
		{
			if (j>=total_sequence)
			{
				position=i;
				limit=total_count%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
				if (j<10)
				{
					if (j==curren_sequence_no)
					{
						menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="0'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
					}else
					{
						menustr2+='<font face="Arial" size="2"><input type="button" value="0'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
					}
				}else
				{
					if (j==curren_sequence_no)
					{
						menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
					}else
					{
						menustr2+='<font face="Arial" size="2"><input type="button" value="'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
					}
				}
				break;
			}
			if (k<=g_sequence_constant_limit)
			{
				position=i;
				limit=g_constant_limit;
				if (j<10)
				{
					if (j==curren_sequence_no)
					{
						menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="0'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
					}else
					{
						menustr2+='<font face="Arial" size="2"><input type="button" value="0'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
					}
				}else
				{
					if (j==curren_sequence_no)
					{
						menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
					}else
					{
						menustr2+='<font face="Arial" size="2"><input type="button" value="'+j+'" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
					}
				}
				i+=g_constant_limit;
			}else
			{
				
				break;
			}
			
			
		}
		if (endposition+1<=total_count)
		{
			position=endposition+1;
			if ((position+g_constant_limit)<=total_count)
			{
				limit=g_constant_limit;
			}else
			{
				limit=total_count%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
			}
			menustr2+='<font face="Arial" size="2"><input type="button" value="Next" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
		}else
		{
			menustr2+='<font face="Arial" size="2"><input type="button" disabled value="Next" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
		}
		if ((total_count%g_constant_limit)==0)
		{
			position=total_count-g_constant_limit+1;
			limit=g_constant_limit;
		}else
		{
			position=total_count-(total_count%g_constant_limit)+1;
			limit=total_count%g_constant_limit;
			if (limit==0) limit=g_constant_limit;
		}
		menustr2+='<font face="Arial" size="2"><input type="button" value="Last" onclick="javascript:call_get_movies('+position+','+limit+')"; /></font>';
		menustr2+='</td></tr></table>';
	}else
	{
		menustr2+='<td>';
	}
	/* content.innerHTML='<table width=99%><tr><td>'+
  	'<font size="2" face="Arial">Movie Total: '+ movie_active_no+'</td></tr><tr>'+HTML_Menu_Bar_Str+
 	'<td> <font face="Arial" size="2"> <input name="movie_search_field" id="movie_search_field" size="20"/></font><font face="Arial"><font size="2"></font>'+
	   '<input type="button" value="Search" onclick="javascript:search_movie_name();" name="search_movie_name" /></font>'+
	   '<input type="button" value="Go to" onclick="javascript:goto_line_no(2);" name="goto_movie_no" /></font>'+	   
	   '</td></tr>'+
	'</table>'+HTML_str+'</table>'+menustr2;
	*/
	content.innerHTML=menustr1+HTML_str+'</table>'+menustr2;

   //    content.innerHTML=HTML_str+'</table>';
//      alert(ch_list_info.innerHTML);
   
		
}
function Copy_10_Movies() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    var item_save;
    var item_add;
    var item_del;
   var item_refresh;
    var item_play;
    if (response==1)
    {
    	g_Movie_Updated=1;
    	Set_Movie_update();
    	//g_total_movie_no+=10;
    	g_total_movie_no=parseInt(g_total_movie_no)+parseInt(10);  
  	if ((g_movie_position+g_constant_limit)<=g_total_movie_no)
	{
		if (((g_total_movie_no)%g_constant_limit)==1)
		{
			g_movie_position=parseInt(g_total_movie_no);
		}
		g_movie_limit=g_constant_limit;
	}else
	{
		g_movie_limit=g_total_movie_no%g_constant_limit;
		if (g_movie_limit==0) 
		{
			if (g_total_movie_no<g_movie_position)
			{
				g_movie_position=g_total_movie_no-g_constant_limit+1;
			}
			g_movie_limit=g_constant_limit;
		}
	}    	
   	call_get_movies(g_movie_position,g_movie_limit);
 
   } else if (response==2)
   {
   	alert("This function is only for Enterprise version");
//		callServer_Movie_Inquery();
   	//call_get_movies(g_movie_position,g_movie_limit);

   }else
    {
   	alert("Failed to Copy 10 Movies");
// 		g_Movie_Edit_Mode=1;
//		callServer_Movie_Inquery();
   	//call_get_movies(g_movie_position,g_movie_limit);

   }

	
    }
}
function call_Copy_10_Movies(movie_no)
{
	var movie_counter=10;
	
	cgi_url = "/server/copy_movie?token="+escape(g_token)+"&movie_no="+escape(movie_no)+ "&movie_counter=" + escape(movie_counter)+"&flag="+Math.random();
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Copy_10_Movies;
	 xmlHttp.send(null);
	
}
function old_call_Copy_10_Movies(movie_no)
{
	
	var HTML_str;
	//var ch_no;
	var len;
	var movie_refresh_button; 
	var movie_play_id;
	var movie_src_id; 
	var movie_src_name; 
	var movie_src_category; 
	var icon_path_name; 
	var movie_src_status; 
	var movie_src_duration;
	var movie_src_bitrate;
	
	var movie_src;
	var movie_name;
	var icon_path;
	var movie_category;
	var movie_status;
	var movie_duration;
	var movie_bitrate;
	
	var item_name;
	var i;
	var save_keyword="Save";
	var add_keyword="Add";
	var del_keyword="Del";
	var refresh_keyword="Refresh";
	var play_keyword="Play";
	var movie_active_no;
	var m;
	var k;
	var s;
	var movie_counter=10;

	
	var content = parent.document.getElementById("content");
 	var movie_menu_bar= document.getElementById("movie_menu_bar");

	g_content=content.innerHTML;
	movie_active_no=g_total_movie_no;
	movie_active_no+=movie_counter;
	
		HTML_Menu_Bar_Str='<td id=movie_menu_bar>';
	      if (g_show_free_version==1)
	      {
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Cut</font>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Copy</font>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Paste</font>'+'&nbsp&nbsp&nbsp';
	      }else
	      {
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_cut_selected_movie()>"+
		      '<font size="2" face="Arial">Cut</font></a>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_copy_selected_movie()>"+
		      '<font size="2" face="Arial">Copy</font></a>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_paste_selected_movie()>"+
		      '<font size="2" face="Arial">Paste</font></a>'+'&nbsp&nbsp&nbsp';
	      }


		HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_delete_selected_movie()>"+
		'<font size="2" face="Arial">Delete</font></a>'+'&nbsp&nbsp&nbsp';
		
		HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_refresh_selected_movie()>"+
		'<font size="2" face="Arial">Refresh</font></a>'+'&nbsp&nbsp&nbsp';
		
		HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=Preview_callServer_Movie_Inquery()>"+
		'<font size="2" face="Arial">Preview</font></a>'+'&nbsp&nbsp&nbsp';
		HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callServer_Movie_Inquery()>"+
		'<font size="2" face="Arial">Query</font></a>'+'&nbsp&nbsp&nbsp';
		
	      if (g_show_free_version==1)
	      {
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Import</font>'+'&nbsp&nbsp&nbsp';
	      }else
	      {
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_import_movie()>"+
		      '<font size="2" face="Arial">Import</font></a>'+'&nbsp&nbsp&nbsp';
	      }
		    
		//HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_export_movie_definition()>"+
		//'<font size="2" face="Arial">Export</font></a>'+'&nbsp&nbsp&nbsp';
		HTML_Menu_Bar_Str+='</td>';
	      
	  HTML_str= '<table border="0" cellpadding="0" cellspacing="10">'+
	  '<tr>'+
	      '<td width="20" align="center"> <input type="checkbox" name="checkallbox" id=checkallbox  onclick=set_all_checked(g_total_movie_no)></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2"></font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Movie Name</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Media Source</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Icon Path</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Category</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Duration(min.)</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Bitrate(Kbps)</font></td>'+
	      '<td width="80" align="center"><font face="Arial" size="2">Status</font></td>'+
 	 '</tr>'+'<tr><td  colspan="8"><hr size="1" color="#66FFFF"></td></tr>';
 	
	for (i=1,m=1;i<=movie_active_no;m++)
	{
	//	alert(i);
		movie_src_id="moviesrc"+m; 
		item_name=document.getElementById(movie_src_id);
		// alert(item_name.value);
		movie_src = item_name.value;
		
		movie_src_name="moviename"+m; 
		item_name=document.getElementById(movie_src_name);
		movie_name = item_name.value;

		icon_path_name="iconpath"+m; 
		item_name=document.getElementById(icon_path_name);
		icon_path = item_name.value;
		
		movie_src_category="moviecategory"+m; 
		item_name=document.getElementById(movie_src_category);
		movie_category = item_name.value;
		
		
		movie_src_status="moviestatus"+m; 
		item_name=document.getElementById(movie_src_status);
		movie_status = item_name.innerHTML;

		movie_src_duration="movieduration"+m; 
		item_name=document.getElementById(movie_src_duration);
		movie_duration = item_name.innerHTML;

		movie_src_bitrate="moviebitrate"+m; 
		item_name=document.getElementById(movie_src_bitrate);
		movie_bitrate = item_name.innerHTML;
		
		
//		alert(ch_status);
	
		HTML_str=HTML_str+'<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
	      '<td width="20" align="center">'+
  		' <input type="checkbox" name=checkbox'+i+
 		' id=checkbox'+i+'></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
	      '<td width="20" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="moviename"'+
 		' id=moviename'+i+
 		' size="20" value="'+
	 	movie_name+'"/'+
 		'</font></td>'+
	      '<td width="200" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="moviesrc"'+
 		' id=moviesrc'+i+
 		' size="35" value="'+
	 	movie_src+'"/'+
 		'</font></td>'+
 		'<td width="200" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="iconpath"'+
 		' id=iconpath'+i+
 		' size="35" value="'+
	 	icon_path+'"/'+
 		'</font></td>'+
	      '<td width="10" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="moviecategory"'+
 		' id=moviecategory'+i+
 		' size="10" value="'+
	 	movie_category+'"/'+
 		'</font></td>';
		HTML_str+='<td id=movieduration'+i+' width="100" align="center"><font face="Arial" size="2">'+movie_duration+'</font></td>';
		HTML_str+='<td id=moviebitrate'+i+' width="100" align="center"><font face="Arial" size="2">'+movie_bitrate+'</font></td>';


					
		if (m==(movie_no))
		{
			HTML_str+='<td id=moviestatus'+i+' width="100" align="center">'+movie_status+'</td>';
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Add_New_Movie("'+i+'")>'+
			' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Copy_10_Movies("'+i+'")>'+
			' <img border="0" id="copybutton" alt="Copy 10 Movies" title="Copy 10 Movies" src="add_multiple_icon.PNG"></a></td>';
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=callServer_Movie_Update("'+i+'")>'+
			' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Del_Movie("'+i+'")>'+
			' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';

			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Refresh_A_Movie("'+i+'")>'+
			' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a></td>';

			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Query_A_Movie_More("'+i+'")>'+
			' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>';

			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=play_movie("'+i+'")>'+
			' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
			HTML_str+='</tr>';

			i++;
			for (s=1;s<=movie_counter;s++)
			{
				HTML_str=HTML_str+'<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
			      '<td width="20" align="center">'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="checkbox" name=checkbox'+i+
		 		' id=checkbox'+i+'></td>'+
			      '<td width="100" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
			      '<td width="20" align="center">'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="moviename"'+
		 		' id=moviename'+i+
		 		' size="20" value="'+
			 	'('+s+')-'+movie_name+'"/'+
		 		'</font></td>'+
			      '<td width="200" align="center">'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="moviesrc"'+
		 		' id=moviesrc'+i+
		 		' size="35" value="'+
			 	movie_src+'"/'+
		 		'</font></td>'+
		 		'<td width="200" align="center">'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="iconpath"'+
		 		' id=iconpath'+i+
		 		' size="35" value="'+
			 	icon_path+'"/'+
		 		'</font></td>'+
			      '<td width="10" align="center">'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="moviecategory"'+
		 		' id=moviecategory'+i+
		 		' size="10" value="'+
			 	movie_category+'"/'+
		 		'</font></td>';
				HTML_str+='<td id=movieduration'+i+' width="100" align="center"><font face="Arial" size="2">'+movie_duration+'</font></td>';
				HTML_str+='<td id=moviebitrate'+i+' width="100" align="center"><font face="Arial" size="2">'+movie_bitrate+'</font></td>';
				
				HTML_str+='<td id=moviestatus'+i+' width="100" align="center"><font face="Arial" size="2">'+movie_status+'</font></td>';
		
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Add_New_Movie("'+i+'")>'+
				' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Copy_10_Movies("'+i+'")>'+
				' <img border="0" id="copybutton" alt="Copy 10 Movies" title="Copy 10 Movies" src="add_multiple_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=callServer_Movie_Update("'+i+'")>'+
				' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Del_Movie("'+i+'")>'+
				' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
				 HTML_str+='<td id=refreshmoviebutton'+i+' align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Refresh_A_Movie("'+i+'")>'+
				' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a></td>';
				 HTML_str+='<td id=morebutton'+i+' align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Query_A_Movie_More("'+i+'")>'+
				' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>';
				
				HTML_str+='<td align="left" id=movie_play_id'+i+'>';
				HTML_str+="<a href='javascript:void(0)'"+
				' onclick=play_movie("'+i+'")>'+
					' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
				i++;
			}	
	 		
		    
		      	      
		}else
		{
			HTML_str+='<td id=moviestatus'+i+' width="100" align="center"><font face="Arial" size="2">'+movie_status+'</font></td>';
	
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Add_New_Movie("'+i+'")>'+
			' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Copy_10_Movies("'+i+'")>'+
			' <img border="0" id="copybutton" alt="Copy 10 Movies" title="Copy 10 Movies" src="add_multiple_icon.PNG"></a></td>';
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=callServer_Movie_Update("'+i+'")>'+
			' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Del_Movie("'+i+'")>'+
			' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
			 HTML_str+='<td id=refreshmoviebutton'+i+' align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Refresh_A_Movie("'+i+'")>'+
			' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a></td>';

			 HTML_str+='<td id=morebutton'+i+' align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Query_A_Movie_More("'+i+'")>'+
			' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>';
			
			HTML_str+='<td align="left" id=movie_play_id'+i+'>';
			HTML_str+="<a href='javascript:void(0)'"+
			' onclick=play_movie("'+i+'")>'+
				' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
			i++;
	
			
		}
		HTML_str+='</tr>';
	      	     
	      	      	
	}
     
     
//	alert(HTML_str);
	content.innerHTML='<table width=99%><tr><td>'+
  	'<font size="2" face="Arial">Total: '+ movie_active_no+'</td></tr><tr>'+HTML_Menu_Bar_Str+
 	'<td><font face="Arial" size="2"> <input name="movie_search_field" id="movie_search_field" size="20"/></font><font face="Arial"><font size="2"></font>'+
	   '<input type="button" value="Search" onclick="javascript:search_movie_name();" name="search_movie_name" /></font>'+
	   '<input type="button" value="Go to" onclick="javascript:goto_line_no(2);" name="goto_movie_no" /></font>'+	   
	   '</td></tr>'+
	'</table>'+HTML_str+'</table>';
	//alert(content.innerHTML);
   //    content.innerHTML=HTML_str+'</table>';
//      alert(ch_list_info.innerHTML);
   cgi_url = "/server/copy_movie?token="+escape(g_token)+"&movie_no="+escape(movie_no)+ "&movie_counter=" + escape(movie_counter)+"&flag="+Math.random();
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Copy_10_Movies;
	 xmlHttp.send(null);
 
		
}


function Movie_update() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
  	Set_Movie_update();
  	g_Movie_Updated=1;
 //   	alert("Update Channel Sucessfully");
    } else
    {
   	alert("Failed to Update Movie");
    }
	g_item.value=g_temp;
	g_item.style.backgroundColor = "#ffffff";
    }
  //  setTimeout("callServer_CH_Inquery()",2000);
}

function callServer_Movie_Update(movie_no){
	
var movie_src_id="moviesrc"+movie_no; 
 var movie_src_name="moviename"+movie_no; 
 var icon_path_name="iconpath"+movie_no; 
 var movie_src_category="moviecategory"+movie_no; 
 var movie_src;
 var movie_name;
 var movie_category;
 var icon_path;
 var g_item_name;


 var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var g_ch_play_id;
	var pid;
	
 g_item=document.getElementById(movie_src_id);
 movie_src = g_item.value;
 if (movie_src.length==0)
 {
 	alert("Media Source is empty");
 	return;
 }
// alert(movie_src);
 g_item_name=document.getElementById(movie_src_name);
 movie_name = g_item_name.value;
 if (movie_name.length==0)
 {
 	alert("Movie Name is empty");
 	return;
 }
// alert(movie_name);
 g_item_name=document.getElementById(movie_src_category);
 movie_category = g_item_name.value;
// alert(movie_category);
  g_item_name=document.getElementById(icon_path_name);
 icon_path = g_item_name.value;
// alert(icon_path_name);
 
 	g_token=find_cookie_value("token");

 confirm_msg="Update Movie "+movie_no+" Information?";
 cgi_url = "/server/update_movie?token="+escape(g_token)+"&movie_no="+escape(movie_no)+
  "&movie_name=" + escape(movie_name)+ "&src=" + escape(movie_src)+ "&category=" + escape(movie_category)+ 
  "&img=" + escape(icon_path)+"&flag="+Math.random();
// alert(cgi_url);
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Movie_update;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	// g_item.value=g_item.value+" (updating...)";
	g_item.style.backgroundColor = "#ff0000";
 }
 

}
function Refresh_A_Movie() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    var movie_play_id="movie_play_id"+g_movie_no;
 var movie_status="moviestatus"+g_movie_no; 
  var movie_refresh_button="refreshmoviebutton"+g_movie_no; 
 
    if (response==1)
    {
 //   	alert("Refresh Channel Sucessfully");
	 g_status_item=document.getElementById(movie_status);
  
   		g_status_item.innerHTML='<font face="Arial" size="2">'+"ON"+'</font>';
     			
	g_item.style.backgroundColor = "#ffffff";

    } else if (response==2)
    {
   	alert("Already Refreshing Movie");
    }else if (response==3)
    {
   	alert("Movie is Refreshing.");
   	g_item.style.backgroundColor = "#ffffff";
    	
    }else if (response==0)
	{
		g_status_item.innerHTML='<font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font>';
		g_movie_play_id_item.innerHTML='<font face="Arial" size="2"></font>';
	g_item.style.backgroundColor = "#ffffff";
    }
    	
  	 g_item.value=g_movie_src;
  	 

  	 g_movie_play_id_item=document.getElementById(movie_play_id);
	g_movie_play_id_item.innerHTML="<a href='javascript:void(0)'"+
	      ' onclick=play_movie("'+g_movie_no+'")>'+
      	      ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a>';
   g_refresh_item=document.getElementById(movie_refresh_button);
 	g_refresh_item.innerHTML="<a href='javascript:void(0)'"+
	      ' onclick=call_Refresh_A_Movie("'+g_movie_no+'")>'+
      	      ' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a>';

  }
}

function call_Refresh_A_Movie(movie_no)
{
 var movie_src_id="moviesrc"+movie_no; 
 var movie_status="moviestatus"+movie_no; 
 var movie_refresh_button="refreshmoviebutton"+movie_no; 
 var movie_play_id="movie_play_id"+movie_no;

 var movie_src;
 var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	
 g_item=document.getElementById(movie_src_id);
g_status_item=document.getElementById(movie_status);
g_refresh_item=document.getElementById(movie_refresh_button);
g_movie_play_id_item=document.getElementById(movie_play_id);
	g_movie_no=movie_no;

 movie_src = g_item.value;
 g_movie_src=movie_src;
 	g_token=find_cookie_value("token");

 confirm_msg="Refresh Movie "+movie_no+" ?";
 cgi_url = "/server/refresh_a_movie?token="+escape(g_token)+"&movie_no="+escape(movie_no)+ "&flag="+Math.random();
 
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Refresh_A_Movie;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	g_item.style.backgroundColor = "#ff0000";
     	g_status_item.innerHTML='<font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font>';
     	g_refresh_item.innerHTML=' <img border="0" src="refreshing_icon.PNG">';
	//if (g_ch_play_id_item!=null) 
	g_movie_play_id_item.innerHTML='<font face="Arial" size="2"></font>';

 }
 

}
function After_Del_Movie(movie_no)
{
	
	var HTML_str;
	//var ch_no;
	var len;
	var movie_refresh_button; 
	var movie_play_id;
	var movie_src_id; 
	var movie_src_name; 
	var icon_path_name; 
	var movie_src_category; 
	var movie_src_status; 
	var movie_src_duration;
	var movie_src_bitrate;
	
	var movie_src;
	var movie_name;
	var movie_category;
	var icon_path;
	var movie_status;
	var movie_duration;
	var movie_bitrate;
	var item_name;
	var i;
	var save_keyword="Save";
	var add_keyword="Add";
	var del_keyword="Del";
	var refresh_keyword="Refresh";
	var play_keyword="Play";
	var ch_active_no;
	var m;
	var j;
	var k;

	
	var content = parent.document.getElementById("content");
 	var movie_menu_bar= document.getElementById("movie_menu_bar");

	
		HTML_Menu_Bar_Str='<td id=movie_menu_bar>';
	      if (g_show_free_version==1)
	      {
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Cut</font>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Copy</font>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Paste</font>'+'&nbsp&nbsp&nbsp';
	      }else
	      {
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_cut_selected_movie()>"+
		      '<font size="2" face="Arial">Cut</font></a>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_copy_selected_movie()>"+
		      '<font size="2" face="Arial">Copy</font></a>'+'&nbsp&nbsp&nbsp';
	
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_paste_selected_movie()>"+
		      '<font size="2" face="Arial">Paste</font></a>'+'&nbsp&nbsp&nbsp';
	      }


		HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_delete_selected_movie()>"+
		'<font size="2" face="Arial">Delete</font></a>'+'&nbsp&nbsp&nbsp';
		
		HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_refresh_selected_movie()>"+
		'<font size="2" face="Arial">Refresh</font></a>'+'&nbsp&nbsp&nbsp';
		
		HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=Preview_callServer_Movie_Inquery()>"+
		'<font size="2" face="Arial">Preview</font></a>'+'&nbsp&nbsp&nbsp';
		HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callServer_Movie_Inquery()>"+
		'<font size="2" face="Arial">Query</font></a>'+'&nbsp&nbsp&nbsp';
		
	      if (g_show_free_version==1)
	      {
		      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Import</font>'+'&nbsp&nbsp&nbsp';
	      }else
	      {
		      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_import_movie()>"+
		      '<font size="2" face="Arial">Import</font></a>'+'&nbsp&nbsp&nbsp';
	      }
		    
		//HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_export_movie_definition()>"+
		//'<font size="2" face="Arial">Export</font></a>'+'&nbsp&nbsp&nbsp';
		      HTML_Menu_Bar_Str+='</td>';
	      
	  HTML_str= '<table border="0" cellpadding="0" cellspacing="10">'+
	  '<tr>'+
	      '<td width="20" align="center"> <input type="checkbox" name="checkallbox" id=checkallbox  onclick=set_all_checked(g_total_movie_no)></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2"></font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Movie Name</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Media Source</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Icon Path</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Category</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Duration(min.)</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Bitrate(Kbps)</font></td>'+
	      '<td width="80" align="center"><font face="Arial" size="2">Status</font></td>'+
 	 '</tr>'+'<tr><td  colspan="9"><hr size="1" color="#66FFFF"></td></tr>';
  	g_total_movie_no--;
	movie_active_no=g_total_movie_no;
 	
	for (i=1,m=1;i<=g_total_movie_no;i++,m++)
	{
		//alert(i);
		if (m==(movie_no))
		{
			m++;	      	      
		}
		movie_src_id="moviesrc"+m; 
		item_name=document.getElementById(movie_src_id);
		// alert(item_name.value);
		movie_src = item_name.value;
		
		movie_src_name="moviename"+m; 
		item_name=document.getElementById(movie_src_name);
		movie_name = item_name.value;
		
		icon_path_name="iconpath"+m; 
		item_name=document.getElementById(icon_path_name);
		icon_path = item_name.value;

		movie_src_category="moviecategory"+m; 
		item_name=document.getElementById(movie_src_category);
		movie_category = item_name.value;
		
		
		movie_src_status="moviestatus"+m; 
		item_name=document.getElementById(movie_src_status);
		movie_status = item_name.innerHTML;
		
		movie_src_duration="movieduration"+m; 
		item_name=document.getElementById(movie_src_duration);
		movie_duration = item_name.innerHTML;

		movie_src_bitrate="moviebitrate"+m; 
		item_name=document.getElementById(movie_src_bitrate);
		movie_bitrate = item_name.innerHTML;
		
//		alert(movie_status);
	
		HTML_str=HTML_str+'<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
	      '<td width="20" align="center">'+
 		' <input type="checkbox" name=checkbox'+i+
 		' id=checkbox'+i+'></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
	      '<td width="20" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="moviename"'+
 		' id=moviename'+i+
 		' size="20" value="'+
	 	movie_name+'"/'+
 		'</font></td>'+
	      '<td width="200" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="moviesrc"'+
 		' id=moviesrc'+i+
 		' size="35" value="'+
	 	movie_src+'"/'+
 		'</font></td>'+
	      '<td width="200" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="iconpath"'+
 		' id=iconpath'+i+
 		' size="35" value="'+
	 	icon_path+'"/'+
 		'</font></td>'+
	      '<td width="10" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="moviecategory"'+
 		' id=moviecategory'+i+
 		' size="10" value="'+
	 	movie_category+'"/'+
 		'</font></td>';
 		//alert(HTML_str);
 		
	
		HTML_str+='<td id=movieduration'+i+' width="100" align="center"><font face="Arial" size="2">'+movie_duration+'</font></td>';
		HTML_str+='<td id=moviebitrate'+i+' width="100" align="center"><font face="Arial" size="2">'+movie_bitrate+'</font></td>';
		HTML_str+='<td id=moviestatus'+i+' width="100" align="center">'+movie_status+'</td>';		
		HTML_str+='<td align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=call_Add_New_Movie("'+i+'")>'+
		' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
		HTML_str+='<td align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=call_Copy_10_Movies("'+i+'")>'+
		' <img border="0" id="copybutton" alt="Copy 10 Movies" title="Copy 10 Movies" src="add_multiple_icon.PNG"></a></td>';
		HTML_str+='<td align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=callServer_Movie_Update("'+i+'")>'+
		' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
		HTML_str+='<td align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=call_Del_Movie("'+i+'")>'+
		' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
		HTML_str+='<td align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=call_Refresh_A_Movie("'+i+'")>'+
		' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a></td>';
		HTML_str+='<td align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=call_Query_A_Movie_More("'+i+'")>'+
		' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>';
		HTML_str+='<td align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=play_movie("'+i+'")>'+
		' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
		
		HTML_str+='</tr>';
	}
     	i=1;
	if (movie_active_no==0)
	{
		movie_src="";
		movie_name="";
		icon_path="";
		movie_category="";
		
	      HTML_str=HTML_str+'<tr>'+
	      '<td width="20" align="center">'+
		' <input type="checkbox" name=checkbox'+i+
		' id=checkbox'+i+'></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
	      '<td width="20" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="moviename"'+
		' id=moviename'+i+
		' size="20"/'+
		'</font></td>'+
	      '<td width="200" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="moviesrc"'+
		' id=moviesrc'+i+
		' size="35"/'+
		'</font></td>'+
		'<td width="200" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="iconpath"'+
		' id=iconpath'+i+
		' size="35"/'+
		'</font></td>'+
	      '<td width="10" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="moviecategory"'+
		' id=moviecategory'+i+
		' size="10"/'+
		'</font></td>';
		
	     
	
		HTML_str+='<td id=movieduration'+i+' width="100" align="center"><font face="Arial" size="2">'+'0.0'+'</font></td>';
		HTML_str+='<td id=moviebitrate'+i+' width="100" align="center"><font face="Arial" size="2">'+'0.0'+'</font></td>';
		HTML_str+='<td id=moviestatus'+i+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font></td>';
	      	HTML_str+='<td id=add_id_button align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_Movie("'+i+'")>'+
	      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>'+
	      	      
		      '<td id=save_id_button align="center">'+		      
		      "<a href='javascript:void(0)'"+
		      ' onclick=Cancel_Add_Movie()>'+
	      	      ' <img border="0" id="delbutton" alt="Canel" title="Cancel" src="del_icon.PNG"></a></td>'+
	
		      '<td id=del_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
		      '<td id=refresh_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
		      '<td id=more_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
		      '<td id=play_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>';
			        	
  	} 
     
//	alert(HTML_str);
 	content.innerHTML='<table width=99%><tr><td>'+
  	'<font size="2" face="Arial">Movie Total: '+ movie_active_no+'</td></tr><tr>'+HTML_Menu_Bar_Str+
 	'<td><font face="Arial" size="2"> <input name="movie_search_field" id="movie_search_field" size="20"/></font><font face="Arial"><font size="2"></font>'+
	   '<input type="button" value="Search" onclick="javascript:search_movie_name();" name="search_movie_name" /></font>'+
	   '<input type="button" value="Go to" onclick="javascript:goto_line_no(2);" name="goto_movie_no" /></font>'+	   
	   '</td></tr>'+
	'</table>'+HTML_str+'</table>';

//      alert(ch_list_info.innerHTML);
   
		
}
function Del_Movie() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
     	Set_Movie_update();
     	g_Movie_Updated=1;
  // 	alert("Sucessfully, Refresh Channels to active all channels");
    } else
    {
   	alert("Failed to Delete Movie");
    }
    
    	g_Movie_Edit_Mode=1;
    	After_Del_Movie(g_movie_no);
    	//callServer_CH_Inquery();
    }
}

function call_Del_Movie(movie_no)
{
 var movie_src_id="moviesrc"+movie_no; 
 var movie_src;
 var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	
 g_item=document.getElementById(movie_src_id);
 movie_src = g_item.value;
   	g_token=find_cookie_value("token");

 confirm_msg="Delete Movie "+movie_no+" Information?";
 cgi_url = "/server/del_movie?token="+escape(g_token)+"&movie_no="+escape(movie_no)+ "&flag="+Math.random();
 g_movie_no=movie_no;
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Del_Movie;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	 g_item.value=g_item.value+" (del...)";
	g_item.style.backgroundColor = "#ff0000";
 }
 

}
function ezserver_quit_channel(){
 
	//g_Channel_Edit_Mode=0;
	callServer_CH_Inquery();
/*	g_Channel_Edit_Mode=0;
	if (g_Channel_Updated==1)
	{
		callezserver_quit_updated_channel();
		g_Channel_Updated=0;
	}else
	{
		callServer_CH_Inquery();
	}
	*/
}


/*
function callezserver_quit_refresh_channel()
{
	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var confirm_msg;
  var ch_menu_bar= document.getElementById("ch_menu_bar");

	
      	g_token=find_cookie_value("token");

//	cgi_url = "/cgi-bin/cgi_ezserver?token="+escape(g_token)+"&refresh_channel"+"&flag="+Math.random();
	cgi_url = "/server/refresh_channel?token="+escape(g_token)+"&flag="+Math.random();
	
//	confirm_msg="Refresh Channles?";
//	if (confirm(confirm_msg))
//	{
	 	 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = ezserver_quit_refresh_channel;
		 xmlHttp.send(null);
	      ch_menu_bar.innerHTML='<font size="2" face="Arial">Refreshing</font>';

//	}
	

 	
} 
*/

function ezserver_refresh_movie(){
 
  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    var movie_menu_bar= document.getElementById("movie_menu_bar");
    if (response==1)
    {
  //  	alert("Refresh Movie Sucessfully");
    } else if (response==3)
    {
   	alert("Movies are Refreshing.");
    }else
    {
   	alert("Failed to Refresh Movie");
    }
    g_Movie_Edit_Mode=0;
 // setTimeout("callServer_CH_Inquery()",2000);
/*	if (response==1)
	{
	  setTimeout("Refresh_OK_Msg()",2000);
	}
*/
   callServer_Movie_Inquery();
   show_movie_menu_bar();   
 
 }
 
}

function Get_Movie_Statistics()
{
 
 if (xmlHttp.readyState == 4) {


	var response = xmlHttp.responseText.split("\r\n");
	var movie_no;
	var movie_name;
	var active_player_no=0;
	var i=0;
	var j=0;
	var total_movie_no=0;
	var HTML_str='';
	var strlength=0;
	var content = parent.document.getElementById("content");
	var menustr1;

	if (response==0)
	{
	 	alert("For Enterprise Version Only...");
	}else
	{
		content.innerHTML="";
		
	
		 HTML_str= '<table border="0" cellpadding="0" cellspacing="10">'+
		  '<tr>'+
		      '<td width="5%" align="center"><font face="Arial" size="2">No.</font></td>'+
		      '<td width="20%" align="center"><font face="Arial" size="2">Movie Name</font></td>'+
		      '<td width="15%" align="center"><font face="Arial" size="2">Active Player No.</font></td>'+
	 	 '</tr>'+'<tr><td  colspan="3"><hr size="1" color="#66FFFF"></td></tr>';
	 	
		while (1)
		{
	 	 	if (response[i]==0) break;
			//alert(response[i]);
		 	strlength=response[i].length;
	   	    	movie_no=response[i].slice(8,strlength);
	     	 	strlength=response[i+1].length;
	   	    	movie_name=response[i+1].slice(5,strlength);
	     	 	strlength=response[i+2].length;
	   	    	active_player_no=response[i+2].slice(10,strlength);
	   	    	
	  
	 		i=i+3;
			HTML_str=HTML_str+
			   '<tr>'+
			      '<td width="5%" align="center"><font face="Arial" size="2">'+movie_no+'</font></td>'+
			      '<td width="20%" align="center"><font face="Arial" size="2">'+unescape(movie_name)+'</font></td>'+
			      '<td width="15%" align="center"><font face="Arial" size="2">'+active_player_no+'</font></td></tr>';
			total_movie_no++;
	     }
	      //    content.innerHTML=HTML_str;
	      // alert(menu_main.innerHTML);
//	alert(HTML_str);      	      
	menustr1='<table width=100%><tr>';
	menustr1+='<td>'+
	'<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Channel" onclick="javascript:callServer_Get_Channel_Statistics();" />'+
	'&nbsp<Input type="button" value="Movie" disabled onclick="javascript:callServer_Get_Movie_Statistics();" />'+
	'&nbsp<Input type="button" value="Query" onclick="javascript:callServer_Get_Movie_Statistics();" />'+
	'<td width=8%>'+
	'<p style="margin-right: 5; margin-top: 10"><font size="2" face="Arial">Total: '+ total_movie_no+'</td>'+
 	'</tr></table>';
 	menustr1+='</td></tr>'+'</table>';
//	alert(menustr1);      	
	content.innerHTML=menustr1+HTML_str+'</table>';
	 	
 	}
 }

 
}
function callServer_Get_Movie_Statistics() {
	var content = parent.document.getElementById("content");
	var cgi_url;
	   	
	bSystem_Inquery_Panel=0; 
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
   	g_token=find_cookie_value("token");
	if (g_token!=0)
	{
		cgi_url = "/server/get_movie_statistics?token="+escape(g_token)+"&flag="+Math.random();
		content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Movie Statistics Loading...<p>';
		
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Get_Movie_Statistics;
		xmlHttp.send(null);
	}

}
function callezserver_refresh_movie()
{
	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var confirm_msg;
  var movie_menu_bar= document.getElementById("movie_menu_bar");

	
      	g_token=find_cookie_value("token");

	cgi_url = "/server/refresh_movie?token="+escape(g_token)+"&flag="+Math.random();
	
	//confirm_msg="Do you refresh all channles?";
	//if (confirm(confirm_msg))
	//{
	 	 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = ezserver_refresh_movie;
		 xmlHttp.send(null);
	      movie_menu_bar.innerHTML='<font size="2" face="Arial">Refreshing</font>';

	//}
	

 	
}
function ezserver_refresh_channel(){
 
  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    var ch_menu_bar= document.getElementById("ch_menu_bar");
    if (response==1)
    {
  //  	alert("Refresh Channel Sucessfully");
    } else if (response==3)
    {
   	alert("Channels are Refreshing.");
    }else
    {
   	alert("Failed to Refresh Channel");
    }
  //  g_Channel_Edit_Mode=0;
 // setTimeout("callServer_CH_Inquery()",2000);
/*	if (response==1)
	{
	  setTimeout("Refresh_OK_Msg()",2000);
	}
*/
   callServer_CH_Inquery();
   show_channel_menu_bar();   
     
   }
 
}
function callezserver_refresh_channel()
{
	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var confirm_msg;
  var ch_menu_bar= document.getElementById("ch_menu_bar");

	
      	g_token=find_cookie_value("token");

//	cgi_url = "/cgi-bin/cgi_ezserver?token="+escape(g_token)+"&refresh_channel"+"&flag="+Math.random();
	cgi_url = "/server/refresh_channel?token="+escape(g_token)+"&flag="+Math.random();

	confirm_msg="Refresh all channels?";
	if (confirm(confirm_msg))
	{
		bQuery_Channel_Status=0;
	 	 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = ezserver_refresh_channel;
		 xmlHttp.send(null);
	      ch_menu_bar.innerHTML='<font size="2" face="Arial">Refreshing</font>';

	}
	

 	
}   

function Add_Channel() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
   if (response==1)
    {
    	//window.close();
  	g_Channel_Updated=1;
   	Set_Channel_update();
     	g_total_ch_no++;
 	if ((g_channel_position+g_constant_limit)<=g_total_ch_no)
	{
		if (((g_total_ch_no)%g_constant_limit)==1)
		{
			g_channel_position=parseInt(g_total_ch_no);
		}
		g_channel_limit=g_constant_limit;
	}else
	{
		g_channel_limit=g_total_ch_no%g_constant_limit;
		if (g_channel_limit==0) 
		{
			if (g_total_ch_no<g_channel_position)
			{
				g_channel_position=g_total_ch_no-g_constant_limit+1;
			}
			g_channel_limit=g_constant_limit;
		}
	}
	call_get_channels(g_channel_position,g_channel_limit);
   } else
    {
   	alert("Failed to Add Channel");
   }

    }
}
function call_Add_Channel()
{

 var ch_src_id="chsrc"; 
 var ch_icon_id="chicon"; 
 var ch_src_name="chname"; 
  var ch_src_category="chcategory"; 
var ch_src_type="chtype"; 
var ch_src_no="chno"; 
 var ch_src;
 var ch_icon;
 var ch_category;
 var ch_name;
 var ch_type;
 var ch_no;
 var g_item_name;

var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	
	bQuery_Channel_Status=0;
 
  g_item_name=document.getElementById(ch_src_no);
 	ch_no = g_item_name.value;
/*
alert(g_total_ch_no);
	if (ch_no>(g_total_ch_no+1))
	{
		alert("Channel No. is invaild.");
		return;
	}
	*/
 g_item=document.getElementById(ch_src_id);
 ch_src = g_item.value;
 if (ch_src.length==0)
 {
 	alert("Media Source is empty");
 	return;
 }
 g_item_name=document.getElementById(ch_icon_id);
 ch_icon = g_item_name.value;


 g_item_name=document.getElementById(ch_src_category);
 ch_category = g_item_name.value;

 g_item_name=document.getElementById(ch_src_name);
 ch_name = g_item_name.value;
 if (ch_name.length==0)
 {
 	alert("Channel Name is empty");
 	return;
 }
 g_item_name=document.getElementById(ch_src_type);
 ch_type = g_item_name.value;



   	g_token=find_cookie_value("token");
g_ch_no=ch_no;
 confirm_msg="Add Channel "+ch_no+" Information?";
// cgi_url = "/server/channel_list_add?token="+escape(g_token)+"&ch_no="+escape(ch_no)+ "&ch_name=" + escape(ch_name)+ "&src=" + escape(ch_src)+ "&category=" + escape(ch_category)+ "&type=" + escape(ch_type)+"&flag="+Math.random();
 cgi_url = "/server/add_channel?token="+escape(g_token)+"&ch_no="+escape(ch_no)+ "&ch_name=" + escape(ch_name)+ "&src=" + escape(ch_src)+ "&category=" + escape(ch_category)+ "&icon=" + escape(ch_icon)+ "&type=" + escape(ch_type)+"&flag="+Math.random();

	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Add_Channel;
	 xmlHttp.send(null);
	// g_temp=g_item.value;
	// g_item.value=g_item.value+" (adding...)";
	// g_item.style.backgroundColor = "#ff0000";

}
function Copy_10_Channels() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
 	var dvr_folder_on=0;

  if (response==1)
    {
	g_total_ch_no=parseInt(g_total_ch_no)+parseInt(10);  
	if ((g_channel_position+g_constant_limit)<=g_total_ch_no)
	{
		if (((g_total_ch_no)%g_constant_limit)==1)
		{
			g_channel_position=parseInt(g_total_ch_no);
		}
		g_channel_limit=g_constant_limit;
	}else
	{
		g_channel_limit=g_total_ch_no%g_constant_limit;
		if (g_channel_limit==0) 
		{
			if (g_total_ch_no<g_channel_position)
			{
				g_channel_position=g_total_ch_no-g_constant_limit+1;
			}
			g_channel_limit=g_constant_limit;
		}
	}
	call_get_channels(g_channel_position,g_channel_limit);
	      	      
   } else if (response==2)
   {
   	alert("This function is only for Enterprise version");
		//callServer_CH_Inquery();
		//call_get_channels(g_channel_position,g_channel_limit);
   }else
    {
   	alert("Failed to Add 10 Channels");
 		//g_Channel_Edit_Mode=1;
		//callServer_CH_Inquery();
		//call_get_channels(g_channel_position,g_channel_limit);
   }

    }
    bQuery_Channel_Status=1;
}
/*
function call_Copy_10_Channels(ch_no)
{
// var g_item_name;

var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var ch_counter=10; 

g_ch_no=ch_no;
 //confirm_msg="Copy 10 Channels?";
// cgi_url = "/server/channel_list_add?token="+escape(g_token)+"&ch_no="+escape(ch_no)+ "&ch_name=" + escape(ch_name)+ "&src=" + escape(ch_src)+ "&category=" + escape(ch_category)+ "&type=" + escape(ch_type)+"&flag="+Math.random();
 cgi_url = "/server/copy_channel?token="+escape(g_token)+"&ch_no="+escape(ch_no)+"&ch_counter="+escape(ch_counter)+"&flag="+Math.random();
 //alert(cgi_url);
// if (confirm(confirm_msg))
 //{
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Copy_10_Channels;
	 xmlHttp.send(null);
	 //g_temp=g_item.value;
	// g_item.value=g_item.value+" (adding...)";
	 //g_item.style.backgroundColor = "#ff0000";
 //}


}
*/
function call_Copy_10_Channels(ch_no)
{
	var ch_counter=10;
	
	cgi_url = "/server/copy_channel?token="+escape(g_token)+"&ch_no="+escape(ch_no)+"&ch_counter="+escape(ch_counter)+"&flag="+Math.random();
	xmlHttp.open("GET", cgi_url, true);
	xmlHttp.onreadystatechange = Copy_10_Channels;
	xmlHttp.send(null);
	
}
function old_call_Copy_10_Channels(ch_no)
{
	
	var HTML_str;
	//var ch_no;
	var len;
	var ch_refresh_button; 
	var ch_play_id;
	var ch_src_id; 
	var ch_icon_id; 
	var ch_src_name; 
	var ch_src_category; 
	var ch_src_type; 
	var ch_src_status; 
	var ch_src_bitrate; 
	
	var ch_src;
	var ch_icon;
	var ch_name;
	var ch_category;
	var ch_type;
	var ch_status;
	var ch_bitrate;
	var item_name;
	var i;
	var save_keyword="Save";
	var add_keyword="Add";
	var del_keyword="Del";
	var refresh_keyword="Refresh";
	var more_keyword="More";
	var play_keyword="Play";
	var ch_active_no;
	var m;
	var k;
	var dvr_folder_on=0;
	var HTML_str1;
	var ch_counter=10;
	var s;

	
	var content = parent.document.getElementById("content");
 	var ch_menu_bar= document.getElementById("ch_menu_bar");
//	alert(ch_no);
  //	bQuery_Channel_Status=0;
	g_content=content.innerHTML;
	ch_active_no=g_total_ch_no;
	ch_active_no+=ch_counter;
	
	bQuery_Channel_Status=0;
	
      HTML_Menu_Bar_Str='<td id=ch_menu_bar>';
      if (g_show_free_version==1)
      {
	      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Cut</font>'+'&nbsp&nbsp&nbsp';

 	      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Copy</font>'+'&nbsp&nbsp&nbsp';
 
	      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Paste</font>'+'&nbsp&nbsp&nbsp';
      }else
      {
	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_cut_selected_channel()>"+
	      '<font size="2" face="Arial">Cut</font></a>'+'&nbsp&nbsp&nbsp';

 	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_copy_selected_channel()>"+
	      '<font size="2" face="Arial">Copy</font></a>'+'&nbsp&nbsp&nbsp';
 
	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_paste_selected_channel()>"+
	      '<font size="2" face="Arial">Paste</font></a>'+'&nbsp&nbsp&nbsp';

      }
      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_delete_selected_channel()>"+
      '<font size="2" face="Arial">Delete</font></a>'+'&nbsp&nbsp&nbsp';

      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_refresh_selected_channel()>"+
      '<font size="2" face="Arial">Refresh</font></a>'+'&nbsp&nbsp&nbsp';
 
      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=Preview_callServer_CH_Inquery()>"+
      '<font size="2" face="Arial">Preview</font></a>'+'&nbsp&nbsp&nbsp';
      
  
      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callServer_CH_Inquery()>"+
      '<font size="2" face="Arial">Auto Query</font></a>'+'&nbsp&nbsp&nbsp';

      if (g_show_free_version==1)
      {
          HTML_Menu_Bar_Str+='<font size="2" face="Arial">Import</font>'+'&nbsp&nbsp&nbsp';
      }else
      {
          HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_import_channel()>"+
	      '<font size="2" face="Arial">Import</font></a>'+'&nbsp&nbsp&nbsp';
      }
      
      //HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_export_channel_definition()>"+
      //'<font size="2" face="Arial">Export</font></a>'+'&nbsp&nbsp&nbsp';

      HTML_Menu_Bar_Str+='</td>';
	      
	  HTML_str= '<table border="0" cellpadding="0" cellspacing="10">'+
	  '<tr>'+
	      '<td width="20" align="center"> <input type="checkbox" name="checkallbox" id=checkallbox  onclick=set_all_checked(g_total_ch_no)></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2"></font></td>'+
	      '<td width="100" align="center"><font face="Arial" size="2">Channel Name</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Media Source</font></td>'+
	      '<td width="140" align="center"><font face="Arial" size="2">Icon Path</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Category</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Type</font></td>'+
	      '<td width="120" align="center"><font face="Arial" size="2">Status(Uptime)</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Bitrate(Kbps)</font></td>'+
 	 '</tr>'+'<tr><td  colspan="9"><hr size="1" color="#66FFFF"></td></tr>';
 	
	for (i=1,m=1;i<=ch_active_no;m++)
	{
		ch_src_id="chsrc"+m; 
		item_name=document.getElementById(ch_src_id);
		// alert(item_name.value);
		if (item_name)
		{
			ch_src = item_name.value;
	
			ch_icon_id="chicon"+m; 
			item_name=document.getElementById(ch_icon_id);
			ch_icon = item_name.value;
			
			ch_src_name="chname"+m; 
			item_name=document.getElementById(ch_src_name);
			ch_name = item_name.value;
			
			ch_src_category="chcategory"+m; 
			item_name=document.getElementById(ch_src_category);
			ch_category = item_name.value;
			
			ch_src_type="chtype"+m; 
			item_name=document.getElementById(ch_src_type);
			ch_type = item_name.value;
			
			ch_src_status="chstatus"+m; 
			item_name=document.getElementById(ch_src_status);
			ch_status = item_name.innerHTML;
	
			ch_src_bitrate="chbitrate"+m; 
			item_name=document.getElementById(ch_src_bitrate);
			ch_bitrate = item_name.innerHTML;
			
			
		    	if (ch_type.search("dvr")>=0)
	   	    	{
	   	    		dvr_folder_on=1;
	   	    	}else
	   	    	{
	   	    		dvr_folder_on=0;
	   	    	}
	 
	//		alert(ch_status);
		
			HTML_str=HTML_str+'<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
		      '<td width="20" align="center">'+
	 		' <input type="checkbox" name=checkbox'+i+
	 		' id=checkbox'+i+'></td>'+
	 	       '<td width="20" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="chname"'+
	 		' id=chname'+i+
	 		' size="14" value="'+
		 	ch_name+'"/'+
	 		'</font></td>'+
		      '<td width="200" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="chsrc"'+
	 		' id=chsrc'+i+
	 		' size="30" value="'+
		 	ch_src+'"/'+
	 		'</font></td>'+
		      '<td width="140" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="chicon"'+
	 		' id=chicon'+i+
	 		' size="20" value="'+
		 	ch_icon+'"/'+
	 		'</font></td>'+
		      '<td width="10" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="chcategory"'+
	 		' id=chcategory'+i+
	 		' size="10" value="'+
		 	ch_category+'"/'+
	 		'</font></td>'+
	 		
		      '<td width="60" align="center">'+
	 		' <font face="Arial" size="2">'+
			' <select size="1" name="chtype" id=chtype'+i+'>';
	 		
			//alert(ch_type);
			if (ch_type.search("live")>=0)
			{
				HTML_str+='<option selected="selected" value="live">'+"Live"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}else if (ch_type.search("delay")>=0)
			{
				for (k=0;k<g_delaytime_array.length;k++)
				{
					
					if (ch_type.search(g_delayvalue_array[k])==0)
					{
						break;
					}
				}
				//alert(k);
				HTML_str+='<option value="live">'+"Live"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					if (j!=k)
					{
						HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					}else 
					{
						HTML_str+='<option selected="selected" value="'+g_delayvalue_array[k]+'">'+g_delaytime_array[k]+'</option>';
					}
											
				}
			}else if (ch_type.search("dvr")>=0)
			{
				HTML_str+='<option selected="selected" value="dvr">'+"DVR"+'</option>'+
				'<option value="live">'+"Live"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}else if (ch_type.search("inactive")>=0)
			{
				HTML_str+='<option selected="selected" value="inactive">'+"Inactive"+'</option>'+
				'<option value="live">'+"Live"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>';
				//'<option value="hls">'+"HLS"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}else if (ch_type.search("movie")>=0)
			{
				HTML_str+='<option selected="selected" value="movie">'+"Movie"+'</option>'+
				'<option value="live">'+"Live"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>'+
				//'<option value="hls">'+"HLS"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}
			/*
			else if (ch_type.search("hls")>=0)
			{
				HTML_str+='<option selected="selected" value="hls">'+"HLS"+'</option>'+
				'<option value="live">'+"Live"+'</option>'+
				'<option value="dvr">'+"DVR"+'</option>'+
				'<option value="movie">'+"Movie"+'</option>'+
				'<option value="inactive">'+"Inactive"+'</option>';
				for (j=0;j<g_delaytime_array.length;j++)
				{
					
					HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
					
				}
			}
			*/
			HTML_str+='</select></font></td>';
						
			if (m==(ch_no))
			{
				HTML_str+='<td id=chstatus'+i+' width="100" align="center">'+ch_status+'</td>';
				HTML_str+='<td id=chbitrate'+i+' width="100" align="center">'+ch_bitrate+'</td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Add_New_Channel("'+i+'")>'+
				' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Copy_10_Channels("'+i+'")>'+
				' <img border="0" id="copybutton" alt="Copy 10 channels" title="Copy 10 channels" src="add_multiple_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=callServer_CH_Update("'+i+'")>'+
				' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Del_Channel("'+i+'")>'+
				' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=callServer_Query_One_Channel_Status("'+i+'")>'+
				' <img border="0" id="querybutton" alt="Query" title="Query" src="query_icon.PNG"></a></td>';
				HTML_str+='<td id=refreshchannelbutton'+i+' align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Refresh_A_Channel("'+i+'")>'+
				' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Get_Server_IP("'+i+'")>'+
				' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>';
				
				HTML_str+='<td id=ch_play_id'+i+' align="center">';
				if (ch_src.search("rtmp")==0)
				{
				    HTML_str+="<a href='javascript:void(0)'"+
				    ' onclick=play_channel("'+i+'",'+'"flv"'+','+dvr_folder_on+')>'+
				    ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
				}
				else
				{
				    HTML_str+="<a href='javascript:void(0)'"+
				    ' onclick=play_channel("'+i+'",'+'"ch"'+','+dvr_folder_on+')>'+
				    ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
				}				
				HTML_str+='</tr>';
	
				i++;	
				for (s=1;s<=ch_counter;s++)
				{
					ch_status="Connecting";
					ch_bitrate=0;
					
					HTML_str=HTML_str+'<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
				      '<td align="center">'+
			 		' <input type="checkbox" name=checkbox'+i+
			 		' id=checkbox'+i+'></td>'+
				      '<td width="20" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
				      '<td width="20" align="center">'+
			 		' <font face="Arial" size="2">'+
			 		' <input type="text" name="chname"'+
			 		' id=chname'+i+
			 		' size="14" value="'+
				 	'('+s+')-'+ch_name+'"/'+
			 		'</font></td>'+
				      '<td width="200" align="center">'+
			 		' <font face="Arial" size="2">'+
			 		' <input type="text" name="chsrc"'+
			 		' id=chsrc'+i+
			 		' size="30" value="'+
				 	ch_src+'"/'+
			 		'</font></td>'+
				      '<td width="140" align="center">'+
			 		' <font face="Arial" size="2">'+
			 		' <input type="text" name="chicon"'+
			 		' id=chicon'+i+
			 		' size="20" value="'+
				 	ch_icon+'"/'+
			 		'</font></td>'+
				      '<td width="10" align="center">'+
			 		' <font face="Arial" size="2">'+
			 		' <input type="text" name="chcategory"'+
			 		' id=chcategory'+i+
			 		' size="10" value="'+
				 	ch_category+'"/'+
			 		'</font></td>'+
			 		
				      '<td width="60" align="center">'+
			 		' <font face="Arial" size="2">'+
					' <select size="1" name="chtype" id=chtype'+i+'>';
			 		
					//alert(ch_type);
					if (ch_type.search("live")>=0)
					{
						HTML_str+='<option selected="selected" value="live">'+"Live"+'</option>'+
						'<option value="movie">'+"Movie"+'</option>'+
						'<option value="dvr">'+"DVR"+'</option>'+
						//'<option value="hls">'+"HLS"+'</option>'+
						'<option value="inactive">'+"Inactive"+'</option>';
						for (j=0;j<g_delaytime_array.length;j++)
						{
							
							HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
							
						}
					}else if (ch_type.search("delay")>=0)
					{
						for (k=0;k<g_delaytime_array.length;k++)
						{
							
							if (ch_type.search(g_delayvalue_array[k])==0)
							{
								break;
							}
						}
						//alert(k);
						HTML_str+='<option value="live">'+"Live"+'</option>'+
						'<option value="movie">'+"Movie"+'</option>'+
						'<option value="dvr">'+"DVR"+'</option>'+
						//'<option value="hls">'+"HLS"+'</option>'+
						'<option value="inactive">'+"Inactive"+'</option>';
						for (j=0;j<g_delaytime_array.length;j++)
						{
							if (j!=k)
							{
								HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
							}else 
							{
								HTML_str+='<option selected="selected" value="'+g_delayvalue_array[k]+'">'+g_delaytime_array[k]+'</option>';
							}
													
						}
					}else if (ch_type.search("dvr")>=0)
					{
						HTML_str+='<option selected="selected" value="dvr">'+"DVR"+'</option>'+
						'<option value="live">'+"Live"+'</option>'+
						'<option value="movie">'+"Movie"+'</option>'+
						//'<option value="hls">'+"HLS"+'</option>'+
						'<option value="inactive">'+"Inactive"+'</option>';
						for (j=0;j<g_delaytime_array.length;j++)
						{
							
							HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
							
						}
					}else if (ch_type.search("inactive")>=0)
					{
						HTML_str+='<option selected="selected" value="inactive">'+"Inactive"+'</option>'+
						'<option value="live">'+"Live"+'</option>'+
						'<option value="movie">'+"Movie"+'</option>'+
						'<option value="dvr">'+"DVR"+'</option>';
						//'<option value="hls">'+"HLS"+'</option>';
						for (j=0;j<g_delaytime_array.length;j++)
						{
							
							HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
							
						}
					}else if (ch_type.search("movie")>=0)
					{
						HTML_str+='<option selected="selected" value="movie">'+"Movie"+'</option>'+
						'<option value="live">'+"Live"+'</option>'+
						'<option value="dvr">'+"DVR"+'</option>'+
						//'<option value="hls">'+"HLS"+'</option>'+
						'<option value="inactive">'+"Inactive"+'</option>';
						for (j=0;j<g_delaytime_array.length;j++)
						{
							
							HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
							
						}
					}
					/* 
					else if (ch_type.search("hls")>=0)
					{
						HTML_str+='<option selected="selected" value="hls">'+"HLS"+'</option>'+
						'<option value="live">'+"Live"+'</option>'+
						'<option value="dvr">'+"DVR"+'</option>'+
						'<option value="movie">'+"Movie"+'</option>'+
						'<option value="inactive">'+"Inactive"+'</option>';
						for (j=0;j<g_delaytime_array.length;j++)
						{
							
							HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
							
						}
					}
					*/
					HTML_str+='</select></font></td>';
					HTML_str+='<td id=chstatus'+i+' width="100" align="center"><font face="Arial" size="2">'+ch_status+'</font></td>';
					HTML_str+='<td id=chbitrate'+i+' width="100" align="center"><font face="Arial" size="2">'+ch_bitrate+'</font></td>';
					HTML_str+='<td align="center">'+
					"<a href='javascript:void(0)'"+
					' onclick=call_Add_New_Channel("'+i+'")>'+
					' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
					HTML_str+='<td align="center">'+
					"<a href='javascript:void(0)'"+
					' onclick=call_Copy_10_Channels("'+i+'")>'+
					' <img border="0" id="copybutton" alt="Copy 10 channels" title="Copy 10 channels" src="add_multiple_icon.PNG"></a></td>';
					HTML_str+='<td align="center">'+
					"<a href='javascript:void(0)'"+
					' onclick=callServer_CH_Update("'+i+'")>'+
					' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
					HTML_str+='<td align="center">'+
					"<a href='javascript:void(0)'"+
					' onclick=call_Del_Channel("'+i+'")>'+
					' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
					
					HTML_str+='<td align="center">'+
					"<a href='javascript:void(0)'"+
					' onclick=callServer_Query_One_Channel_Status("'+i+'")>'+
					' <img border="0" id="querybutton" alt="Query" title="Query" src="query_icon.PNG"></a></td>';
			
					HTML_str+='<td id=refreshchannelbutton'+i+' align="center">'+
					"<a href='javascript:void(0)'"+
					' onclick=call_Refresh_A_Channel("'+i+'")>'+
					' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a></td>';
					HTML_str+='<td align="center">'+
					"<a href='javascript:void(0)'"+
					' onclick=call_Get_Server_IP("'+i+'")>'+
					' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>';
					
					HTML_str+='<td id=ch_play_id'+i+' align="center">';
					if (ch_src.search("rtmp")==0)
					{
					    HTML_str+="<a href='javascript:void(0)'"+
					    ' onclick=play_channel("'+i+'",'+'"flv"'+','+dvr_folder_on+')>'+
					    ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
					}
					else
					{
					    HTML_str+="<a href='javascript:void(0)'"+
					    ' onclick=play_channel("'+i+'",'+'"ch"'+','+dvr_folder_on+')>'+
					    ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
					}				
						
					
					HTML_str+='</tr>';
					i++;
				}
				
			
			}else
			{		
				HTML_str+='<td id=chstatus'+i+' width="100" align="center"><font face="Arial" size="2">'+ch_status+'</font></td>';
				HTML_str+='<td id=chbitrate'+i+' width="100" align="center"><font face="Arial" size="2">'+ch_bitrate+'</font></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Add_New_Channel("'+i+'")>'+
				' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Copy_10_Channels("'+i+'")>'+
				' <img border="0" id="copybutton" alt="Copy 10 channels" title="Copy 10 channels" src="add_multiple_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=callServer_CH_Update("'+i+'")>'+
				' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Del_Channel("'+i+'")>'+
				' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
				
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=callServer_Query_One_Channel_Status("'+i+'")>'+
				' <img border="0" id="querybutton" alt="Query" title="Query" src="query_icon.PNG"></a></td>';
		
				HTML_str+='<td id=refreshchannelbutton'+i+' align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Refresh_A_Channel("'+i+'")>'+
				' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a></td>';
				HTML_str+='<td align="center">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Get_Server_IP("'+i+'")>'+
				' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>';
				
				HTML_str+='<td id=ch_play_id'+i+' align="center">';
				if (ch_src.search("rtmp")==0)
				{
				    HTML_str+="<a href='javascript:void(0)'"+
				    ' onclick=play_channel("'+i+'",'+'"flv"'+','+dvr_folder_on+')>'+
				    ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
				}
				else
				{
				    HTML_str+="<a href='javascript:void(0)'"+
				    ' onclick=play_channel("'+i+'",'+'"ch"'+','+dvr_folder_on+')>'+
				    ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
				}				
					
				
				HTML_str+='</tr>';
				i++;
			}
		}
	      	     
	      	      	
	}
     
     
//	alert(HTML_str);
	content.innerHTML='<table width=99%><tr><td>'+
  	'<font size="2" face="Arial">Channel Total: '+ch_active_no+'</td></tr><tr>'+HTML_Menu_Bar_Str+
 	'<td> <font face="Arial" size="2"> <input name="channel_search_field" id="channel_search_field" size="20"/></font><font face="Arial"><font size="2"></font>'+
	   '<input type="button" value="Search" onclick="javascript:search_channel_name();" name="search_channel_name" /></font>'+
	   '<input type="button" value="Go to" onclick="javascript:goto_line_no(1);" name="goto_channel_no" /></font>'+	   
	   '</td></tr>'+'</table>'+HTML_str+'</table>';
	'</table>'+HTML_str+'</table>';

   //    content.innerHTML=HTML_str+'</table>';
//      alert(ch_list_info.innerHTML);
   	 cgi_url = "/server/copy_channel?token="+escape(g_token)+"&ch_no="+escape(ch_no)+"&ch_counter="+escape(ch_counter)+"&flag="+Math.random();
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Copy_10_Channels;
	 xmlHttp.send(null);

		
}

function CH_update() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    var play_id_button="ch_play_id"+g_ch_no;
    var ch_src_id="chsrc"+g_ch_no; 
  var ch_src_type="chtype"+g_ch_no; 
 var ch_src;
  var ch_type;
 var g_item_name;
	var dvr_folder_on=0;
	
    if (response==1)
    {
  	Set_Channel_update();
  	g_Channel_Updated=1;
  	
  	
	/*item_play=document.getElementById(play_id_button);

	 g_item=document.getElementById(ch_src_id);
	 ch_src = g_item.value;
	 g_item_name=document.getElementById(ch_src_type);
	 ch_type = g_item_name.value;
    	if (ch_type.search("dvr")>=0)
    	{
    		dvr_folder_on=1;
    	}else
    	{
    		dvr_folder_on=0;
    	}	      	      
	if (ch_src.search("rtmp")==0)
	{
		item_play.innerHTML='<td align="center" id=ch_play_id'+g_ch_no+'>'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=play_channel("'+g_ch_no+'",'+'"flv"'+','+dvr_folder_on+')>'+		      
	      	      ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
	}
	else
	{
		item_play.innerHTML='<td align="center" id=ch_play_id'+g_ch_no+'>'+
		      "<a href='javascript:void(0)'"+
		    ' onclick=play_channel("'+g_ch_no+'",'+'"ch"'+','+dvr_folder_on+')>'+	      
	      	      ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
	}	
	*/	

 //   	alert("Update Channel Sucessfully");
    } else
    {
   	alert("Failed to Update Channel");
    }
	g_item.value=g_temp;
	g_item.style.backgroundColor = "#ffffff";
    }
    bQuery_Channel_Status=1;
	if (g_Query_Channel_Status_timer==0)
	{
		g_Query_Channel_Status_timer=setInterval(function(){callServer_Get_Channels_Status_Timer()},10*1000);
		// alert(g_Query_Channel_Status_timer);
	} 
  //  setTimeout("callServer_CH_Inquery()",2000);
}

function callServer_CH_Update(ch_no){
	
var ch_src_id="chsrc"+ch_no; 
var ch_icon_id="chicon"+ch_no; 
 var ch_src_name="chname"+ch_no; 
 var ch_src_category="chcategory"+ch_no; 
 var ch_src_type="chtype"+ch_no; 
 var ch_src;
 var ch_icon;
 var ch_name;
 var ch_category;
 var ch_type;
 var g_item_name;


 var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var g_ch_play_id;
	var pid;
	
 bQuery_Channel_Status=0;	
 g_ch_no=ch_no;
 g_item=document.getElementById(ch_src_id);
 ch_src = g_item.value;
 if (ch_src.length==0)
 {
 	alert("Media Source is empty");
 	return;
 }
 g_item_name=document.getElementById(ch_icon_id);
 ch_icon = g_item_name.value;

 g_item_name=document.getElementById(ch_src_name);
 ch_name = g_item_name.value;
 if (ch_name.length==0)
 {
 	alert("Channel Name is empty");
 	return;
 }
// alert(ch_name);
 g_item_name=document.getElementById(ch_src_category);
 ch_category = g_item_name.value;
  g_item_name=document.getElementById(ch_src_type);
 ch_type = g_item_name.value;
 	g_token=find_cookie_value("token");

 confirm_msg="Update Channel "+ch_no+" Information?";
// cgi_url = "/server/channel_list_update?token="+escape(g_token)+"&ch_no="+escape(ch_no)+ "&ch_name=" + escape(ch_name)+ "&src=" + escape(ch_src)+ "&category=" + escape(ch_category)+ "&type=" + escape(ch_type)+"&flag="+Math.random();
// cgi_url = "/server/channel_list_update?token="+escape(g_token)+"&ch_no="+escape(ch_no)+ "&ch_name=" + escape(ch_name)+ "&src=" + ch_src+ "&category=" + escape(ch_category)+ "&type=" + escape(ch_type)+"&flag="+Math.random();
cgi_url = "/server/update_channel?token="+escape(g_token)+"&ch_no="+escape(ch_no)+ "&ch_name=" + escape(ch_name)+ "&src=" + ch_src+ "&category=" + escape(ch_category)+ "&icon=" + ch_icon+ "&type=" + escape(ch_type)+"&flag="+Math.random();

 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = CH_update;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	// g_item.value=g_item.value+" (updating...)";
	g_item.style.backgroundColor = "#ff0000";
 }
 

}
function Refresh_A_Channel() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    var ch_play_id="ch_play_id"+g_ch_no;
 var ch_status="chstatus"+g_ch_no; 
 var ch_bitrate="chbitrate"+g_ch_no; 
 var ch_chtype="chtype"+g_ch_no; 
 var ch_type_value;
 var dvr_folder_on;
 var bitrate_item;
  
    if ((response==1) || (response==2))
    {
 //   	alert("Refresh Channel Sucessfully");
	 g_ch_play_id_item=document.getElementById(ch_play_id);
	 g_status_item=document.getElementById(ch_status);
	 bitrate_item=document.getElementById(ch_bitrate);
	 g_chtype_item=document.getElementById(ch_chtype);
	 ch_type_value=g_chtype_item.value;
 
     	if (ch_type_value.search("inactive")==0)
     	{
   		g_status_item.innerHTML='<font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font>';
   		//if (g_ch_play_id_item!=null)
   		//{
		g_ch_play_id_item.innerHTML='<font face="Arial" size="2"></font>';
		//}
		
	}else
	{
    		if (response==1)
    		{
    			g_status_item.innerHTML='<font face="Arial" size="2">'+"ON"+'</font>';
    		}else if (response==2)
		{
    			g_status_item.innerHTML='<font face="Arial" size="2" color="#0000FF">'+"Connecting"+'</font>';
		}
    			
		bitrate_item.innerHTML='<font face="Arial" size="2">'+"0"+'</font>';
    		
		if (ch_type_value.search("dvr")>=0)
	    	{
	    		dvr_folder_on=1;
	    	}else
	    	{
	    		dvr_folder_on=0;
	    	}	
	    	//if (g_ch_play_id_item!=null)
	        //{	
		if (g_ch_src.search("rtmp")==0)
		{
		    	 g_ch_play_id_item.innerHTML="<a href='javascript:void(0)'"+
		    ' onclick=play_channel("'+g_ch_no+'",'+'"flv"'+','+dvr_folder_on+')>'+
		    ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a>';
		}
		else
		{
		    g_ch_play_id_item.innerHTML="<a href='javascript:void(0)'"+
		    ' onclick=play_channel("'+g_ch_no+'",'+'"ch"'+','+dvr_folder_on+')>'+
		    ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a>';
		}
		//}
	}
     			
	g_item.style.backgroundColor = "#ffffff";

    }else if (response==3)
    {
   	alert("The Channel is connecting.");
   	g_item.style.backgroundColor = "#ffffff";
    	
    }else if (response==4)
    {
   	alert("Channels are Refreshing.");
   	g_item.style.backgroundColor = "#ffffff";
    	
    }else if (response==0)
	{
	alert("Failed to Refresh Channel");
	g_item.style.backgroundColor = "#ffffff";
	}
    	
  	 g_item.value=g_ch_src;
  	 
/*     	g_refresh_item.innerHTML='<td id=refreshchannelbutton'+g_ch_no+' width="50" align="center">'+
	      "<a href='javascript:void(0)'"+
	      ' onclick=call_Refresh_A_Channel("'+g_ch_no+'")>'+
      	      ' <font face="Arial" size="2">Refresh</font></a></td>';
  */
     	g_refresh_item.innerHTML="<a href='javascript:void(0)'"+
	      ' onclick=call_Refresh_A_Channel("'+g_ch_no+'")>'+
      	      ' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a>';

  }
}

function call_Refresh_A_Channel(ch_no)
{
 var ch_src_id="chsrc"+ch_no; 
 var ch_status="chstatus"+ch_no; 
 var ch_refresh_button="refreshchannelbutton"+ch_no; 
 var ch_play_id="ch_play_id"+ch_no;

 var ch_src;
 var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	
//	bQuery_Channel_Status=0;
 g_item=document.getElementById(ch_src_id);
g_status_item=document.getElementById(ch_status);
g_refresh_item=document.getElementById(ch_refresh_button);
g_ch_play_id_item=document.getElementById(ch_play_id);
	g_ch_no=ch_no;

 ch_src = g_item.value;
 g_ch_src=ch_src;
 	g_token=find_cookie_value("token");

 confirm_msg="Refresh Channel "+ch_no+" ?";
 cgi_url = "/server/refresh_a_channel?token="+escape(g_token)+"&ch_no="+escape(ch_no)+ "&flag="+Math.random();
 
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Refresh_A_Channel;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	g_item.style.backgroundColor = "#ff0000";
//     	g_status_item.innerHTML='<td id=chstatus'+ch_no+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font></td>';
  //   	g_refresh_item.innerHTML='<td id=refreshchannelbutton'+ch_no+' width="50" align="center">'+' <font face="Arial" size="2">Waiting</font></td>';
     	g_status_item.innerHTML='<font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font>';
     	g_refresh_item.innerHTML=' <img border="0" alt="Refresh" src="refreshing_icon.PNG">';
	//if (g_ch_play_id_item!=null) 
	g_ch_play_id_item.innerHTML='<font face="Arial" size="2"></font>';

 }
 

}
function After_Del_Channel(ch_no)
{
	
	var HTML_str;
	//var ch_no;
	var len;
	var ch_refresh_button; 
	var ch_play_id;
	var ch_src_id; 
	var ch_src_icon; 
	var ch_src_name; 
	var ch_src_category; 
	var ch_src_type; 
	var ch_src_status; 
	
	var ch_src;
	var ch_icon;
	var ch_name;
	var ch_category;
	var ch_type;
	var ch_status;
	var item_name;
	var i;
	var save_keyword="Save";
	var add_keyword="Add";
	var del_keyword="Del";
	var refresh_keyword="Refresh";
	var more_keyword="More";
	var play_keyword="Play";
	var ch_active_no;
	var m;
	var j;
	var k;
	var dvr_folder_on=0;

	
	var content = parent.document.getElementById("content");
 	var ch_menu_bar= document.getElementById("ch_menu_bar");

	
      HTML_Menu_Bar_Str='<td id=ch_menu_bar>';
      
      if (g_show_free_version==1)
      {
	      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Cut</font>'+'&nbsp&nbsp&nbsp';

 	      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Copy</font>'+'&nbsp&nbsp&nbsp';
 
	      HTML_Menu_Bar_Str+='<font size="2" face="Arial">Paste</font>'+'&nbsp&nbsp&nbsp';
      }else
      {
	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_cut_selected_channel()>"+
	      '<font size="2" face="Arial">Cut</font></a>'+'&nbsp&nbsp&nbsp';

 	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_copy_selected_channel()>"+
	      '<font size="2" face="Arial">Copy</font></a>'+'&nbsp&nbsp&nbsp';
 
	      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_paste_selected_channel()>"+
	      '<font size="2" face="Arial">Paste</font></a>'+'&nbsp&nbsp&nbsp';

      }
     HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_delete_selected_channel()>"+
      '<font size="2" face="Arial">Delete</font></a>'+'&nbsp&nbsp&nbsp';

      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callezserver_refresh_selected_channel()>"+
      '<font size="2" face="Arial">Refresh</font></a>'+'&nbsp&nbsp&nbsp';
      
      
      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=Preview_callServer_CH_Inquery()>"+
      '<font size="2" face="Arial">Preview</font></a>'+'&nbsp&nbsp&nbsp';

      HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=callServer_CH_Inquery()>"+
      '<font size="2" face="Arial">Auto Query</font></a>'+'&nbsp&nbsp&nbsp';

      if (g_show_free_version==1)
      {
          HTML_Menu_Bar_Str+='<font size="2" face="Arial">Import</font>'+'&nbsp&nbsp&nbsp';
      }else
      {
          HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_import_channel()>"+
	      '<font size="2" face="Arial">Import</font></a>'+'&nbsp&nbsp&nbsp';
      }
      
      //HTML_Menu_Bar_Str+="<a href='javascript:void(0)' onclick=call_export_channel_definition()>"+
      //'<font size="2" face="Arial">Export</font></a>'+'&nbsp&nbsp&nbsp';

      HTML_Menu_Bar_Str+='</td>';
	      
	  HTML_str= '<table border="0" cellpadding="0" cellspacing="10">'+
	  '<tr>'+
	      '<td width="20" align="center"> <input type="checkbox" name="checkallbox" id=checkallbox  onclick=set_all_checked(g_total_ch_no)></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2"></font></td>'+
	      '<td width="100" align="center"><font face="Arial" size="2">Channel Name</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Media Source</font></td>'+
	      '<td width="140" align="center"><font face="Arial" size="2">Icon Path</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Category</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Type</font></td>'+
	      '<td width="120" align="center"><font face="Arial" size="2">Status(Uptime)</font></td>'+
	      '<td width="60" align="center"><font face="Arial" size="2">Bitrate(Kbps)</font></td>'+
 	 '</tr>'+'<tr><td  colspan="9"><hr size="1" color="#66FFFF"></td></tr>';
 	g_total_ch_no--;
 	ch_active_no=g_total_ch_no;
 	
	for (i=1,m=1;i<=g_total_ch_no;i++,m++)
	{
		//alert(i);
		if (m==(ch_no))
		{
			m++;	      	      
		}
		ch_src_id="chsrc"+m; 
		item_name=document.getElementById(ch_src_id);
		// alert(item_name.value);
		ch_src = item_name.value;
		
		ch_src_name="chname"+m; 
		item_name=document.getElementById(ch_src_name);
		ch_name = item_name.value;
		
		ch_src_icon="chicon"+m; 
		item_name=document.getElementById(ch_src_icon);
		ch_icon = item_name.value;

		ch_src_category="chcategory"+m; 
		item_name=document.getElementById(ch_src_category);
		ch_category = item_name.value;
		
		ch_src_type="chtype"+m; 
		item_name=document.getElementById(ch_src_type);
		ch_type = item_name.value;
		
		ch_src_status="chstatus"+m; 
		item_name=document.getElementById(ch_src_status);
		ch_status = item_name.innerHTML;

		ch_src_bitrate="chbitrate"+m; 
		item_name=document.getElementById(ch_src_bitrate);
		ch_bitrate = item_name.innerHTML;
		
		if (ch_type.search("dvr")>=0)
   	    	{
   	    		dvr_folder_on=1;
   	    	}else
   	    	{
   	    		dvr_folder_on=0;
   	    	}
//		alert(ch_status);
	
		HTML_str=HTML_str+'<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
	      '<td width="20" align="center">'+
 		' <input type="checkbox" name=checkbox'+i+
 		' id=checkbox'+i+'></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
	      '<td width="20" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="chname"'+
 		' id=chname'+i+
 		' size="14" value="'+
	 	ch_name+'"/'+
 		'</font></td>'+
	      '<td width="200" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="chsrc"'+
 		' id=chsrc'+i+
 		' size="30" value="'+
	 	ch_src+'"/'+
 		'</font></td>'+
	      '<td width="140" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="chicon"'+
 		' id=chicon'+i+
 		' size="20" value="'+
	 	ch_icon+'"/'+
 		'</font></td>'+
	      '<td width="10" align="center">'+
 		' <font face="Arial" size="2">'+
 		' <input type="text" name="chcategory"'+
 		' id=chcategory'+i+
 		' size="10" value="'+
	 	ch_category+'"/'+
 		'</font></td>'+
 		
	      '<td width="60" align="center">'+
 		' <font face="Arial" size="2">'+
		' <select size="1" name="chtype" id=chtype'+i+'>';
 		
		HTML_str+='<option selected="selected" value="live">'+"Live"+'</option>'+
		'<option value="movie">'+"Movie"+'</option>'+
		'<option value="dvr">'+"DVR"+'</option>'+
		//'<option value="hls">'+"HLS"+'</option>'+
		'<option value="inactive">'+"Inactive"+'</option>';
		for (j=0;j<g_delaytime_array.length;j++)
		{
			
			HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
			
		}
		HTML_str+='</select></font></td>';
		
		HTML_str+='<td id=chstatus'+i+' width="100" align="center">'+ch_status+'</td>';
		HTML_str+='<td id=chbitrate'+i+' width="100" align="center">'+ch_bitrate+'</td>';
		
		HTML_str+='<td align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=call_Add_New_Channel("'+i+'")>'+
		' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';
		HTML_str+='<td align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=call_Copy_10_Channels("'+i+'")>'+
		' <img border="0" id="copybutton" alt="Copy 10 channels" title="Copy 10 channels" src="add_multiple_icon.PNG"></a></td>';
		HTML_str+='<td align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=callServer_CH_Update("'+i+'")>'+
		' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
		HTML_str+='<td align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=call_Del_Channel("'+i+'")>'+
		' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
		
		HTML_str+='<td align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=callServer_Query_One_Channel_Status("'+i+'")>'+
		' <img border="0" id="querybutton" alt="Query" title="Query" src="query_icon.PNG"></a></td>';

		HTML_str+='<td id=refreshchannelbutton'+i+' align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=call_Refresh_A_Channel("'+i+'")>'+
		' <img border="0" id="refreshbutton" alt="Refresh" title="Refresh" src="refresh_icon.PNG"></a></td>';
		HTML_str+='<td align="center">'+
		"<a href='javascript:void(0)'"+
		' onclick=call_Get_Server_IP("'+i+'")>'+
		' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>';
		
		HTML_str+='<td id=ch_play_id'+i+' align="center">';
		if (ch_src.search("rtmp")==0)
		{
		    HTML_str+="<a href='javascript:void(0)'"+
		    ' onclick=play_channel("'+i+'",'+'"flv"'+','+dvr_folder_on+')>'+
		    ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
		}
		else
		{
		    HTML_str+="<a href='javascript:void(0)'"+
		    ' onclick=play_channel("'+i+'",'+'"ch"'+','+dvr_folder_on+')>'+
		    ' <img border="0" id="playbutton" alt="Play" title="Play" src="play_icon.PNG"></a></td>';
		}				

		HTML_str+='</tr>';
	}

	if (ch_active_no==0)
	{	
		i=1;
		ch_src="";
		ch_icon="";
		ch_name="";
		ch_category="";
		ch_status="";
		ch_bitrate="";
	      HTML_str=HTML_str+'<tr>'+
	      '<td width="20" align="center">'+
		' <input type="checkbox" name=checkbox'+i+
		' id=checkbox'+i+'></td>'+
	      '<td width="20" align="center"><font face="Arial" size="2">'+i+'</font></td>'+
	      '<td width="20" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="chname"'+
		' id=chname'+i+
		' size="14"/'+
		'</font></td>'+
	      '<td width="200" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="chsrc"'+
		' id=chsrc'+i+
		' size="30"/'+
		'</font></td>'+
	      '<td width="140" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="chicon"'+
		' id=chicon'+i+
		' size="20"/'+
		'</font></td>'+
	      '<td width="10" align="center">'+
		' <font face="Arial" size="2">'+
		' <input type="text" name="chcategory"'+
		' id=chcategory'+i+
		' size="10"/'+
		'</font></td>'+
		
	      '<td width="60" align="center">'+
		' <font face="Arial" size="2">'+
		' <select size="1" name="chtype" id=chtype'+i+'>';
		
		HTML_str+='<option selected="selected" value="live">'+"Live"+'</option>'+
		'<option value="movie">'+"Movie"+'</option>'+
		'<option value="dvr">'+"DVR"+'</option>'+
		//'<option value="hls">'+"HLS"+'</option>'+
		'<option value="inactive">'+"Inactive"+'</option>';
		for (j=0;j<g_delaytime_array.length;j++)
		{
			
			HTML_str+='<option value="'+g_delayvalue_array[j]+'">'+g_delaytime_array[j]+'</option>';
			
		}
		HTML_str+='</select></font></td>';
	
		HTML_str+='<td id=chstatus'+i+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+"<b>OFF</b>"+'</font></td>';
		HTML_str+='<td id=chbitrate'+i+' width="100" align="center"><font face="Arial" size="2" color="#FF0000">'+ch_bitrate+'</font></td>';
	      	HTML_str+=
	      		'<td id=add_id_button align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_Channel("'+i+'")>'+
	      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>'+
	      	
	      		'<td id=copy_id_button align="center">'+
		       ' <font face="Arial" size="2"></font></a></td>'+
	      	      
		      '<td id=save_id_button align="center">'+		      
		      "<a href='javascript:void(0)'"+
		      ' onclick=Cancel_Add_Channel()>'+
	      	      ' <img border="0" id="delbutton" alt="Cancel" title="Cancel" src="del_icon.PNG"></a></td>'+
	      	      
		      '<td id=del_id_button  align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
	
		      
		      '<td id=querystatusbutton align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
	
		      '<td id=refreshchannelbutton'+i+' align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
		      
		      '<td id=more_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
		      
		      '<td align="center" id=ch_play_id'+i+' align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>';

	}     
    
//	alert(HTML_str);
/*	content.innerHTML='<table width=99%><tr><td width=20%>'+
  	'<font size="2" face="Arial">Channel Total: '+ ch_active_no+'</td>'+HTML_Menu_Bar_Str+
 	'</tr></table>'+HTML_str+'</table>';
*/
	content.innerHTML='<table width=99%><tr><td>'+
  	'<font size="2" face="Arial">Channel Total: '+ch_active_no+'</td></tr><tr>'+HTML_Menu_Bar_Str+
 	'<td> <font face="Arial" size="2"> <input name="channel_search_field" id="channel_search_field" size="20"/></font><font face="Arial"><font size="2"></font>'+
	   '<input type="button" value="Search" onclick="javascript:search_channel_name();" name="search_channel_name" /></font>'+
	   '<input type="button" value="Go to" onclick="javascript:goto_line_no(1);" name="goto_channel_no" /></font>'+	 
	   '</td></tr>'+'</table>'+HTML_str+'</table>';

   //    content.innerHTML=HTML_str+'</table>';
//      alert(ch_list_info.innerHTML);
   
		
}
function Del_Channel() {

  if (xmlHttp.readyState == 4) {
	var response = xmlHttp.responseText;
	if (response==1)
	{
		Set_Channel_update();
		g_Channel_Updated=1;
		After_Del_Channel(g_ch_no);
	// 	alert("Sucessfully, Refresh Channels to active all channels");
	} else if (response==2)
	{
		alert("The previous channel is deleting.");		
	}else
	{
		alert("Failed to Delete Channel");
	}
	
	//g_Channel_Edit_Mode=1;
	//callServer_CH_Inquery();
    }
}

function call_Del_Channel(ch_no)
{
 var ch_src_id="chsrc"+ch_no; 
 var ch_src;
 var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;

/*	if (g_total_ch_no==1)
	{
		alert("Warning: EZserver needs at least one channel.");
		return;
	}
	*/
bQuery_Channel_Status=0;
	
 g_item=document.getElementById(ch_src_id);
 ch_src = g_item.value;
   	g_token=find_cookie_value("token");

 confirm_msg="Delete Channel "+ch_no+" Information?";
 cgi_url = "/server/del_channel?token="+escape(g_token)+"&ch_no="+escape(ch_no)+ "&flag="+Math.random();
 g_ch_no=ch_no;
 if (confirm(confirm_msg))
 {
 	
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Del_Channel;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	 g_item.value=g_item.value+" (del...)";
	g_item.style.backgroundColor = "#ff0000";
 }


}

// Edit Commands
function get_checked_string(total_no,backgrond_type)
{
	var i=0;
	var chcheckbox;
	var checkboj;
	var checkedstring="";
	var emptyitem=1;
	var ch_src_name; 
	var movie_name;
	var username;
	g_selectedcounter=0;
 	for (i=1;i<=total_no;i++)
	{
		chcheckbox="checkbox"+i;
//		alert(i);
		checkboj=document.getElementById(chcheckbox);
//		alert(checkboj);
		if (checkboj)
		{
			if (checkboj.checked==true)
			{
				checkedstring=checkedstring+'1';
				g_selectedcounter++;
				//alert(checkedstring);
				emptyitem=0;
				if (backgrond_type==1)
				{
					ch_src_name="chname"+i; 
					g_item=document.getElementById(ch_src_name);
					g_item.style.backgroundColor = "#ff0000";
				}else if (backgrond_type==2)
				{
					movie_name="moviename"+i; 
					g_item=document.getElementById(movie_name);
					g_item.style.backgroundColor = "#ff0000";
				}else if (backgrond_type==3)
				{
					username="username"+i; 
					g_item=document.getElementById(username);
					g_item.style.backgroundColor = "#ff0000";
				}
					
			}else
			{
				checkedstring=checkedstring+'0';
			}
		}
			
		
	}
	if (emptyitem==1)
	{
		alert("No selected item");
		checkedstring='0';
	}
	
	return checkedstring;
	

}
function set_all_checked(total_no)
{
	var i;
	var chcheckbox;
	var checkboj;
	var checkflag;
	if (total_no>0)
	{
		checkboj=document.getElementById("checkallbox");
		checkflag=checkboj.checked;
		for (i=1;i<=total_no;i++)
		{
			chcheckbox="checkbox"+i;
			checkboj=document.getElementById(chcheckbox);
			if (checkboj)
			{
				checkboj.checked=checkflag;
			}
		}
	}	
}

function get_checked_no(total_no)
{
	var i=0;
	var chcheckbox;
	var checkboj;
	var emptyitem=1;
	var selectedcount=0;
 	var selectedno=0;
    
	if (total_no<=0)
	{
		return 0;
	}else
	{
		for (i=1;i<=total_no;i++)
		{
			chcheckbox="checkbox"+i;
		//		alert(i);
			checkboj=document.getElementById(chcheckbox);
		//		alert(checkboj);
			if (checkboj)
			{
				if (checkboj.checked==true)
				{
					emptyitem=0;
					selectedcount++;
					selectedno=i;
				}
			}		
		}
		if (emptyitem==1)
		{
			alert("No selected item");
			return 0;
		}else
		{
			if (selectedcount>1)
			{
				alert("Please select only one item.")
				return 0;
			}else
				{
					return selectedno;
				}			
		}
	}
}
function clear_checked_string(total_no)
{
	var i;
	var chcheckbox;
	var checkboj;
	var checkflag;
	checkboj=document.getElementById("checkallbox");
	checkboj.checked=false;
	if (total_no>0)
	{
		for (i=1;i<=total_no;i++)
		{
			chcheckbox="checkbox"+i;
			checkboj=document.getElementById(chcheckbox);
			if (checkboj)
			{
				checkboj.checked=false;
			}
		}
	}	
}
function clear_checked_red_background(total_no,backgrond_type)
{
	var i;
	var chcheckbox;
	var checkboj;
	var checkflag;
	var ch_src_name; 
	var movie_name;
	var username;
	checkboj=document.getElementById("checkallbox");
	if (total_no>0)
	{
		for (i=1;i<=total_no;i++)
		{
			chcheckbox="checkbox"+i;
			checkboj=document.getElementById(chcheckbox);
			if (checkboj)
			{
				if (backgrond_type==1)
				{
					ch_src_name="chname"+i; 
					g_item=document.getElementById(ch_src_name);
					g_item.style.backgroundColor = "#ffffff";
				}else if (backgrond_type==2)
				{
					movie_name="moviename"+i; 
					g_item=document.getElementById(movie_name);
					g_item.style.backgroundColor = "#ffffff";
				}else if (backgrond_type==3)
				{
					username="username"+i; 
					g_item=document.getElementById(username);
					g_item.style.backgroundColor = "#ffffff";
				}
			}
					
		}
	}	
}
// Channel Edit Commands
function callezserver_copy_selected_channel()
{
	g_checkedstring=get_checked_string(g_total_ch_no,1);
	g_copy_paste=1;
	clear_checked_string(g_total_ch_no);

}

function callezserver_cut_selected_channel()
{
	g_checkedstring=get_checked_string(g_total_ch_no,1);
	if (g_checkedstring=='0')
	{
	}else
	{
		g_copy_paste=2;
		clear_checked_string(g_total_ch_no);
		g_channel_selected_position=g_channel_position;
		document.getElementById("channel_cut_field").value="  Paste  ";
		document.getElementById("channel_cut_field").onclick= function(){javscript: callezserver_paste_selected_channel();};
	}
}
function paste_selected_channel() {

  if (xmlHttp.readyState == 4) {
	var response = xmlHttp.responseText;
	if (response==1)
	{
		if (g_copy_paste==1)
		{
			g_total_ch_no+=g_selectedcounter;
		}
	}else
	{
		alert("Failed to Paste Channel");
	}
	
	g_copy_paste=0;
	g_checkedstring='0'
	call_get_channels(g_channel_position,g_channel_limit);

    }
}

function callezserver_paste_selected_channel()
{
	var cgi_url;
	var content = parent.document.getElementById("content");
	var destination_no;


	bQuery_Channel_Status=0;
	destination_no=get_checked_no(g_total_ch_no);
	clear_checked_string(g_total_ch_no);
	if (destination_no==0)
	{
		confirm_msg="Contine to Select Position?";
		if (confirm(confirm_msg))
		{
		}else
		{
			clear_checked_red_background(g_total_ch_no,1);
			document.getElementById("channel_cut_field").value="  Cut  ";
			document.getElementById("channel_cut_field").onclick= function(){javscript: callezserver_cut_selected_channel();};

		}
	}else
	{
		g_token=find_cookie_value("token");
		if (g_copy_paste==1)
		{
			cgi_url = "/server/copy_paste_multiple_channels?token="+escape(g_token)+"&destination_no="+destination_no+"&position="+g_channel_selected_position+"&bitstring="+g_checkedstring+ "&flag="+Math.random();
		}else if (g_copy_paste==2)
		{
			cgi_url = "/server/cut_paste_multiple_channels?token="+escape(g_token)+"&destination_no="+destination_no+"&position="+g_channel_selected_position+"&bitstring="+g_checkedstring+ "&flag="+Math.random();
		}else
		{
			return;
		}
			
		content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Paseting Selected Channels...<p>';
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = paste_selected_channel;
		xmlHttp.send(null);
	}

}
function delete_selected_channel() {

  /*
  if (xmlHttp.readyState == 4) {
	var response = xmlHttp.responseText;
	if (response==1)
	{
	//	Set_Channel_update();
	//	g_Channel_Updated=1;
	//	After_Del_Channel(g_ch_no);
	// 	alert("Sucessfully, Refresh Channels to active all channels");
		g_total_ch_no-=g_selectedcounter;
	}else
	{
		alert("Failed to Delete Channel");
	}
	
	//g_Channel_Edit_Mode=1;
	callServer_CH_Inquery();
    }
    */
     if (xmlHttp.readyState == 4) {
	var response = xmlHttp.responseText;
	if (response==1)
	{
		g_total_ch_no-=g_selectedcounter;
		if (g_total_ch_no<0) g_total_ch_no=0;
		if ((g_channel_position+g_constant_limit)<=g_total_ch_no)
		{
			g_channel_limit=g_constant_limit;
		}else
		{
			g_channel_limit=g_total_ch_no%g_constant_limit;
			if (g_channel_limit==0)
			{
				if (g_total_ch_no>0)
				{
					if (g_total_ch_no<g_channel_position)
					{
						g_channel_position=g_total_ch_no-g_constant_limit+1;
					}
					g_channel_limit=g_constant_limit;
				}else
				{
					g_channel_limit=0;
				}
			}
		}

	}else
	{
		alert("Failed to Delete Users");
	}
	
	call_get_channels(g_channel_position,g_channel_limit);
    }
}

function callezserver_delete_selected_channel()
{
	var confirm_msg;
	var cgi_url;
	var cookieStr;
	var checkedstring;
	var content = parent.document.getElementById("content");


	bQuery_Channel_Status=0;
	
   	g_token=find_cookie_value("token");
   	
	checkedstring=get_checked_string(g_total_ch_no,0);
//alert(checkedstring);
 if (checkedstring=='0')
 {
 }else
	{

	 confirm_msg="Delete Selected Channels?";
	 cgi_url = "/server/del_multiple_channels?token="+escape(g_token)+"&position="+g_channel_position+"&bitstring="+checkedstring+ "&flag="+Math.random();
	 if (confirm(confirm_msg))
	 {
	 	
	 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Deleting Selected Channels...<p>';
		
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = delete_selected_channel;
		 xmlHttp.send(null);
		// g_temp=g_item.value;
		// g_item.value=g_item.value+" (del...)";
		//g_item.style.backgroundColor = "#ff0000";
	 }
 }


}
function refresh_selected_channel() {

  if (xmlHttp.readyState == 4) {
	var response = xmlHttp.responseText;
	if (response==1)
	{
	//	Set_Channel_update();
	//	g_Channel_Updated=1;
	//	After_Del_Channel(g_ch_no);
		clear_checked_string(g_total_ch_no);
	 	alert("Sucessfully refresh channels");
	}else
	{
		alert("Failed to Delete Channel");
	}
	bQuery_Channel_Status=1;
	if (g_Query_Channel_Status_timer==0)
	{
		g_Query_Channel_Status_timer=setInterval(function(){callServer_Get_Channels_Status_Timer()},10*1000);
		// alert(g_Query_Channel_Status_timer);

 
	}
	//g_Channel_Edit_Mode=1;
	//callServer_CH_Inquery();
    }
}

function callezserver_refresh_selected_channel()
{
	var confirm_msg;
	var cgi_url;
	var cookieStr;
	var checkedstring;

	bQuery_Channel_Status=0;
	
   	g_token=find_cookie_value("token");
checkedstring=get_checked_string(g_total_ch_no,0);
//alert(checkedstring);
 if (checkedstring=='0')
 {
 }else
{
		
	 confirm_msg="Refresh Selected Channels?";
	 cgi_url = "/server/refresh_multiple_channels?token="+escape(g_token)+"&position="+g_channel_position+"&bitstring="+checkedstring+ "&flag="+Math.random();
	 if (confirm(confirm_msg))
	 {
	 	
		
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = refresh_selected_channel;
		 xmlHttp.send(null);
		// g_temp=g_item.value;
		// g_item.value=g_item.value+" (del...)";
		//g_item.style.backgroundColor = "#ff0000";
	 }
 }


}
// Movie Edit Command
function callezserver_copy_selected_movie()
{
	g_checkedstring=get_checked_string(g_total_movie_no,2);
	g_copy_paste=1;
	clear_checked_string(g_total_movie_no);

}

function callezserver_cut_selected_movie()
{
	g_checkedstring=get_checked_string(g_total_movie_no,2);
	if (g_checkedstring=='0')
	{
	}else
	{
		g_copy_paste=2;
		clear_checked_string(g_total_movie_no);
		g_movie_selected_position=g_movie_position;
		document.getElementById("movie_cut_field").value="  Paste  ";
		document.getElementById("movie_cut_field").onclick= function(){javscript: callezserver_paste_selected_movie();};
	}
}
function paste_selected_movie() {

  if (xmlHttp.readyState == 4) {
	var response = xmlHttp.responseText;
	if (response==1)
	{
		if (g_copy_paste==1)
		{
			g_total_movie_no+=g_selectedcounter;
		}
	}else
	{
		alert("Failed to Paste Channel");
	}
	
	g_copy_paste=0;
	g_checkedstring='0'
	call_get_movies(g_movie_position,g_movie_limit);
    }
}

function callezserver_paste_selected_movie()
{
	var cgi_url;
	var content = parent.document.getElementById("content");
	var destination_no;


	destination_no=get_checked_no(g_total_movie_no);
	clear_checked_string(g_total_movie_no);
	if (destination_no==0)
	{
		confirm_msg="Contine to Select Position?";
		if (confirm(confirm_msg))
		{
		}else
		{
			clear_checked_red_background(g_total_movie_no,1);
			document.getElementById("movie_cut_field").value="  Cut  ";
			document.getElementById("movie_cut_field").onclick= function(){javscript: callezserver_cut_selected_movie();};
		}

	}else
	{
		g_token=find_cookie_value("token");
		if (g_copy_paste==1)
		{
			cgi_url = "/server/copy_paste_multiple_movies?token="+escape(g_token)+"&destination_no="+destination_no+"&position="+g_movie_selected_position+"&bitstring="+g_checkedstring+ "&flag="+Math.random();
		}else if (g_copy_paste==2)
		{
			cgi_url = "/server/cut_paste_multiple_movies?token="+escape(g_token)+"&destination_no="+destination_no+"&position="+g_movie_selected_position+"&bitstring="+g_checkedstring+ "&flag="+Math.random();
		}else
		{
			return;
		}
			
		content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Paseting Selected Movies...<p>';
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = paste_selected_movie;
		xmlHttp.send(null);
	}

}
function delete_selected_movie() {

  /* if (xmlHttp.readyState == 4) {
	var response = xmlHttp.responseText;
	if (response==1)
	{
		g_total_movie_no-=g_selectedcounter;;
	}else
	{
		alert("Failed to Delete Channel");
	}
	
	callServer_Movie_Inquery();
    }
    */
         if (xmlHttp.readyState == 4) {
	var response = xmlHttp.responseText;
	if (response==1)
	{
		g_total_movie_no-=g_selectedcounter;
		if (g_total_movie_no<0) g_total_movie_no=0;
		if ((g_movie_position+g_constant_limit)<=g_total_movie_no)
		{
			g_movie_limit=g_constant_limit;
		}else
		{
			g_movie_limit=g_total_movie_no%g_constant_limit;
			if (g_movie_limit==0) 
			{
				if (g_total_movie_no>0)
				{
					if (g_total_movie_no<g_movie_position)
					{
						g_movie_position=g_total_movie_no-g_constant_limit+1;
					}
					g_movie_limit=g_constant_limit;
				}else
				{
					g_movie_limit=0;
				}
			}
		}

	}else
	{
		alert("Failed to Delete Users");
	}
	
	call_get_movies(g_movie_position,g_movie_limit);
    }
}

function callezserver_delete_selected_movie()
{
	var confirm_msg;
	var cgi_url;
	var cookieStr;
	var checkedstring;
	var content = parent.document.getElementById("content");
	
   	g_token=find_cookie_value("token");
checkedstring=get_checked_string(g_total_movie_no,0);
//alert(checkedstring);
 if (checkedstring=='0')
 {
 }else
{
	 confirm_msg="Delete Selected Movies?";
	 cgi_url = "/server/del_multiple_movies?token="+escape(g_token)+"&position="+g_movie_position+"&bitstring="+checkedstring+ "&flag="+Math.random();
	 if (confirm(confirm_msg))
	 {
	 	
	 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Deleting Selected Movies...<p>';
		
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = delete_selected_movie;
		 xmlHttp.send(null);
	 }
 }


}
function refresh_selected_movie() {

  if (xmlHttp.readyState == 4) {
	var response = xmlHttp.responseText;
	if (response==1)
	{
		clear_checked_string(g_total_movie_no);
	 	alert("Sucessfully refresh movies");
	}else
	{
		alert("Failed to Delete Channel");
	}
	call_get_movies(g_movie_position,g_movie_limit)
	//callServer_Movie_Inquery();
    }
}

function callezserver_refresh_selected_movie()
{
	var confirm_msg;
	var cgi_url;
	var cookieStr;
	var checkedstring;


   	g_token=find_cookie_value("token");
checkedstring=get_checked_string(g_total_movie_no,0);
//alert(checkedstring);
 if (checkedstring=='0')
 {
 }else
{		
	 confirm_msg="Refresh Selected Movies?";
	 cgi_url = "/server/refresh_multiple_movies?token="+escape(g_token)+"&position="+g_movie_position+"&bitstring="+checkedstring+ "&flag="+Math.random();
	 if (confirm(confirm_msg))
	 {
	 	
		
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = refresh_selected_movie;
		 xmlHttp.send(null);
	 }
 }


}
// User Edit Command
function callezserver_copy_selected_user()
{
	g_checkedstring=get_checked_string(g_user_no,3);
	g_copy_paste=1;
	clear_checked_string(g_user_no);

}

function callezserver_cut_selected_user()
{
	g_checkedstring=get_checked_string(g_user_no,3);
	if (g_checkedstring=='0')
	{
	}else
	{
		g_copy_paste=2;
		clear_checked_string(g_user_no);
		g_user_selected_position=g_user_position;
		document.getElementById("user_cut_field").value="  Paste  ";
		document.getElementById("user_cut_field").onclick= function(){javscript: callezserver_paste_selected_user();};
	}
}
function paste_selected_user() {

  if (xmlHttp.readyState == 4) {
	var response = xmlHttp.responseText;
	if (response==1)
	{
		if (g_copy_paste==1)
		{
			g_user_no+=g_selectedcounter;
		}
	}else
	{
		alert("Failed to Paste User");
	}
	
	g_copy_paste=0;
	g_checkedstring='0'
	call_get_users_detail();
    }
}

function callezserver_paste_selected_user()
{
	var confirm_msg;
	var cgi_url;
	var content = parent.document.getElementById("content");
	var destination_no;
	

	destination_no=get_checked_no(g_user_no);
//	alert(destination_no);
	clear_checked_string(g_user_no);
	if (destination_no==0)
	{
		confirm_msg="Contine to Select Position?";
		if (confirm(confirm_msg))
		{
		}else
		{
			clear_checked_red_background(g_user_no,3);
			document.getElementById("user_cut_field").value="  Cut  ";
			document.getElementById("user_cut_field").onclick= function(){javscript: callezserver_cut_selected_user();};

		}
	}else
	{
		g_token=find_cookie_value("token");
		if (g_copy_paste==1)
		{
			cgi_url = "/server/copy_paste_multiple_users?token="+escape(g_token)+"&destination_no="+destination_no+"&position="+g_user_selected_position+"&bitstring="+g_checkedstring+ "&flag="+Math.random();
		}else if (g_copy_paste==2)
		{
			cgi_url = "/server/cut_paste_multiple_users?token="+escape(g_token)+"&destination_no="+destination_no+"&position="+g_user_selected_position+"&bitstring="+g_checkedstring+ "&flag="+Math.random();
		}else
		{
			return;
		}
			
		content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Paseting Selected Users...<p>';
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = paste_selected_user;
		xmlHttp.send(null);
	}

}
function delete_selected_user() {

  if (xmlHttp.readyState == 4) {
	var response = xmlHttp.responseText;
	if (response==1)
	{
		g_user_no-=g_selectedcounter;
		if (g_user_no<=0) g_user_no=1;
		if ((g_user_position+g_constant_limit)<=g_user_no)
		{
			g_user_limit=g_constant_limit;
		}else
		{
			g_user_limit=g_user_no%g_constant_limit;
			if (g_user_limit==0) 
			{
				if (g_user_no>0)
				{
					if (g_user_no<g_user_position)
					{
						g_user_position=g_user_no-g_constant_limit+1;
					}
					g_user_limit=g_constant_limit;
				}else
				{
					g_user_limit==0;
				}
			}
		}

	}else
	{
		alert("Failed to Delete Users");
	}
	
	call_get_users_detail();
    }
}

function callezserver_delete_selected_user()
{
	var confirm_msg;
	var cgi_url;
	var cookieStr;
	var checkedstring;
	var content = parent.document.getElementById("content");
	
   	g_token=find_cookie_value("token");
checkedstring=get_checked_string(g_user_no,0);
//alert(g_user_position);
//alert(checkedstring);
 if (checkedstring=='0')
 {
 }else
{
	 confirm_msg="Delete Selected Users?";
	 cgi_url = "/server/del_multiple_users?token="+escape(g_token)+"&position="+g_user_position+"&bitstring="+checkedstring+ "&flag="+Math.random();
	 if (confirm(confirm_msg))
	 {
	 	
 	 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Deleting Selected Users...<p>';
		
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = delete_selected_user;
		 xmlHttp.send(null);
	 }
 }


}
function refresh_selected_user() {

  if (xmlHttp.readyState == 4) {
	var response = xmlHttp.responseText;
	if (response==1)
	{
		clear_checked_string(g_user_no);
	 	alert("Sucessfully refresh users");
	} else
	{
		alert("Failed to Delete Channel");
	}
	call_get_all_user_detail();
    }
}

function callezserver_refresh_selected_user()
{
	var confirm_msg;
	var cgi_url;
	var cookieStr;
	var checkedstring;


   	g_token=find_cookie_value("token");
checkedstring=get_checked_string(g_user_no,0);
//alert(checkedstring);
 if (checkedstring=='0')
 {
 }else
{		
	 confirm_msg="Refresh Selected Movies?";
	 cgi_url = "/server/refresh_multiple_users?token="+escape(g_token)+"&bitstring="+checkedstring+ "&flag="+Math.random();
	 if (confirm(confirm_msg))
	 {
	 	
		
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = refresh_selected_user;
		 xmlHttp.send(null);
	 }
 }


}
function Save_Channel_More() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    	alert("Save Channel More Sucessfully");
    } else if (response==2)
    {
    	alert("Standard version does not support External transcoder");
    }  else if (response==3)
    {
    	alert("Wrong DASH Transcoder path");
    } else if (response==0)
    {
   	alert("Failed to Save Channel More");
    }
  }
}

function callServer_Save_Channel_More(ch_no)
{

  
  var sr2_id="sr2"+ch_no;
   var sr3_id="sr3"+ch_no;
  var sid_id="sid"+ch_no;
  var tolerance_id="tolerance"+ch_no;
  var forwardflag_id="forwardflag"+ch_no;;
  var bitratetypeflag_id="HLSType"+ch_no;
   var mobilebitrate_id="mobilebitrate"+ch_no;
   var sdbitrate_id="sdbitrate"+ch_no;
   var hdbitrate_id="hdbitrate"+ch_no;
   var mobilewidth_id="mobilewidth"+ch_no;
   var sdwidth_id="sdwidth"+ch_no;
   var hdwidth_id="hdwidth"+ch_no;
   var mobileheight_id="mobileheight"+ch_no;
   var sdheight_id="sdheight"+ch_no;
   var hdheight_id="hdheight"+ch_no;
   var videoformat_id="videoformat"+ch_no;
   var videoaspect_id="videoaspect"+ch_no;
   var audioformat_id="audioformat"+ch_no;
   var preset_id="preset"+ch_no;
   var cacheondemandflag_id="cacheondemandflag"+ch_no;
   var netip_id="netip"+ch_no;
   var catch_up_days_id="catch_up_days"+ch_no;
   var epg_channel_id_id="epg_channel_id"+ch_no;
   var http_user_agent_id="http_user_agent"+ch_no;

   
   var sr2url;
   var sr3url;
  var sid;
  var tolerance;
  var forwardflag;
  var cacheondemandflag;
  var netip;
  var catch_up_days;
  var epg_channel_id;
  var http_user_agent;
  var bitratetypeflagarray;
  var bitratetypeflag;
   var mobilebitrate;
   var sdbitrate;
   var hdbitrate;
   var mobilewidth;
   var sdwidth;
   var hdwidth;
   var mobileheight;
   var sdheight;
   var hdheight;
   var videoaspect;
   var preset;  
   var videoformat;
   var audioformat;
   var i=0;
 
 

var confirm_msg;
 	var cgi_url;

	g_item=document.getElementById(sr2_id);
	//alert(g_item.value);
	sr2url=g_item.value;
	g_item=document.getElementById(sr3_id);
	//alert(g_item.value);
	sr3url=g_item.value;
	
	g_item=document.getElementById(sid_id);
	//alert(g_item.value);
	sid=g_item.value;
	g_item=document.getElementById(tolerance_id);
	//alert(g_item.value);
	tolerance=g_item.value;
	g_item=document.getElementById(forwardflag_id);
	// alert(g_item.value);
	forwardflag=g_item.value;

	g_item=document.getElementById(cacheondemandflag_id);
	//alert(g_item.value);
	cacheondemandflag=g_item.value;
	//alert(bitratetypeflag_id);
	g_item=document.getElementById(netip_id);
	//alert(g_item.value);
	netip=g_item.value;

	g_item=document.getElementById(catch_up_days_id);
	//alert(g_item.value);
	catch_up_days=g_item.value;

	g_item=document.getElementById(epg_channel_id_id);
	//alert(g_item.value);
	epg_channel_id=g_item.value;

	g_item=document.getElementById(http_user_agent_id);
	//alert(g_item.value);
	http_user_agent=g_item.value;

	 bitratetypeflagarray=document.getElementById(bitratetypeflag_id);
	for (i=0;i<5;i++)
	{
		if (bitratetypeflagarray[i].checked)
		{
			bitratetypeflag=bitratetypeflagarray[i].value;
			//alert(bitratetypeflag);
		}
		
	}
	if (bitratetypeflag==2)
	{
		g_item=document.getElementById(mobilebitrate_id);
		//alert(g_item.value);
		mobilebitrate=g_item.value;
		
		g_item=document.getElementById(sdbitrate_id);
		//alert(g_item.value);
		sdbitrate=g_item.value;
		
		g_item=document.getElementById(hdbitrate_id);
		//alert(g_item.value);
		hdbitrate=g_item.value;
		
		g_item=document.getElementById(mobilewidth_id);
		//alert(g_item.value);
		mobilewidth=g_item.value;
		if ((mobilewidth=="Auto") || (mobilewidth=="auto"))
		{
			mobilewidth=0;
		}
		g_item=document.getElementById(sdwidth_id);
		//alert(g_item.value);
		sdwidth=g_item.value;
		if ((sdwidth=="Auto") || (sdwidth=="auto"))
		{
			sdwidth=0;
		}
		
		g_item=document.getElementById(hdwidth_id);
		//alert(g_item.value);
		hdwidth=g_item.value;
		if ((hdwidth=="Auto") || (hdwidth=="auto"))
		{
			hdwidth=0;
		}

		g_item=document.getElementById(mobileheight_id);
		//alert(g_item.value);
		mobileheight=g_item.value;
		if ((mobileheight=="Auto") || (mobileheight=="auto"))
		{
			mobileheight=0;
		}
		
		g_item=document.getElementById(sdheight_id);
		//alert(g_item.value);
		sdheight=g_item.value;
		if ((sdheight=="Auto") || (sdheight=="auto"))
		{
			sdheight=0;
		}
		
		g_item=document.getElementById(hdheight_id);
		//alert(g_item.value);
		hdheight=g_item.value;
		if ((hdheight=="Auto") || (hdheight=="auto"))
		{
			hdheight=0;
		}
		
		g_item=document.getElementById(videoaspect_id);
		//alert(g_item.value);
		videoaspect=g_item.value;
		
	  	//alert(videoaspect);
		if (videoaspect=="Auto")
	  	{
	  		videoaspect='';
	  	}
	  	//alert(videoaspect);
		g_item=document.getElementById(preset_id);
		//alert(g_item.value);
		preset=g_item.value;

		g_item=document.getElementById(videoformat_id);
		//alert(g_item.value);
		videoformat=g_item.value;
		
		/*
		g_item=document.getElementById(videoaspect_id);
		//alert(g_item.value);
		videoaspect=g_item.value;
		*/

		g_item=document.getElementById(audioformat_id);
		//alert(g_item.value);
		audioformat=g_item.value;
	}

   	g_token=find_cookie_value("token");

 confirm_msg="Save Channel: "+ch_no+" Information?";
 cgi_url = "/server/save_channel_more?token="+escape(g_token)+"&ch_no="+escape(ch_no)+
  "&sr2="+sr2url+
  "&sr3="+sr3url+
  "&netip="+netip+
  "&sid="+sid+
  "&tolerance="+tolerance+
  "&forward="+forwardflag+
  "&bitratetype="+bitratetypeflag;
  
  if (bitratetypeflag==2)
  {
  	
	  cgi_url +="&video_format="+videoformat+
	  "&audio_format="+audioformat+
	  "&mobilebitrate="+mobilebitrate+
	  "&sdbitrate="+sdbitrate+
	  "&hdbitrate="+hdbitrate+
	  "&mobilewidth="+mobilewidth+
	  "&sdwidth="+sdwidth+
	  "&hdwidth="+hdwidth+
	  "&mobileheight="+mobileheight+
	  "&sdheight="+sdheight+
	  "&hdheight="+hdheight+
	  "&video_aspect="+videoaspect+
	  "&preset="+preset;
  }
  cgi_url +="&cacheondemand="+cacheondemandflag;
  cgi_url +="&catch_up_days="+catch_up_days;
  cgi_url +="&epg_channel_id="+epg_channel_id;
  cgi_url +="&http_user_agent="+http_user_agent;
  cgi_url +="&flag="+Math.random();
  //alert(cgi_url);
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Save_Channel_More;
	 xmlHttp.send(null);

 }


}
function hide_cache_on_deamnd_enabled(ch_no)
{
  var bitratetypeflag_id="HLSType"+ch_no;
    var cacheondemandflag_id="cacheondemandflag"+ch_no;
var bitratetypeflagarray;
  var cacheondemandflag;

//alert(ch_no);
	/*
	g_item=document.getElementById(cacheondemandflag_id);
	//alert(g_item.value);
	cacheondemandflag=g_item.value;
	
	if (cacheondemandflag==1)
	{
		bitratetypeflagarray=document.getElementById(bitratetypeflag_id);
		bitratetypeflagarray[0].checked=true;
		hide_adaptive_option(ch_no)
	}
	*/
	/* 
	else
	{
		bitratetypeflagarray=document.getElementById(bitratetypeflag_id);
		bitratetypeflagarray[0].checked=true;
		show_adaptive_option(ch_no)
	}
	*/
}

function show_adaptive_option(ch_no)
{
    var cacheondemandflag_id="cacheondemandflag"+ch_no;
  var cacheondemandflag;
	var item_id;
	cacheondemandflag=document.getElementById(cacheondemandflag_id);
	cacheondemandflag.value=0;
	item_id="mobilebitrate"+ch_no;
	document.getElementById(item_id).disabled=false;
	
	item_id="sdbitrate"+ch_no;
	document.getElementById(item_id).disabled=false;
	
	item_id="hdbitrate"+ch_no;
	document.getElementById(item_id).disabled=false;

	item_id="mobilewidth"+ch_no;
	document.getElementById(item_id).disabled=false;
	
	item_id="sdwidth"+ch_no;
	document.getElementById(item_id).disabled=false;
	
	item_id="hdwidth"+ch_no;
	document.getElementById(item_id).disabled=false;

	item_id="mobileheight"+ch_no;
	document.getElementById(item_id).disabled=false;
	
	item_id="sdheight"+ch_no;
	document.getElementById(item_id).disabled=false;
	
	item_id="hdheight"+ch_no;
	document.getElementById(item_id).disabled=false;

	item_id="videoformat"+ch_no;
	document.getElementById(item_id).disabled=false;
	
	item_id="videoaspect"+ch_no;
	document.getElementById(item_id).disabled=false;
	
	item_id="audioformat"+ch_no;
	document.getElementById(item_id).disabled=false;
	
	item_id="preset"+ch_no;
	document.getElementById(item_id).disabled=false;
}
function hide_adaptive_option(ch_no)
{
	
	var item_id;
	var bitratetypeflag_id="HLSType"+ch_no;
	  var bitratetypeflagarray;
    var cacheondemandflag_id="cacheondemandflag"+ch_no;
  var cacheondemandflag;

	
	bitratetypeflagarray=document.getElementById(bitratetypeflag_id);
	if (bitratetypeflagarray[1].checked==true)
	{
		cacheondemandflag=document.getElementById(cacheondemandflag_id);
		cacheondemandflag.value=0;
	}
	
		
	item_id="mobilebitrate"+ch_no;
	document.getElementById(item_id).disabled=true;
	
	item_id="sdbitrate"+ch_no;
	document.getElementById(item_id).disabled=true;
	
	item_id="hdbitrate"+ch_no;
	document.getElementById(item_id).disabled=true;

	item_id="mobilewidth"+ch_no;
	document.getElementById(item_id).disabled=true;
	
	item_id="sdwidth"+ch_no;
	document.getElementById(item_id).disabled=true;
	
	item_id="hdwidth"+ch_no;
	document.getElementById(item_id).disabled=true;

	item_id="mobileheight"+ch_no;
	document.getElementById(item_id).disabled=true;
	
	item_id="sdheight"+ch_no;
	document.getElementById(item_id).disabled=true;
	
	item_id="hdheight"+ch_no;
	document.getElementById(item_id).disabled=true;

	item_id="videoformat"+ch_no;
	document.getElementById(item_id).disabled=true;
	
	item_id="videoaspect"+ch_no;
	document.getElementById(item_id).disabled=true;
	
	item_id="audioformat"+ch_no;
	document.getElementById(item_id).disabled=true;
	
	item_id="preset"+ch_no;
	document.getElementById(item_id).disabled=true;

}
function Query_A_Channel_More()
{
  var str;
 
 var ch_no;
 var ch_name;
   var ChannelDetailWindow;
   var srcurl;
   var sr2url;
   var sr3url;
   var sid;
   var tolerance;
   var forwardflag;
   var bitratetypeflag;
   var videoformat;
   var audioformat;
   var mobilebitrate;
   var sdbitrate;
   var hdbitrate;
   var mobilewidth;
   var sdwidth;
   var hdwidth;
   var mobileheight;
   var sdheight;
   var hdheight;
   var videoaspect;
   var preset;  
   var cacheondemandflag;
   var indicator_url;
   var netip;
   var catch_up_days;
   var epg_channel_id;
   var http_user_agent;
   var i;
   var j;
   var udpstr;
   var netipfound;
	var prev_ch_no;
	var next_ch_no;
	var total_ch_no;
	var nObj;
	


  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText.split("\r\n");
  //		alert(response[0]);
 		i=0;

	 	strlength=response[i].length;
   	    	ch_no=response[i].slice(3,strlength);
   	    	

		i++;
	 	strlength=response[i].length;
   	    	ch_name=response[i].slice(5,strlength);
   	    	
    str="<head><title>"+unescape(ch_name)+" [CH "+ch_no+"]"+"</title><link rel='stylesheet' type='text/css' href='menu.css'/>"+'<script src="menu.js"></script></head><body><table align="center">';
		
		i++;
	 	strlength=response[i].length;
   	    	srcurl=response[i].slice(4,strlength);
   	    	
  	    	i++;
    	 	strlength=response[i].length;
   	    	sr2url=response[i].slice(4,strlength);

   	    	i++;
    	 	strlength=response[i].length;
   	    	sr3url=response[i].slice(4,strlength);
   	    	
   	    	i++;
	 	strlength=response[i].length;
   	    	sid=response[i].slice(4,strlength);
 	    	
   	    	i++;
	 	strlength=response[i].length;
   	    	tolerance=response[i].slice(10,strlength);

  	    	i++;
	 	strlength=response[i].length;
   	    	forwardflag=response[i].slice(8,strlength);
   	    	
   	    	i++;
     	 	strlength=response[i].length;
   	    	bitratetypeflag=response[i].slice(12,strlength);
   	    	// alert(bitratetypeflag);
   	    	i++;
     	 	strlength=response[i].length;
   	    	videoformat=response[i].slice(13,strlength);

   	    	i++;
     	 	strlength=response[i].length;
   	    	audioformat=response[i].slice(13,strlength);
   	    	
   	    	i++;
     	 	strlength=response[i].length;
   	    	mobilebitrate=response[i].slice(14,strlength);
		// alert(mobilebitrate);
		
   	    	i++;
     	 	strlength=response[i].length;
   	    	sdbitrate=response[i].slice(10,strlength);
		// alert(sdbitrate);
		
   	    	i++;
     	 	strlength=response[i].length;
   	    	hdbitrate=response[i].slice(10,strlength);
		// alert(hdbitrate);
		// Mobile Width
     	    	i++;
     	 	strlength=response[i].length;
   	    	mobilewidth=response[i].slice(12,strlength);
		//alert(mobilewidth);
		
   	    	i++;
     	 	strlength=response[i].length;
   	    	sdwidth=response[i].slice(8,strlength);
		//alert(sdwidth);
		
   	    	i++;
     	 	strlength=response[i].length;
   	    	hdwidth=response[i].slice(8,strlength);
		//alert(hdwidth);
		// Mobile Height
     	    	i++;
     	 	strlength=response[i].length;
   	    	mobileheight=response[i].slice(13,strlength);
		//alert(mobileheight);
		
   	    	i++;
     	 	strlength=response[i].length;
   	    	sdheight=response[i].slice(9,strlength);
		//alert(sdheight);
		
   	    	i++;
     	 	strlength=response[i].length;
   	    	hdheight=response[i].slice(9,strlength);
		//alert(hdheight);

	    	i++;
	    	//alert(response[i]);
     	 	strlength=response[i].length;
   	    	videoaspect=response[i].slice(12,strlength);
   	    	//alert(videoaspect);

	    	i++;
     	 	strlength=response[i].length;
   	    	preset=response[i].slice(7,strlength);

  	    	i++;
     	 	strlength=response[i].length;
   	    	cacheondemandflag=response[i].slice(14,strlength);
 
  	    	i++;
     	 	strlength=response[i].length;
   	    	netip=response[i].slice(6,strlength);
   	    	//alert(netip);
   	    	
 	    	i++;
     	 	strlength=response[i].length;
   	    	catch_up_days=response[i].slice(14,strlength);

 	    	i++;
     	 	strlength=response[i].length;
   	    	epg_channel_id=response[i].slice(15,strlength);
   	    	
	    	i++;
     	 	strlength=response[i].length;
   	    	http_user_agent=response[i].slice(16,strlength);
   	    	

 	    	i++;
     	 	strlength=response[i].length;
   	    	indicator_url=response[i].slice(13,strlength);
    	    	
  		if (window.self.name=="ChannelDetailWindow")
   		{
   			nObj=window.self.document.getElementById("total_ch_no");
   			//alert(nObj);
   			//alert(nObj.innerText);
   			
   			total_ch_no=parseInt(nObj.innerText);
   			//alert(total_ch_no);
   		}else
   		{
   			total_ch_no=g_total_ch_no;
   		}
 		str+='<tr><td><font face="Arial"> <font size="2">Channel No. : </font></td><td width="450" height="23"><table><tr><td><font face="Arial"> <font size="2"><b>'+ch_no+'</b> / </font></td><td id=total_ch_no> <font size="2">'+total_ch_no+'</font></td></tr></table></td></tr>';
 		str+='<tr><td><font face="Arial"> <font size="2">Channel Name: </font></td><td width="450" height="23"><font face="Arial"> <font size="2"><b>'+unescape(ch_name)+'</b></font></td></tr>';
 		if (indicator_url==0)
 		{
 			str+='<tr><td><font face="Arial"> <font size="2" color="#FF0000"><b>Main URL: (Running)</b></font></td><td width="450" height="23"><font face="Arial"> <font size="2"><b>'+srcurl+'</b></font></td></tr>';
 		}else
 		{
 			str+='<tr><td><font face="Arial"> <font size="2">Main URL: </font></td><td width="450" height="23"><font face="Arial"> <font size="2"><b>'+srcurl+'</b></font></td></tr>';
 		}
 
 		if (indicator_url==1)
 		{
			str+='<tr><td><font face="Arial"> <font size="2" color="#FF0000"><b>2nd URL: (Running)</b></font></td><td width="450" height="23">';
 		}else
 		{
 			str+='<tr><td><font face="Arial"> <font size="2">2nd URL: </font></td><td width="450" height="23">';
 		}
 		str+=' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="sr2"'+
 		' id="sr2'+ch_no+'"'+
 		' size="80" value="'+
 		sr2url+
 		'"/></font></td></tr>';

		if (indicator_url==2)
		{
			str+='<tr><td><font face="Arial"> <font size="2" color="#FF0000"><b>3rd URL: (Running)</b></font></td><td width="450" height="23">';
 		}else
		{
 			str+='<tr><td><font face="Arial"> <font size="2">3rd URL: </font></td><td width="450" height="23">';
 		}
 		str+=' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="sr3"'+
 		' id="sr3'+ch_no+'"'+
 		' size="80" value="'+
 		sr3url+
 		'"/></font></td></tr>';
 		
 		str+='<tr><td><font face="Arial"> <font size="2">Channel SID: </font></td><td width="450" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="sid"'+
 		' id="sid'+ch_no+'"'+
 		' size="50" value="'+
 		sid+
 		'"/></font></td></tr>';

		str+='<tr><td><font face="Arial"> <font size="2">EPG Channel ID: </font></td><td width="450" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="epg_channel_id"'+
 		' id="epg_channel_id'+ch_no+'"'+
 		' size="50" value="'+
 		epg_channel_id+
 		'"/></font></td></tr>';
 		
 		str+='<tr><td><font face="Arial"> <font size="2">HTTP User Agent: </font></td><td width="450" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="http_user_agent"'+
 		' id="http_user_agent'+ch_no+'"'+
 		' size="50" value="'+
 		http_user_agent+
 		'"/></font></td></tr>';	
 			
 		str+='<tr><td><font face="Arial"> <font size="2">Multicast Adapter IP : </font></td><td width="450" height="23">'+
	 		' <font face="Arial"> <font size="2">';
		if (srcurl.search("udp://")==0)
 		{
 			udpstr=srcurl.slice(6);
 			if (udpstr.search(":")>0)
 			{
 				str+=' <select size="1" name="netip" id="netip'+ch_no+'">';
 			}else
 			{
				str+=' <select size="1" disabled name="netip" id="netip'+ch_no+'">';
 			}
		}else
		{
			str+=' <select size="1" disabled name="netip" id="netip'+ch_no+'">';
		}
			
		netipfound=0;
		if (window.self.name=="ChannelDetailWindow")
   		{
			for (j=0;j<window.opener.g_totoal_server_ip_no;j++)
			{
				//alert(g_server_ip_array[j]);
				//alert(netip);
				if (window.opener.g_server_ip_array[j]==netip)
				{
					str+='<option selected="selected" value="'+window.opener.g_server_ip_array[j]+'">'+window.opener.g_server_ip_array[j]+'</option>';
					netipfound=1;
				}else
				{
					str+='<option value="'+window.opener.g_server_ip_array[j]+'">'+window.opener.g_server_ip_array[j]+'</option>';
				}
				
			}
		}else
		{
			for (j=0;j<g_totoal_server_ip_no;j++)
			{
				//alert(g_server_ip_array[j]);
				//alert(netip);
				if (g_server_ip_array[j]==netip)
				{
					str+='<option selected="selected" value="'+g_server_ip_array[j]+'">'+g_server_ip_array[j]+'</option>';
					netipfound=1;
				}else
				{
					str+='<option value="'+g_server_ip_array[j]+'">'+g_server_ip_array[j]+'</option>';
				}
				
			}
		}
		if (netipfound==0)
		{
			str+='<option selected="selected" value="'+netip+'">'+netip+'</option>';
		}
		
 			
 		str+='</select></font></td></tr>';
 		


		str+='<tr><td><font face="Arial"> <font size="2">Bitrate Tolerance: </font></td><td width="450" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="tolerance"'+
 		' id="tolerance'+ch_no+'"'+
 		' size="5" value="'+
 		tolerance+
 		'"/></font></td></tr>';

  		str+='<tr><td><font face="Arial"> <font size="2">Catch Up Days: </font></td><td width="450" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="catch_up_days"'+
 		' id="catch_up_days'+ch_no+'"'+
 		' size="5" value="'+
 		catch_up_days+
 		'"/></font></td></tr>';
 		
 		 str+='<tr><td><font face="Arial"> <font size="2">Proxy Mode : </font></td><td width="450" height="23">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" name="forwardflag" id="forwardflag'+ch_no+'">';
		if (forwardflag==0)
		{
			str+='<option selected="selected" value="0">0</option>';
			str+='<option value="1">1</option>';
			str+='<option value="2">2</option>';
			str+='<option value="3">3</option>';
		}else if (forwardflag==1)
		{
			str+='<option selected="selected" value="1">1</option>';
			str+='<option value="0">0</option>';
			str+='<option value="2">2</option>';
			str+='<option value="3">3</option>';

		}else if (forwardflag==2)
		{
			str+='<option selected="selected" value="2">2</option>';
			str+='<option value="0">0</option>';
			str+='<option value="1">1</option>';
			str+='<option value="3">3</option>';

		}else if (forwardflag==3)
		{
			str+='<option selected="selected" value="3">3</option>';
			str+='<option value="0">0</option>';
			str+='<option value="1">1</option>';
			str+='<option value="2">2</option>';

		}	 			
 		str+='</select></font></td></tr>';

		 str+='<tr><td><font face="Arial"> <font size="2">Cache On Demand : </font></td><td width="450" height="23">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" onchange=hide_cache_on_deamnd_enabled('+ch_no+') name="cacheondemandflag" id="cacheondemandflag'+ch_no+'">';
		if (cacheondemandflag==0)
		{
			str+='<option selected="selected" value="0">0</option>';
			str+='<option value="1">1</option>';
		}
		else
		{
			str+='<option selected="selected" value="1">1</option>';
			str+='<option value="0">0</option>';
		}	 			
 		str+='</select></font></td></tr>';

		

 		 str+='<tr><td><font face="Arial"> <font size="2">HTTP Live Streaming : </font></td><td width="450" height="23">'+
	 		' <font face="Arial"> <font size="2">';
	 	if ((bitratetypeflag==0) || (bitratetypeflag==1)|| (bitratetypeflag==3)|| (bitratetypeflag==4))
	 	{
	 		if (bitratetypeflag==0)
	 		{
				 str+='<form id="HLSType'+ch_no+'"><p style="margin-top: 0; margin-bottom: 0"><input type="radio" value="0" onclick="javascript:hide_adaptive_option('+ch_no+')" checked name="HLSType">Disabled</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType" value="4" onclick="javascript:hide_adaptive_option('+ch_no+')">AES-128 Encryption (Internal transcoder)</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType" value="1" onclick="javascript:hide_adaptive_option('+ch_no+')">Constant Bitrate (Internal transcoder)</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType" value="3" onclick="javascript:hide_adaptive_option('+ch_no+')">Constant Bitrate (External transcoder)</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType"  value="2" onclick="javascript:show_adaptive_option('+ch_no+')">Adaptive Bitrate (External transcoder)</p></td></tr>';
		  	}else if (bitratetypeflag==1)
		  	{
				 str+='<form id="HLSType'+ch_no+'"><p style="margin-top: 0; margin-bottom: 0"><input type="radio" value="0"  name="HLSType" onclick="javascript:hide_adaptive_option('+ch_no+')">Disabled</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType" value="4" onclick="javascript:hide_adaptive_option('+ch_no+')">AES-128 Encryption (Internal transcoder)</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType" checked value="1" onclick="javascript:hide_adaptive_option('+ch_no+')">Constant Bitrate (Internal transcoder)</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType"  value="3" onclick="javascript:hide_adaptive_option('+ch_no+')">Constant Bitrate (External transcoder)</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType"  value="2" onclick="javascript:show_adaptive_option('+ch_no+')">Adaptive Bitrate (External transcoder)</p></td></tr>';
		  	}else if (bitratetypeflag==3)
		  	{
				 str+='<form id="HLSType'+ch_no+'"><p style="margin-top: 0; margin-bottom: 0"><input type="radio" value="0"  name="HLSType" onclick="javascript:hide_adaptive_option('+ch_no+')">Disabled</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType" value="4" onclick="javascript:hide_adaptive_option('+ch_no+')">AES-128 Encryption (Internal transcoder)</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType"  value="1" onclick="javascript:hide_adaptive_option('+ch_no+')">Constant Bitrate (Internal transcoder)</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType" checked value="3" onclick="javascript:hide_adaptive_option('+ch_no+')">Constant Bitrate (External transcoder)</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType"  value="2" onclick="javascript:show_adaptive_option('+ch_no+')">Adaptive Bitrate (External transcoder)</p></td></tr>';
		  	}else if (bitratetypeflag==4)
		  	{
				 str+='<form id="HLSType'+ch_no+'"><p style="margin-top: 0; margin-bottom: 0"><input type="radio" value="0"  name="HLSType" onclick="javascript:hide_adaptive_option('+ch_no+')">Disabled</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType" checked value="4" onclick="javascript:hide_adaptive_option('+ch_no+')">AES-128 Encryption (Internal transcoder)</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType"  value="1" onclick="javascript:hide_adaptive_option('+ch_no+')">Constant Bitrate (Internal transcoder)</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType"  value="3" onclick="javascript:hide_adaptive_option('+ch_no+')">Constant Bitrate (External transcoder)</p>'+
				  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType"  value="2" onclick="javascript:show_adaptive_option('+ch_no+')">Adaptive Bitrate (External transcoder)</p></td></tr>';
		  	}
		  	
		  	
			str+='<tr><td><font face="Arial"> <font size="2">Mobile Bitrate (kbps): </font></td><td width="450" height="23"><table><tr><td>'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" disabled name="mobilebitrate"'+
	 		' id="mobilebitrate'+ch_no+'"'+
	 		' size="5" value="'+
	 		"0"+
	 		'"/></font></td>';
	 		
			str+='<td><font face="Arial"> <font size="2">&nbsp;&nbsp;&nbsp;Resolution (px): </font></td><td height="23">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" disabled name="mobilewidth"'+
	 		' id="mobilewidth'+ch_no+'"'+
	 		' size="5" value="Auto"/></font><font face="Arial"> <font size="2">x</font></td>';
	 		str+='<td height="23">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" disabled name="mobileheight"'+
	 		' id="mobileheight'+ch_no+'"'+
	 		' size="5" value="Auto"/></font></td>';
	 		str+='</tr></table></td></tr>';
	 		
			str+='<tr><td><font face="Arial"> <font size="2">SD Bitrate (kbps): </font></td><td width="450" height="23"><table><tr><td>'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" disabled name="sdbitrate"'+
	 		' id="sdbitrate'+ch_no+'"'+
	 		' size="5" value="'+
	 		"0"+
	 		'"/></font></td>';

			str+='<td><font face="Arial"> <font size="2">&nbsp;&nbsp;&nbsp;Resolution (px): </font></td><td height="23">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" disabled name="sdwidth"'+
	 		' id="sdwidth'+ch_no+'"'+
	 		' size="5" value="Auto"/></font><font face="Arial"> <font size="2">x</font></td>';
			str+='<td height="23">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" disabled name="sdheight"'+
	 		' id="sdheight'+ch_no+'"'+
	 		' size="5" value="Auto"/></font></td>';
	 		str+='</tr></table></td></tr>';
	 		
			str+='<tr><td><font face="Arial"> <font size="2">HD Bitrate (kbps): </font></td><td width="450" height="23"><table><tr><td>'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" disabled name="hdbitrate"'+
	 		' id="hdbitrate'+ch_no+'"'+
	 		' size="5" value="'+
	 		"0"+
	 		'"/></font></td>';

			str+='<td><font face="Arial"> <font size="2">&nbsp;&nbsp;&nbsp;Resolution (px): </font></td><td height="23">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" disabled name="hdwidth"'+
	 		' id="hdwidth'+ch_no+'"'+
	 		' size="5" value="Auto"/></font><font face="Arial"> <font size="2">x</font></td>';
			str+='<td height="23">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" disabled name="hdheight"'+
	 		' id="hdheight'+ch_no+'"'+
	 		' size="5" value="Auto"/></font></td>';
	 		str+='</tr></table></td></tr>';
	 		
			str+='<tr><td><font face="Arial"> <font size="2">Video Format : </font></td><td width="450" height="23"><table><tr><td>'+
		 		' <font face="Arial"> <font size="2">'+
				' <select size="1" disabled name="videoformat" id="videoformat'+ch_no+'">';
			
			str+='<option selected="selected" value="h264">h264</option>';
			str+='<option value="h264_qsv">h264_qsv</option>';
			str+='<option value="h264_nvenc">h264_nvenc</option>';
			str+='<option value="h264_cuda">h264_cuda_nvenc</option>';
			str+='<option value="h265">h265</option>';
			str+='<option value="hevc_nvenc">h265_nvenc</option>';
			str+='<option value="hevc_cuda">h265_cuda_nvenc</option>';
			str+='</select></font></td>';
			
			str+='<td><font face="Arial"> <font size="2">&nbsp;&nbsp;&nbsp;Aspect Ratio : </font></td><td height="23">'+
		 		' <font face="Arial"> <font size="2">'+
				' <select size="1" disabled name="videoaspect" id="videoaspect'+ch_no+'">';
			
			str+='<option selected="selected" value="Auto">Auto</option>';
			str+='<option value="16:9">16:9</option>';
			str+='<option value="4:3">4:3</option>';
			str+='<option value="18:9">18:9</option>';
			str+='<option value="21:9">21:9</option>';
			str+='</select></font></td>';
			
			str+='</tr></table></td></tr>';
						
			 str+='<tr><td><font face="Arial"> <font size="2">Audio Format : </font></td><td width="450" height="23">'+
		 		' <font face="Arial"> <font size="2">'+
				' <select size="1" disabled name="audioformat" id="audioformat'+ch_no+'">';
			
			str+='<option selected="selected" value="aac">aac</option>';
			str+='<option value="mp3">mp3</option>';
			str+='<option value="copy">copy</option>';

	 		str+='</select></font></td></tr>';

			str+='<tr><td><font face="Arial"> <font size="2">Encoding Speed : </font></td><td width="450" height="23">'+
		 		' <font face="Arial"> <font size="2">'+
				' <select size="1" disabled name="preset" id="preset'+ch_no+'">';
			
			str+='<option selected="selected" value="ultrafast">ultrafast</option>';
			str+='<option value="fast">superfast</option>';
			str+='<option value="fast">fast</option>';
			str+='<option value="medium">medium</option>';
			str+='<option value="slow">slow</option>';
						
	 		str+='</select></font></td></tr>';
		}else if (bitratetypeflag==2)
		{
			
			str+='<form id="HLSType'+ch_no+'"><p style="margin-top: 0; margin-bottom: 0"><input type="radio" value="0"  name="HLSType" onclick="javascript:hide_adaptive_option('+ch_no+')">Disabled</p>'+
			  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType" value="4" onclick="javascript:hide_adaptive_option('+ch_no+')">AES-128 Encryption (Internal transcoder)</p>'+
			  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType" value="1" onclick="javascript:hide_adaptive_option('+ch_no+')">Constant Bitrate (Internal transcoder)</p>'+
			  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType" value="3" onclick="javascript:hide_adaptive_option('+ch_no+')">Constant Bitrate (External transcoder)</p>'+
			  '<p style="margin-top: 0; margin-bottom: 0"><input type="radio" name="HLSType" checked value="2" onclick="javascript:show_adaptive_option('+ch_no+')">Adaptive Bitrate (External transcoder)</p></td></tr>';
		
			
			str+='<tr><td><font face="Arial"> <font size="2">Mobile Bitrate (kbps): </font></td><td width="450" height="23"><table><tr><td>'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" name="mobilebitrate"'+
	 		' id="mobilebitrate'+ch_no+'"'+
	 		' size="5" value="'+
	 		mobilebitrate+
	 		'"/></font></td>';
			if (mobilewidth==0)
			{
				mobilewidth="Auto";
			}
			str+='<td><font face="Arial"> <font size="2">&nbsp;&nbsp;&nbsp;Resolution (px): </font></td><td height="23">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" name="mobilewidth"'+
	 		' id="mobilewidth'+ch_no+'"'+
	 		' size="5" value="'+
	 		mobilewidth+
	 		'"/></font><font face="Arial"> <font size="2">x</font></td>';

			if (mobileheight==0)
			{
				mobileheight="Auto";
			}
			str+='<td height="23">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" name="mobileheight"'+
	 		' id="mobileheight'+ch_no+'"'+
	 		' size="5" value="'+
	 		mobileheight+
	 		'"/></font></td>';
	 		str+='</tr></table></td></tr>';
	
			str+='<tr><td><font face="Arial"> <font size="2">SD Bitrate (kbps): </font></td><td width="450" height="23"><table><tr><td>'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" name="sdbitrate"'+
	 		' id="sdbitrate'+ch_no+'"'+
	 		' size="5" value="'+
	 		sdbitrate+
	 		'"/></font></td>';

			if (sdwidth==0)
			{
				sdwidth="Auto";
			}
			str+='<td><font face="Arial"> <font size="2">&nbsp;&nbsp;&nbsp;Resolution (px): </font></td><td height="23">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" name="sdwidth"'+
	 		' id="sdwidth'+ch_no+'"'+
	 		' size="5" value="'+
	 		sdwidth+
	 		'"/></font><font face="Arial"> <font size="2">x</font></td>';

			if (sdheight==0)
			{
				sdheight="Auto";
			}
			str+='<td height="23">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" name="sdheight"'+
	 		' id="sdheight'+ch_no+'"'+
	 		' size="5" value="'+
	 		sdheight+
	 		'"/></font></td>';
	 		str+='</tr></table></td></tr>';
	
			str+='<tr><td><font face="Arial"> <font size="2">HD Bitrate (kbps): </font></td><td width="450" height="23"><table><tr><td>'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" name="hdbitrate"'+
	 		' id="hdbitrate'+ch_no+'"'+
	 		' size="5" value="'+
	 		hdbitrate+
	 		'"/></font></td>';

			if (hdwidth==0)
			{
				hdwidth="Auto";
			}
			str+='<td><font face="Arial"> <font size="2">&nbsp;&nbsp;&nbsp;Resolution (px): </font></td><td height="23">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" name="hdwidth"'+
	 		' id="hdwidth'+ch_no+'"'+
	 		' size="5" value="'+
	 		hdwidth+
	 		'"/></font><font face="Arial"> <font size="2">x</font></td>';

			if (hdheight==0)
			{
				hdheight="Auto";
			}
			str+='<td height="23">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" name="hdheight"'+
	 		' id="hdheight'+ch_no+'"'+
	 		' size="5" value="'+
	 		hdheight+
	 		'"/></font></td>';
	 		str+='</tr></table></td></tr>';

			
			str+='<tr><td><font face="Arial"> <font size="2">Video Format : </font></td><td width="450" height="23"><table><tr><td>'+
		 		' <font face="Arial"> <font size="2">'+
				' <select size="1" name="videoformat" id="videoformat'+ch_no+'">';
			if (videoformat=="h264")
			{
				str+='<option selected="selected" value="h264">h264</option>';				
				str+='<option value="h264_qsv">h264_qsv</option>';
				str+='<option value="h264_nvenc">h264_nvenc</option>';
				str+='<option value="h264_cuda">h264_cuda_nvenc</option>';
				str+='<option value="h265">h265</option>';
				str+='<option value="hevc_nvenc">h265_nvenc</option>';
				str+='<option value="hevc_cuda">h265_cuda_nvenc</option>';
			}
			else if (videoformat=="h264_qsv")
			{
				str+='<option selected="selected" value="h264_qsv">h264_qsv</option>';				
				str+='<option value="h264">h264</option>';
				str+='<option value="h264_nvenc">h264_nvenc</option>';
				str+='<option value="h264_cuda">h264_cuda_nvenc</option>';
				str+='<option value="h265">h265</option>';
				str+='<option value="hevc_nvenc">h265_nvenc</option>';
				str+='<option value="hevc_cuda">h265_cuda_nvenc</option>';
			}else if (videoformat=="h264_nvenc")
			{
				
				str+='<option selected="selected" value="h264_nvenc">h264_nvenc</option>';				
				str+='<option value="h264">h264</option>';
				str+='<option value="h264_qsv">h264_qsv</option>';
				str+='<option value="h264_cuda">h264_cuda_nvenc</option>';
				str+='<option value="h265">h265</option>';
				str+='<option value="hevc_nvenc">h265_nvenc</option>';
				str+='<option value="hevc_cuda">h265_cuda_nvenc</option>';
			}else if (videoformat=="h264_cuda")
			{
				
				str+='<option selected="selected" value="h264_cuda">h264_cuda_nvenc</option>';				
				str+='<option value="h264">h264</option>';
				str+='<option value="h264_qsv">h264_qsv</option>';
				str+='<option value="h264_nvenc">h264_nvenc</option>';
				str+='<option value="h265">h265</option>';
				str+='<option value="hevc_nvenc">h265_nvenc</option>';
				str+='<option value="hevc_cuda">h265_cuda_nvenc</option>';
			}
			else if (videoformat=="h265")
			{
				str+='<option selected="selected" value="h265">h265</option>';
				str+='<option value="h264">h264</option>';
				str+='<option value="h264_nvenc">h264_nvenc</option>';
				str+='<option value="h264_cuda">h264_cuda_nvenc</option>';
				str+='<option value="h264_qsv">h264_qsv</option>';
				str+='<option value="hevc_nvenc">h265_nvenc</option>';
				str+='<option value="hevc_cuda">h265_cuda_nvenc</option>';
			}
			else if (videoformat=="hevc_nvenc")
			{
				str+='<option selected="selected" value="hevc_nvenc">h265_nvenc</option>';				
				str+='<option value="h264">h264</option>';
				str+='<option value="h264_qsv">h264_qsv</option>';
				str+='<option value="h264_nvenc">h264_nvenc</option>';
				str+='<option value="h264_cuda">h264_cuda_nvenc</option>';
				str+='<option value="h265">h265</option>';
				str+='<option value="hevc_cuda">h265_cuda_nvenc</option>';
			}else if (videoformat=="hevc_cuda")
			{
				str+='<option selected="selected" value="hevc_cuda">h265_cuda_nvenc</option>';				
				str+='<option value="h264">h264</option>';
				str+='<option value="h264_qsv">h264_qsv</option>';
				str+='<option value="h264_nvenc">h264_nvenc</option>';
				str+='<option value="h264_cuda">h264_cuda_nvenc</option>';
				str+='<option value="h265">h265</option>';
				str+='<option value="hevc_nvenc">h265_nvenc</option>';
			}
			str+='</select></font></td>';
			str+='<td><font face="Arial"> <font size="2">&nbsp;&nbsp;&nbsp;Aspect Ratio : </font></td><td height="23">'+
		 		' <font face="Arial"> <font size="2">'+
				' <select size="1" name="videoaspect" id="videoaspect'+ch_no+'">';
			if (videoaspect=="")
			{
				str+='<option selected="selected" value="Auto">Auto</option>';				
				str+='<option value="16:9">16:9</option>';
				str+='<option value="4:3">4:3</option>';
				str+='<option value="18:9">18:9</option>';
				str+='<option value="21:9">21:9</option>';
			}
			else if (videoaspect=="16:9")
			{
				str+='<option selected="selected" value="16:9">16:9</option>';				
				str+='<option value="Auto">Auto</option>';
				str+='<option value="4:3">4:3</option>';
				str+='<option value="18:9">18:9</option>';
				str+='<option value="21:9">21:9</option>';
			}else if (videoaspect=="4:3")
			{
				
				str+='<option selected="selected" value="4:3">4:3</option>';				
				str+='<option value="Auto">Auto</option>';
				str+='<option value="16:9">16:9</option>';
				str+='<option value="18:9">18:9</option>';
				str+='<option value="21:9">21:9</option>';
			}
			else if (videoaspect=="18:9")
			{
				str+='<option selected="selected" value="18:9">18:9</option>';
				str+='<option value="Auto">Auto</option>';
				str+='<option value="16:9">16:9</option>';
				str+='<option value="4:3">4:3</option>';
				str+='<option value="21:9">21:9</option>';
			}
			else if (videoaspect=="21:9")
			{
				str+='<option selected="selected" value="21:9">21:9</option>';	
				str+='<option value="Auto">Auto</option>';			
				str+='<option value="16:9">16:9</option>';
				str+='<option value="4:3">4:3</option>';
				str+='<option value="18:9">18:9</option>';
			}
			
			str+='</td></tr></table></td></tr>';
			
			 str+='<tr><td><font face="Arial"><font size="2">Audio Format : </font></td><td width="450" height="23">'+
		 		'<font face="Arial"><font size="2">'+
				'<select size="1" name="audioformat" id="audioformat'+ch_no+'">';
			if (audioformat=="aac")
			{
				str+='<option selected="selected" value="aac">aac</option>';
				str+='<option value="mp3">mp3</option>';
				str+='<option value="copy">copy</option>';
			}else if (audioformat=="mp3")
			{
				str+='<option selected="selected" value="mp3">mp3</option>';
				str+='<option value="aac">aac</option>';
				str+='<option value="copy">copy</option>';
			}else if (audioformat=="copy")
			{
				str+='<option selected="selected" value="copy">copy</option>';
				str+='<option value="aac">aac</option>';
				str+='<option value="mp3">mp3</option>';
			}
			str+='</select></font></td></tr>';	
			
			str+='<tr><td><font face="Arial"><font size="2">Encoding Speed : </font></td><td width="450" height="23">'+
		 		'<font face="Arial"><font size="2">'+
				'<select size="1" name="preset" id="preset'+ch_no+'">';
			if (preset=="ultrafast")
			{
				str+='<option selected="selected" value="ultrafast">ultrafast</option>';
				str+='<option value="superfast">superfast</option>';
				str+='<option value="fast">fast</option>';
				str+='<option value="medium">medium</option>';
				str+='<option value="slow">slow</option>';
			}
			else if (preset=="superfast")
			{
				str+='<option selected="selected" value="superfast">superfast</option>';
				str+='<option value="ultrafast">ultrafast</option>';
				str+='<option value="fast">fast</option>';
				str+='<option value="medium">medium</option>';
				str+='<option value="slow">slow</option>';
			}
			else if (preset=="fast")
			{
				str+='<option value="ultrafast">ultrafast</option>';
				str+='<option value="superfast">superfast</option>';
				str+='<option selected="selected" value="fast">fast</option>';
				str+='<option value="medium">medium</option>';
				str+='<option value="slow">slow</option>';
			}
			else if (preset=="medium")
			{
				str+='<option value="ultrafast">ultrafast</option>';
				str+='<option value="superfast">superfast</option>';
				str+='<option value="fast">fast</option>';
				str+='<option selected="selected" value="medium">medium</option>';
				str+='<option value="slow">slow</option>';
			}
			else if (preset=="slow")
			{
				str+='<option value="ultrafast">ultrafast</option>';
				str+='<option value="superfast">superfast</option>';
				str+='<option value="fast">fast</option>';
				str+='<option value="medium">medium</option>';
				str+='<option selected="selected" value="slow">slow</option>';
			}
						
	 		str+='</select></font></td></tr>';
		}  		


 		
    str+='<tr><td><input type="button" value="Save" onclick=callServer_Save_Channel_More("'+ch_no+'") name="B2" /></td>';
 //   alert(ch_no);
  //  alert(total_ch_no)
    if (parseInt(ch_no)>1)
    {
    	    prev_ch_no=parseInt(ch_no)-1;
	    str+='<td width="450"  height="23"><input type="button" value="Prev" onclick=call_Query_A_Channel_More("'+prev_ch_no+'") name="Prev" />';
    }else
    {
	    str+='<td width="450"  height="23"><input type="button" disabled value="Prev" onclick=call_Query_A_Channel_More("'+prev_ch_no+'") name="Prev" />';
    }
    if (parseInt(ch_no)<total_ch_no)
    {
    	    next_ch_no=parseInt(ch_no)+1;
	    str+='&nbsp&nbsp&nbsp<input type="button" value="Next" onclick=call_Query_A_Channel_More("'+next_ch_no+'") name="Next" />';
    }else
    {
    	    str+='&nbsp&nbsp&nbsp<input disabled type="button" value="Next" onclick=call_Query_A_Channel_More("'+next_ch_no+'") name="Next" />';
    }
    str+='&nbsp&nbsp&nbsp<input type="button" value="Copy" onclick=callServer_Get_Channel_Category("'+ch_no+'") name="Copy" />';
    str+='</td></tr>';
    	
    str+='</table></body>';  
   // 	'<td width="450" height="23"><table><tr><td></td></tr></table></td></tr></table></body>';  
   	if (window.self.name=="ChannelDetailWindow")
   	{
    		window.self.document.body.innerHTML=str;
   	}else
   	{
   		if (g_ChannelDetailWindow && !g_ChannelDetailWindow.closed)
   		{
   			g_ChannelDetailWindow.focus();
   		}else
   		{
	   		ChannelDetailWindow= window.open("", "ChannelDetailWindow", "top=100, left=200, width=850, height=660");  		
	 		ChannelDetailWindow.document.write(str);
	 		g_ChannelDetailWindow=ChannelDetailWindow;
 		}
 		
  	}
      	 	

  }
}

function call_Query_A_Channel_More(ch_no)
{
 var ch_src_id="chsrc"+ch_no; 
 var ch_src;
 var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
   	g_token=find_cookie_value("token");

	 cgi_url = "/server/query_channel_more?token="+escape(g_token)+"&ch_no="+escape(ch_no)+ "&flag="+Math.random();
	 g_ch_no=ch_no;
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Query_A_Channel_More;
	 xmlHttp.send(null);

}

function Copy_Channel_More()
{
 if (xmlHttp.readyState == 4) {

	var response = xmlHttp.responseText;
	alert("Copied sucessfully");
	window.close();

	
 }

}
function callServer_Copy_Channel_More(ch_no)
{
 	var cgi_url;
	var chcheckbox;
	var checkboj;
	var netip_checked=0;
	var tolerance_checked=0;
	var catch_up_days_checked=0;
	var forwardflag_checked=0;
	var cacheondemandflag_checkedg=0;
	var bitratetypeflag_checked=0;
	
	var categoryoptions=document.getElementById("channel_category");
	var iLen;
	var i;
	var bFirstItem=1;
	var selected_category='';
	
	//alert(ch_no);
	//alert(g_ch_no);
	g_ch_no=ch_no
	chcheckbox='netip_chk'+g_ch_no;
	checkboj=document.getElementById(chcheckbox);
	if (checkboj)
	{
		if (checkboj.checked==true)
		{
			netip_checked=1;
		}
	}
	chcheckbox='tolerance_chk'+g_ch_no;
	checkboj=document.getElementById(chcheckbox);
	if (checkboj)
	{
		if (checkboj.checked==true)
		{
			tolerance_checked=1;
		}
	}
	chcheckbox='catch_up_days_chk'+g_ch_no;
	checkboj=document.getElementById(chcheckbox);
	if (checkboj)
	{
		if (checkboj.checked==true)
		{
			catch_up_days_checked=1;
		}
	}
	chcheckbox='forwardflag_chk'+g_ch_no;
	checkboj=document.getElementById(chcheckbox);
	if (checkboj)
	{
		if (checkboj.checked==true)
		{
			forwardflag_checked=1;
		}
	}
	chcheckbox='cacheondemandflag_chk'+g_ch_no;
	checkboj=document.getElementById(chcheckbox);
	if (checkboj)
	{
		if (checkboj.checked==true)
		{
			cacheondemandflag_checkedg=1;
		}
	}
	chcheckbox='bitratetypetext_chk'+g_ch_no;
	checkboj=document.getElementById(chcheckbox);
	if (checkboj)
	{
		if (checkboj.checked==true)
		{
			bitratetypeflag_checked=1;
		}
	}
	iLen=categoryoptions.length;
	for (i=0;i<iLen;i++)
	{
		opt=categoryoptions[i];
		//alert(opt.value);
		//alert(opt.selected);
		if (opt.selected)
		{
			//alert(opt.value);
			if (bFirstItem==0)
			{
			  selected_category+=','+opt.value;	
			}else
			{
				selected_category+=opt.value;	
				bFirstItem=0;
			}				
		}
	}
	if (selected_category.search('all')==0)
	{
		selected_category='all';
	}
	if (selected_category.length>0)
	{	
		g_token=find_cookie_value("token");
		cgi_url = "/server/copy_channel_more?token="+escape(g_token)+"&ch_no="+escape(ch_no)+ 
		"&netip="+netip_checked+
		"&tolerance="+tolerance_checked+
		"&catch_up_days="+catch_up_days_checked+
		"&forwardflag="+forwardflag_checked+
		"&cacheondemandflag="+cacheondemandflag_checkedg+
		"&bitratetypeflag="+bitratetypeflag_checked+
		"&selected_category="+selected_category+
		"&flag="+Math.random();
		//alert(cgi_url);
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Copy_Channel_More;
		xmlHttp.send(null);
	 }else
	 {
	 	alert("Need to select at least one category.");
	 }

}

function Get_Channel_Category()
{
	var i;
	var total_category_no=0;
	var str;
	var UserDetailCopyWindow;
	var netip;
	var tolerance;
	var catch_up_days;
	var forwardflag;
	var cacheondemandflag;
	var bitratetypeflag;
	var bitratetypetext;
	var g_item;
	var bitratetypeflagarray;

  var tolerance_id="tolerance"+g_ch_no;
  var forwardflag_id="forwardflag"+g_ch_no;;
  var bitratetypeflag_id="HLSType"+g_ch_no;
   var cacheondemandflag_id="cacheondemandflag"+g_ch_no;
   var netip_id="netip"+g_ch_no;
   var catch_up_days_id="catch_up_days"+g_ch_no;
	
  if (xmlHttp.readyState == 4) {
  var response = xmlHttp.responseText.split("\r\n");
 	if (g_token==0) return; 
 	//alert(g_token);
    	Channel_Categories_tems[total_category_no]="all"; 
    	total_category_no++;
        for (i=0;;i++)
  	{
	//  alert(response[i]);
	    if (response[i]==0)
  	    {
  	    	break;
 	    } else
  	    {
  	    	strlength=response[i].length;
	  	folder_name=response[i].substring(9);
 	    	Channel_Categories_tems[total_category_no]=escape(folder_name); 
 	    	total_category_no++;
    	   } 
      	}
       	g_item=document.getElementById(tolerance_id);
	//alert(g_item.value);
	
	tolerance=g_item.value;
	g_item=document.getElementById(forwardflag_id);
	// alert(g_item.value);
	forwardflag=g_item.value;

	g_item=document.getElementById(cacheondemandflag_id);
	//alert(g_item.value);
	cacheondemandflag=g_item.value;
	//alert(bitratetypeflag_id);
	g_item=document.getElementById(netip_id);
	//alert(g_item.value);
	netip=g_item.value;

	g_item=document.getElementById(catch_up_days_id);
	//alert(g_item.value);
	catch_up_days=g_item.value;

	bitratetypeflagarray=document.getElementById(bitratetypeflag_id);
	for (i=0;i<5;i++)
	{
		if (bitratetypeflagarray[i].checked)
		{
			bitratetypeflag=bitratetypeflagarray[i].value;
			//alert(bitratetypeflag);
		}
		
	}
	
 	str="<head><title> CH "+g_ch_no+"</title>";

 	str+="<link rel='stylesheet' type='text/css' href='menu.css'/>"+'<script src="menu.js"></script></head><body><table align="center">';
	str+='<tr><td><font face="Arial"><font size="2">Channel No. : </font></td><td width="200" height="23"><font face="Arial"> <font size="2"><b>'+g_ch_no+'</b></font></td></tr>';
	str+='<tr><td><table><tr><td><input type="checkbox" checked id=netip_chk'+g_ch_no+'></td><td><font face="Arial"> <font size="2">Multicast Adapter IP : </font></td></tr></table></td><td width="200" height="23">'+
 		' <font face="Arial"><font size="2">'+netip+'<td></tr>';
	str+='<tr><td><table><tr><td><input type="checkbox" checked id=tolerance_chk'+g_ch_no+'></td><td><font face="Arial"> <font size="2">Bitrate Tolerance: </font></td></tr></table></td><td width="200" height="23">'+
		' <font face="Arial"><font size="2">'+tolerance+'<td></tr>';
	
	str+='<tr><td><table><tr><td><input type="checkbox" checked id=catch_up_days_chk'+g_ch_no+'></td><td><font face="Arial"> <font size="2">Catch Up Days: </font></td></tr></table></td><td width="200" height="23">'+
		' <font face="Arial"><font size="2">'+catch_up_days+'<td></tr>';

	
	
	 str+='<tr><td><table><tr><td><input type="checkbox" checked id=forwardflag_chk'+g_ch_no+'></td><td><font face="Arial"> <font size="2">Proxy Mode : </font></td></tr></table></td><td width="200" height="23">'+
		' <font face="Arial"><font size="2">'+forwardflag+'<td></tr>';


	 str+='<tr><td><table><tr><td><input type="checkbox" checked id=cacheondemandflag_chk'+g_ch_no+'></td><td><font face="Arial"> <font size="2">Cache On Demand : </font></td></tr></table></td><td width="200" height="23">'+
		' <font face="Arial"><font size="2">'+cacheondemandflag+'<td></tr>';
	
	if (bitratetypeflag==0)
	{
		bitratetypetext='Disabled';
	}else if (bitratetypeflag==4)
	{
		bitratetypetext='AES-128 Encryption (Internal transcoder)';
	}else if (bitratetypeflag==1)
	{
		bitratetypetext='Constant Bitrate (Internal transcoder)';
	}else if (bitratetypeflag==3)
	{
		bitratetypetext='Constant Bitrate (External transcoder)';
	}else if (bitratetypeflag==2)
	{
		bitratetypetext='Adaptive Bitrate (External transcoder)';
	}

	 str+='<tr><td><table><tr><td><input type="checkbox" checked id=bitratetypetext_chk'+g_ch_no+'></td><td><font face="Arial"> <font size="2">HTTP Live Streaming : </font></td></tr></table></td><td width="200" height="23">'+
		' <font face="Arial"><font size="2">'+bitratetypetext+'<td></tr>';

  
     	str+='<tr><td  colspan="2"><hr size="1" color="#66FFFF"></td></tr>';
      	str+='<tr><td><font face="Arial"><font size="2">To Category : </font></td><td width="200" height="23">'+
	' <font face="Arial" size="2">'+' <select multiple style="width: 180;" name="channel_category" id=channel_category>';
	for (i=0;i<total_category_no;i++)
	{
		
		str+='<option value="'+Channel_Categories_tems[i]+'">'+Channel_Categories_tems[i]+'</option>';	
	}
	str+='</select></font></td></tr>';
	str+='<tr><td><input type="button" value="Copy" onclick=callServer_Copy_Channel_More("'+g_ch_no+'") name="Copy_B2" /></td><td></td></tr>';
	str+='</table>';
      	UserDetailCopyWindow= window.open("", "", "top=200, left=300, width=500, height=360"); 
 	UserDetailCopyWindow.document.write(str);
      	
      	
   }

  	
}

function callServer_Get_Channel_Category(ch_no)
{
 	var cgi_url;
   	g_token=find_cookie_value("token");

	 cgi_url = "/server/get_channel_category?token="+escape(g_token)+"&flag="+Math.random();
	 g_ch_no=ch_no;
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Get_Channel_Category;
	 xmlHttp.send(null);

}

function Get_Server_IP()
{
 if (xmlHttp.readyState == 4) {

	var response = xmlHttp.responseText.split("\r\n");
	var HTML_str='';
	var strlength=0;
	var i=0;
	var j=1;

	g_totoal_server_ip_no=0;
	g_server_ip_array[0]="127.0.0.1";
	//alert(g_server_ip_array[0]);
 	while (1)
	{
 	 	if (response[i]==0) break;
		//alert(response[i]);
	 	strlength=response[i].length;
	 	//alert(strlength);
   	    	g_server_ip_array[j]=response[i].slice(3,strlength);
   	    	//alert(g_server_ip_array[j]);
  		i++;
  		j++;
	}
	g_totoal_server_ip_no=i+1;
 	call_Query_A_Channel_More(g_ch_no);
 }

}

function call_Get_Server_IP(ch_no)
{
 var ch_src_id="chsrc"+ch_no; 
 var ch_src;
 var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;


   	g_token=find_cookie_value("token");
 
	 cgi_url = "/server/get_server_ip_list?token="+escape(g_token)+"&ch_no="+escape(ch_no)+ "&flag="+Math.random();
	 g_ch_no=ch_no;
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Get_Server_IP;
	 xmlHttp.send(null);

}
function Block_Player() {

  if (xmlHttp.readyState == 4) {
	    var response = xmlHttp.responseText;
	    var reloader_content;
	    if (response==1)
	    {
	    	calllist_active_player_info(g_active_connection_position,g_active_connection_limit);
	    } else
	    {
	   	alert("Failed to Block the player");
	    }

    }
}

function callServer_Block_Player(sessionno, protocoltype){

	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var confirm_msg;
	
	//alert(protocoltype);
   	g_token=find_cookie_value("token");

	confirm_msg="Block Player ["+sessionno+"] ?";
	 if (confirm(confirm_msg))
	 {
 		cgi_url= "/player/block_player?token="+escape(g_token)+"&sessionno="+escape(sessionno)+"&protocol="+escape(protocoltype)+"&flag="+Math.random();
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Block_Player;
		xmlHttp.send(null);
	}
 
 

}
function Stop_Player() {

  if (xmlHttp.readyState == 4) {
	    var response = xmlHttp.responseText;
	    var reloader_content;
	    if (response==1)
	    {
	    	calllist_active_player_info(g_active_connection_position,g_active_connection_limit);
	    } else
	    {
	   	alert("Failed to Stop the player");
	    }

    }
}

function callServer_Stop_Player(sessionno, protocoltype){

	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var confirm_msg;
	
	//alert(protocoltype);
   	g_token=find_cookie_value("token");

	confirm_msg="Stop Player ["+sessionno+"] ?";
	 if (confirm(confirm_msg))
	 {
 		cgi_url= "/player/stop_player?token="+escape(g_token)+"&sessionno="+escape(sessionno)+"&protocol="+escape(protocoltype)+"&flag="+Math.random();
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Stop_Player;
		xmlHttp.send(null);
	}
 
 

}
/*
function list_active_player_info(){
  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText.split("\r\n");
    var sessionnotext;
    var sessionno;
    var username;
    var playername;
    var watching_ch;
    var box_time;
    var box_ip;
    var box_ispname;
   var box_country;
    var box_group;
    var box_group_text;
    var eztbox_title="<p>"+"macid IP name"+"</p>";
    var eztbox_list;
    var i=0;
    var j=0;
    var box_no=1;
	var eztbox_active_no=0;
	var ret=0;
	var HTML_title_str='';
	var HTML_str='';
	var macid_value;
  var content = parent.document.getElementById("content");
  // var detail = parent.document.getElementById("detail");
	

	content.innerHTML="";
//	detail.innerHTML="";
	g_search_player_item.value=null;
	

	 HTML_title_str= '<table border="0" align="center" height="53">'+
	  '<tr>'+
	      '<td width="20" height="17" align="left"><p style="margin-left: 5"><font face="Arial" size="2">No.</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">User</font></td>'+
	      '<td width="100 height="17" align="center"><font face="Arial" size="2">Session</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">User Agent</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">Watching CH/Moive</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">Starting Time</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">IP</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">MAC ID</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">ISP</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">Country</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">Protocol</font></td>'+
	      '<td width="10" height="17" align="center"></td>'+
	      '<td width="10" height="17" align="center"></td>'+
	    //  " <a href='javascript:void(0)' onclick=callServer_Reboot_All_Player()>"+
	    // ' <font face="Arial" size="2">Reboot All</font></a></td>'+
 	 '</tr>'+'<tr><td  colspan="13"><hr size="1" color="#66FFFF"></td></tr>';
	
	while (1)
	{
		if (response[i]==0) break;
		//alert(response[i]);
		sessionnotext=response[i];
		sessionno=sessionnotext.slice(10);
		//alert(sessionno);
		username=response[i+1];
//		alert(username);
		ret=username.indexOf("username",0);
		//if (ret==-1) break;
		playername=response[i+2];
		watching_ch=response[i+3];
		
		box_time=response[i+4];
//		alert(box_time);
		box_ip=response[i+5];
//		alert(box_ip)
		box_macid=response[i+6];
		box_ispname=response[i+7];
		box_country=response[i+8];
		box_group_text=response[i+9];
		box_group=box_group_text.slice(6);
//		alert(box_group);
		i=i+10;
		eztbox_active_no++;
		j++;
		HTML_str='<tr>'+
		      '<td width="20" height="18" align="left"><p style="margin-left: 5"><font face="Arial" size="2">'+box_no+'</font></td>'+
		      '<td id=username'+j+' width="200" height="18" align="center"><font face="Arial" size="2">'+username.slice(9)+'</font></td>'+
		      '<td width="50" height="18" align="center"><font face="Arial" size="2">'+sessionno+'</font></td>'+
		      '<td width="200" height="18" align="center"><font face="Arial" size="2">'+playername.slice(11)+'</font></td>'+
		      '<td width="200" height="18" align="center"><font face="Arial" size="2">'+unescape(watching_ch.slice(12))+'</font></td>'+
		      '<td width="200" height="18" align="center"><font face="Arial" size="2">'+box_time.slice(12)+'</font></td>'+
		      '<td id=userip'+j+' width="100" height="18" align="center"><font face="Arial" size="2">'+box_ip.slice(10)+'</font></td>'+
		      '<td id=usermac'+j+' width="100" height="18" align="center"><font face="Arial" size="2">'+box_macid.slice(13)+'</font></td>'+
		      '<td width="200" height="18" align="center"><font face="Arial" size="2">'+box_ispname.slice(8)+'</font></td>'+
		      '<td width="100" height="18" align="center"><font face="Arial" size="2">'+box_country.slice(8)+'</font></td>'+
		      '<td width="100" height="18" align="center"><font face="Arial" size="2">'+box_group+'</font></td>'+
		      '<td align="center">'+
		      " <a href='javascript:void(0)'"+' onclick=callServer_Stop_Player("'+sessionno+'","'+box_group+'")>'+
		      ' <img border="0" id="stopbutton" alt="Stop" title="Stop" src="stop_icon.PNG"></a></td>'+
		      '<td align="center">'+
		      " <a href='javascript:void(0)'"+' onclick=callServer_Block_Player("'+sessionno+'","'+box_group+'")>'+
		      ' <img border="0" id="blockbutton" alt="Block" title="Block" src="block_icon.PNG"></a></td>'+
		      '</tr>'+HTML_str;
		box_no++;
     }
       // contentinnerHTML=HTML_str;
       HTML_str=HTML_title_str+HTML_str;
        g_active_player_no=eztbox_active_no;
  	content.innerHTML='<table width=100%><tr>'+
	'<td>'+
	'<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Auto Refresh" onclick="javascript:calllist_auto_active_player_info();" />'+
	'&nbsp<Input type="button" value="Refresh Filter" onclick="javascript:call_reload_filter_information();" />'+
	'&nbsp<input name="player_search_field" id="player_search_field" size="20"/>'+
	'&nbsp<input type="button" value="Search" onclick="javascript:search_player();" name="search_player" /></td>'+
	'<td aligh=right>'+
  	'<p style="margin-right: 5; margin-top: 10"><font face="Arial" size="2">Total: '+ eztbox_active_no+'</font></td>'+
	'</tr>'+
	'<tr><td colspan="2"><hr size="1" color="#66FFFF"></td></tr>'+
	'</table>'+HTML_str;
	
	//alert(content.innerHTML);
    //	bQuery_Online_Player=1;
   // 	alert(g_Query_Online_Player_timer);
   	if (bQuery_Online_Player==1)
   	{
		if (g_Query_Online_Player_timer==0)
		{
			g_Query_Online_Player_timer=setInterval(function(){callServer_Query_Online_Player_Timer()},10*1000);
		  //	alert(g_Query_Online_Player_timer);
		}
	}

 }
 
 
}
*/
function list_active_player_info()
{
 
 if (xmlHttp.readyState == 4) {


    var response = xmlHttp.responseText.split("\r\n");
    var sessionnotext;
    var sessionno;
    var username;
    var playername;
    var watching_ch;
    var box_time;
    var box_ip;
    var box_ispname;
   var box_country;
    var box_group;
    var box_group_text;
    var eztbox_title="<p>"+"macid IP name"+"</p>";
    var eztbox_list;
    var i=0;
    var j=0;
    var box_no=g_active_connection_position;
	var eztbox_active_no=0;
	var ret=0;
	var HTML_title_str='';
	var HTML_str='';
	var macid_value;
	var total_count=0;
	var total_no=0
	var current_position=g_active_connection_position;
	var total_counttext;
	
  var content = parent.document.getElementById("content");

	content.innerHTML="";
	total_count=5;
	
	g_search_player_item.value=null;

	HTML_str= '<table border="0" align="center" height="53">'+
	  '<tr>'+
	      '<td width="20" height="17" align="left"><p style="margin-left: 5"><font face="Arial" size="2">No.</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">User</font></td>'+
	      '<td width="100 height="17" align="center"><font face="Arial" size="2">Session</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">User Agent</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">Watching CH/Moive</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">Starting Time</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">IP</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">MAC ID</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">ISP</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">Country</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">Protocol</font></td>'+
	      '<td width="10" height="17" align="center"></td>'+
	      '<td width="10" height="17" align="center"></td>'+
 	 '</tr>'+'<tr><td  colspan="13"><hr size="1" color="#66FFFF"></td></tr>';
 	
 	i=0;
 	total_counttext=response[i];
	total_count=total_counttext.slice(12);
	//alert(total_count);
	i++;
 
	while (1)
	{
		if (response[i]==0) break;
		//alert(response[i]);
		sessionnotext=response[i];
		sessionno=sessionnotext.slice(10);
		//alert(sessionno);
		username=response[i+1];
//		alert(username);
		ret=username.indexOf("username",0);
		//if (ret==-1) break;
		playername=response[i+2];
		watching_ch=response[i+3];
		
		box_time=response[i+4];
//		alert(box_time);
		box_ip=response[i+5];
		//alert(box_ip)
		box_macid=response[i+6];
		box_ispname=response[i+7];
		box_country=response[i+8];
		box_group_text=response[i+9];
		box_group=box_group_text.slice(6);
//		alert(box_group);
		i=i+10;
		total_no++;
		j++;
		HTML_str+='<tr>'+
		      '<td width="20" height="18" align="left"><p style="margin-left: 5"><font face="Arial" size="2">'+box_no+'</font></td>'+
		      '<td id=username'+j+' width="200" height="18" align="center"><font face="Arial" size="2">'+username.slice(9)+'</font></td>'+
		      '<td width="50" height="18" align="center"><font face="Arial" size="2">'+sessionno+'</font></td>'+
		      '<td width="200" height="18" align="center"><font face="Arial" size="2">'+playername.slice(11)+'</font></td>'+
		      '<td width="200" height="18" align="center"><font face="Arial" size="2">'+unescape(watching_ch.slice(12))+'</font></td>'+
		      '<td width="200" height="18" align="center"><font face="Arial" size="2">'+box_time.slice(12)+'</font></td>'+
		      '<td id=userip'+j+' width="100" height="18" align="center"><font face="Arial" size="2">'+box_ip.slice(10)+'</font></td>'+
		      '<td id=usermac'+j+' width="100" height="18" align="center"><font face="Arial" size="2">'+box_macid.slice(13)+'</font></td>'+
		      '<td width="200" height="18" align="center"><font face="Arial" size="2">'+box_ispname.slice(8)+'</font></td>'+
		      '<td width="100" height="18" align="center"><font face="Arial" size="2">'+box_country.slice(8)+'</font></td>'+
		      '<td width="100" height="18" align="center"><font face="Arial" size="2">'+box_group+'</font></td>'+
		      '<td align="center">'+
		      " <a href='javascript:void(0)'"+' onclick=callServer_Stop_Player("'+sessionno+'","'+box_group+'")>'+
		      ' <img border="0" id="stopbutton" alt="Stop" title="Stop" src="stop_icon.PNG"></a></td>'+
		      '<td align="center">'+
		      " <a href='javascript:void(0)'"+' onclick=callServer_Block_Player("'+sessionno+'","'+box_group+'")>'+
		      ' <img border="0" id="blockbutton" alt="Block" title="Block" src="block_icon.PNG"></a></td>'+
		      '</tr>';
		box_no++;
     }

	g_active_player_no=total_count;
  	menustr1='<table width=100%><tr>'+
	'<td>'+
	'<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Auto Refresh" onclick="javascript:calllist_auto_active_player_info();" />'+
	'&nbsp<Input type="button" value="Refresh Filter" onclick="javascript:call_reload_filter_information();" />';
	
	if (g_search__player_text==null)
	{
		menustr1+='&nbsp<input name="player_search_field" id="player_search_field" size="20"/>'+
		'&nbsp<input type="button" value="Search" onclick="javascript:callServer_search_player();" name="search_player" /></td>';
	}else
	{
		menustr1+='&nbsp<input type="button" style="color:#ff0000;" value="Stop Search" onclick="javascript:callServer_all_player();" name="all_player" /></td>';
	}
	
	menustr1+='<td aligh=right>'+
  	'<p style="margin-right: 5; margin-top: 10"><font face="Arial" size="2">Total: '+ total_count+'</font></td>'+
	'</tr>'+
	'<tr><td colspan="2"><hr size="1" color="#66FFFF"></td></tr>'+
	'</table>';
		if (total_count==0)
		{
			current_position=0;
			endposition=0;
		}else
		{
			endposition=current_position+total_no-1;
		}
		menustr2='<table width=100%><tr><td width="13%" align="right">'+'<font face="Arial"> <font size="2">Showing '+ current_position+' to '+endposition+' of </td>';
		menustr2+='<td width="20%" id=total_no_top_id>'+'<font face="Arial"> <font size="2">'+total_count+' connections</td>';
		position=1;
		limit=g_constant_limit;
		if (total_count>g_constant_limit)
		{	
			menustr2+='<td width="67%"><font face="Arial" size="2"><input type="button" value="First" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /> </font>';
		
			if (current_position-g_constant_limit<0)
			{
					
				menustr2+='<font face="Arial" size="2"><input type="button" disabled value="Previous" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /> </font>';
			}else
			{
				position=current_position-g_constant_limit;
				if ((position+g_constant_limit)<=total_count)
				{
					limit=g_constant_limit;
				}else
				{
					limit=total_count%g_constant_limit;
					if (limit==0) limit=g_constant_limit;
				}
				menustr2+='<font face="Arial" size="2"><input type="button" value="Previous" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /> </font>';
			}
			// user sequence
			total_sequence=Math.floor(total_count/g_constant_limit);
			//alert(total_sequence);
			if ((total_count%g_constant_limit) > 0)
			{
				total_sequence++;
			}
			
			curren_sequence_no=Math.floor(current_position/g_constant_limit)+1;
			if ((total_sequence-curren_sequence_no)<g_sequence_constant_limit)
			{
				start_sequence_no=total_sequence-g_sequence_constant_limit;
			}else
			{
				start_sequence_no=curren_sequence_no-(g_sequence_constant_limit/2);
			}
			if (start_sequence_no<=0) start_sequence_no=1;
			//if (total_sequence<g_sequence_constant_limit)
			//{
			//	start_sequence_no=1;
			//}
			for (i=(start_sequence_no-1)*g_constant_limit+1,j=start_sequence_no,k=1;;j++,k++)
			{
				if (j>=total_sequence)
				{
					position=i;
					limit=total_count%g_constant_limit;
					if (limit==0) limit=g_constant_limit;
					if (j<10)
					{
						if (j==curren_sequence_no)
						{
							menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="0'+j+'" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /> </font>';
						}else
						{
							menustr2+='<font face="Arial" size="2"><input type="button" value="0'+j+'" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /> </font>';
						}
					}else
					{
						if (j==curren_sequence_no)
						{
							menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="'+j+'" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /> </font>';
						}else
						{
							menustr2+='<font face="Arial" size="2"><input type="button" value="'+j+'" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /> </font>';
						}
					}
					//menustr2+='</td>';
					break;
				}
				if (k<=g_sequence_constant_limit)
				{
					position=i;
					limit=g_constant_limit;
					if (j<10)
					{
						if (j==curren_sequence_no)
						{
							menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="0'+j+'" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /> </font>';
						}else
						{
							menustr2+='<font face="Arial" size="2"><input type="button" value="0'+j+'" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /> </font>';
						}
					}else
					{
						if (j==curren_sequence_no)
						{
							menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="'+j+'" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /> </font>';
						}else
						{
							menustr2+='<font face="Arial" size="2"><input type="button" value="'+j+'" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /> </font>';
						}
					}
					i+=g_constant_limit;
				}else
				{
					//menustr2+='</td>';
					break;
				}
				
				
			}
			if (endposition+1<=total_count)
			{
				position=endposition+1;
				if ((position+g_constant_limit)<=total_count)
				{
					limit=g_constant_limit;
				}else
				{
					limit=total_count%g_constant_limit;
					if (limit==0) limit=g_constant_limit;
				}
				menustr2+='<font face="Arial" size="2"><input type="button" value="Next" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /> </font>';
			}else
			{
				menustr2+='<font face="Arial" size="2"><input type="button" disabled value="Next" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /> </font>';
			}
			if ((total_count%g_constant_limit)==0)
			{
				position=total_count-g_constant_limit+1;
				limit=g_constant_limit;
			}else
			{
				position=total_count-(total_count%g_constant_limit)+1;
				limit=total_count%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
			}
			menustr2+='<font face="Arial" size="2"><input type="button" value="Last" onclick="javascript:calllist_active_player_info('+position+','+limit+')"; /></font>';
			menustr2+='</td></tr></table>';
		}else
		{
			menustr2+='<td>';
		}
	 
		content.innerHTML=menustr1+HTML_str+'</table>'+menustr2;
		
		if (bQuery_Online_Player==1)
	   	{
			if (g_Query_Online_Player_timer==0)
			{
				g_Query_Online_Player_timer=setInterval(function(){callServer_Query_Online_Player_Timer()},10*1000);
			  //	alert(g_Query_Online_Player_timer);
			}
		}
 }
}
function Block_Alert_Player() {

  if (xmlHttp.readyState == 4) {
	    var response = xmlHttp.responseText;
	    var reloader_content;
	    if (response==1)
	    {
	    	calllist_alert_player_info();
	    } else
	    {
	   	alert("Failed to Block the player");
	    }

    }
}

function callServer_Block_Alert_Player(sessionno, protocoltype){

	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var confirm_msg;
	
	//alert(protocoltype);
   	g_token=find_cookie_value("token");

	confirm_msg="Block Player ["+sessionno+"] ?";
	 if (confirm(confirm_msg))
	 {
 		cgi_url= "/player/block_player?token="+escape(g_token)+"&sessionno="+escape(sessionno)+"&protocol="+escape(protocoltype)+"&flag="+Math.random();
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Block_Alert_Player;
		xmlHttp.send(null);
	}
 
 

}
function Stop_Alert_Player() {

  if (xmlHttp.readyState == 4) {
	    var response = xmlHttp.responseText;
	    var reloader_content;
	    if (response==1)
	    {
	    	calllist_alert_player_info();
	    } else
	    {
	   	alert("Failed to Stop the player");
	    }

    }
}

function callServer_Stop_Alert_Player(sessionno, protocoltype){

	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var confirm_msg;
	
	//alert(protocoltype);
   	g_token=find_cookie_value("token");

	confirm_msg="Stop Player ["+sessionno+"] ?";
	 if (confirm(confirm_msg))
	 {
 		cgi_url= "/player/stop_player?token="+escape(g_token)+"&sessionno="+escape(sessionno)+"&protocol="+escape(protocoltype)+"&flag="+Math.random();
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Stop_Alert_Player;
		xmlHttp.send(null);
	}
 
 

}
function list_alert_player_info(){
  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText.split("\r\n");
    var sessionnotext;
    var sessionno;
    var username;
    var playername;
    var watching_ch;
    var box_time;
    var box_watch_hour;
    var box_ip;
    var box_country;
    var box_group;
    var box_group_text;
    var eztbox_title="<p>"+"macid IP name"+"</p>";
    var eztbox_list;
    var i=0;
    var box_no=1;
	var eztbox_active_no=0;
	var ret=0;
	var HTML_title_str='';
	var HTML_str='';
	var macid_value;
  var content = parent.document.getElementById("content");
  // var detail = parent.document.getElementById("detail");
	

	content.innerHTML="";
//	detail.innerHTML="";
	

	 HTML_title_str= '<table border="0" align="center" height="53">'+
	  '<tr>'+
	      '<td width="50" height="17" align="center"><font face="Arial" size="2">No.</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">Subscriber</font></td>'+
	      '<td width="100 height="17" align="center"><font face="Arial" size="2">Session No.</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">Player Name</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">Watching CH/Moive</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">Starting Time</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">Watch Hours</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">IP</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">MAC Address</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">Country</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">Protocol</font></td>'+
	   //   '<td width="100" height="17" align="center">'+
	    //  " <a href='javascript:void(0)' onclick=callServer_Reboot_All_Player()>"+
	    // ' <font face="Arial" size="2">Reboot All</font></a></td>'+
 	 '</tr>'+'<tr><td  colspan="11"><hr size="1" color="#66FFFF"></td></tr>';
	
	while (1)
	{
		if (response[i]==0) break;
		//alert(response[i]);
		sessionnotext=response[i];
		sessionno=sessionnotext.slice(10);
		//alert(sessionno);
		username=response[i+1];
//		alert(username);
		ret=username.indexOf("username",0);
		//if (ret==-1) break;
		playername=response[i+2];
		watching_ch=response[i+3];
		
		box_time=response[i+4];
		box_watch_hour=response[i+5];
//		alert(box_watch_hour);
//		alert(box_time);
		box_ip=response[i+6];
//		alert(box_ip)
		box_macid=response[i+7];
		box_country=response[i+8];
		box_group_text=response[i+9];
		box_group=box_group_text.slice(6);
//		alert(box_group);
		i=i+10;
		eztbox_active_no++;
		HTML_str='<tr>'+
		      '<td width="50" height="18" align="center"><font face="Arial" size="2">'+box_no+'</font></td>'+
		      '<td width="200" height="18" align="center"><font face="Arial" size="2">'+username.slice(9)+'</font></td>'+
		      '<td width="50" height="18" align="center"><font face="Arial" size="2">'+sessionno+'</font></td>'+
		      '<td width="200" height="18" align="center"><font face="Arial" size="2">'+playername.slice(11)+'</font></td>'+
		      '<td width="200" height="18" align="center"><font face="Arial" size="2">'+watching_ch.slice(12)+'</font></td>'+
		      '<td width="200" height="18" align="center"><font face="Arial" size="2">'+box_time.slice(12)+'</font></td>'+
		      '<td width="200" height="18" align="center"><b><font face="Arial" size="2" color="#FF0000">'+box_watch_hour.slice(18)+'</font></b></td>'+
		      '<td width="100" height="18" align="center"><font face="Arial" size="2">'+box_ip.slice(10)+'</font></td>'+
		      '<td width="100" height="18" align="center"><font face="Arial" size="2">'+box_macid.slice(13)+'</font></td>'+
		      '<td width="100" height="18" align="center"><font face="Arial" size="2">'+box_country.slice(8)+'</font></td>'+
		      '<td width="100" height="18" align="center"><font face="Arial" size="2">'+box_group+'</font></td>'+
		      '<td width="50" height="18" align="center">'+
		      " <a href='javascript:void(0)'"+' onclick=callServer_Stop_Alert_Player("'+sessionno+'","'+box_group+'")>'+
		      ' <img border="0" id="stopbutton" alt="Stop" title="Stop" src="stop_icon.PNG"></a></td>'+
		      '<td width="50" height="18" align="center">'+
		      " <a href='javascript:void(0)'"+' onclick=callServer_Block_Alert_Player("'+sessionno+'","'+box_group+'")>'+
		      ' <img border="0" id="blockbutton" alt="Block" title="Block" src="block_icon.PNG"></a></td>'+
		      '</tr>'+HTML_str;
		      
		box_no++;
     }
       // contentinnerHTML=HTML_str;
       HTML_str=HTML_title_str+HTML_str;
        
  	content.innerHTML='<table width=100%><tr>'+
  	 '<td width=80%>'+
	 '<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Query" onclick="javascript:calllist_alert_player_info();" />'+
 	 '</td>'+
	'<td align=right width=20%>'+
  	'<p style="margin-left: 5"><font face="Arial" size="2">Total: '+ eztbox_active_no+'</font></td>'+
    	'</tr></table>'+HTML_str;
	
	//alert(content.innerHTML);
    
 }
 
 
}


function reload_filter_information() {

  if (xmlHttp.readyState == 4) {
	    var response = xmlHttp.responseText;
	    var reloader_content;
	    if (response==1)
	    {
	    } else
	    {
	   	alert("Failed to Reload Filter Information");
	    }
 	reloader_content = document.getElementById("reload_filter_information");
 	reloader_content.innerHTML="<a href='javascript:void(0)'"+
	' onclick=call_reload_filter_information()>'+
	' <font face="Arial" size="2">Reload Filters</font></a>'

    }
}

function call_reload_filter_information(){

	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var confirm_msg;
	
   	g_token=find_cookie_value("token");
 	var reloader_content = document.getElementById("reload_filter_information");

	confirm_msg="Reload Filter Information?";
	 if (confirm(confirm_msg))
	 {
 		cgi_url= "/server/reload_filter_information?token="+escape(g_token)+"&flag="+Math.random();
		reloader_content.innerHTML='<font face="Arial" color="#FF0000" size="2">Reloading';
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = reload_filter_information;
		xmlHttp.send(null);
	}
 
 

}
function calllist_auto_active_player_info(){
	
	bQuery_Online_Player=1;
	calllist_active_player_info(g_active_connection_position,g_active_connection_limit);
}
function calllist_active_player_info(position,limit){

	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;

   	g_token=find_cookie_value("token");
   	bSystem_Inquery_Panel=0;
 	bQuery_Channel_Status=0;
 	g_active_connection_position=position;
	g_active_connection_limit=limit;
	var content = parent.document.getElementById("content");

	if (g_token!=0)
	{
		if (g_search__player_text==null)
		{
			cgi_url= "/player/get_player_list?token="+escape(g_token)+"&position="+position+"&limit="+limit+"&flag="+Math.random();
		}else
		{
			cgi_url= "/player/get_player_list?token="+escape(g_token)+"&position="+position+"&limit="+limit+"&searchvalue=" +g_search__player_text+"&flag="+Math.random();
		}
		content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Player Information Loading...<p>';
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = list_active_player_info;
		xmlHttp.send(null);
	}
 
 

}
function calllist_alert_player_info(){

	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;

   	g_token=find_cookie_value("token");
   	bSystem_Inquery_Panel=0;
 	bQuery_Channel_Status=0;
 	bQuery_Online_Player=0;
 	bGet_Channel_Statistics=0;
	var content = parent.document.getElementById("content");

	if (g_token!=0)
	{
		cgi_url= "/player/get_alert_player_list?token="+escape(g_token)+"&flag="+Math.random();
		content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Player Information Loading...<p>';
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = list_alert_player_info;
		xmlHttp.send(null);
	}
 
 

}

function callServer_group_Inquery() {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
//    var detail = parent.document.getElementById("detail");
	var content = parent.document.getElementById("content");
  	g_token=find_cookie_value("token");

 cgi_url = "/server/query_group?token="+escape(g_token)+"&flag="+Math.random();
 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Group Information Loading...<p>';


 xmlHttp.open("GET", cgi_url, true);
 xmlHttp.onreadystatechange = group_inquery;
 xmlHttp.send(null);

}

function Cancel_Add_group()
{
	callServer_group_Inquery();
}


function Add_group() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
 //   	alert("Add Group Sucessfully");
    } else
    {
   	alert("Failed to Add Group");
    }
	callServer_group_Inquery();
    }
}
function call_Add_Group()
{

 var group_src_id="groupsrc"; 
 var group_mcsrc_id="groupmcsrc"; 
 var group_src_name="groupname"; 
 var group_concurrentconnection="group_concurrentconnection"; 
 var group_src;
 var group_mcsrc;
 var group_name;
 var group_concurrentconnection;
 var g_item_name;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
 g_item=document.getElementById(group_src_id);
 group_src = g_item.value;

 g_item=document.getElementById(group_mcsrc_id);
 group_mcsrc = g_item.value;

 g_item_name=document.getElementById(group_src_name);
 group_name = g_item_name.value;

g_item_name=document.getElementById(group_concurrentconnection);
 group_concurrentconnection = g_item_name.value;

   	g_token=find_cookie_value("token");

 cgi_url = "/server/add_group?token="+escape(g_token)+ "&group_name=" + escape(group_name)+"&group_concurrent_connection=" + escape(group_concurrentconnection)+ "&group_src=" + escape(group_src)+ "&group_mcsrc=" + escape(group_mcsrc)+"&flag="+Math.random();
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Add_group;
	 xmlHttp.send(null);
}


function call_Add_New_group()
{

var HTML_str;
var group_no;
var len;
g_total_group_no++;
   var content = parent.document.getElementById("content");

	HTML_str=content.innerHTML;
	//len=HTML_str.length-16;
	len=HTML_str.lastIndexOf("</tr>");
	if (len==-1)
	{
		len=HTML_str.lastIndexOf("</TR>");
	}	
//	alert(len);
	len+=5;
	HTML_str=HTML_str.slice(0,len);
	group_no=g_total_group_no;
	HTML_str=HTML_str+'<tr>'+
		      '<td width="100" align="center"><font face="Arial" size="2">'+group_no+'</font></td>'+
		      '<td width="20" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="groupname"'+
	 		' id=groupname'+group_no+
	 		' size="20"/'+
	 		'</font></td>'+
		      '<td width="200" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="groupsrc"'+
	 		' id=groupsrc'+group_no+
	 		' size="35"/'+
	 		'</font></td>';
	 		
		      HTML_str+='<td width="200" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <select size="1" style="width: 180;" name="groupmcsrc" id=groupmcsrc'+group_no+'>';
			HTML_str+='<option selected="selected" value="all">'+'all'+'</option>';
			HTML_str+='</select></font></td>';
		      HTML_str+='<td width="150" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="group_concurrentconnection"'+
	 		' id=group_concurrentconnection'+group_no+
	 		' size="3"/'+
	 		'</font></td>'+
		      '<td id=add_id_button align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_group("'+group_no+'")>'+
	      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>'+
	      	      
		      '<td align="center">'+		      
		      "<a href='javascript:void(0)'"+
		      ' onclick=Cancel_Add_group()>'+
	      	      ' <img border="0" id="delbutton" alt="Cancel" title="Cancel" src="del_icon.PNG"></a></td>'+
	      	      '</tr>';
//	alert(HTML_str);

	       content.innerHTML=HTML_str+'</table>';
  //      alert(ch_list_info.innerHTML);
   
		
}

function update_group() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
 //   	alert("Update Group Sucessfully");
	g_item.value=g_temp;
	g_item.style.backgroundColor = "#ffffff";
    } else if (response==2)
    {
    	alert("Group not existed");
    	callServer_group_Inquery();
    	
    }else
    {
   	alert("Failed to Update Group");
	g_item.value=g_temp;
	g_item.style.backgroundColor = "#ffffff";
    }
	g_item.value=g_temp;
	g_item.style.backgroundColor = "#ffffff";
    }
}

function callServer_update_group(group_no){
	
var group_src_id="groupsrc"+group_no; 
var group_mcsrc_id="groupmcsrc"+group_no; 
 var group_src_name="groupname"+group_no; 
 var group_src_concurrentconnection="groupconcurrentconnection"+group_no; 
 var group_src;
 var group_mcsrc;
 var group_name;
 var group_concurrentconnection;
 var g_item_name;
 var mcoptions=document.getElementById(group_mcsrc_id);
 var opt;
 var i=0;
 var iLen;
 var bFirstItem=1;



var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
 g_item=document.getElementById(group_src_id);
 group_src = g_item.value;
 if (group_src.length>0)
 {

	group_mcsrc='';
	iLen=mcoptions.length;
	 for (i=0;i<iLen;i++)
	 {
	 	opt=mcoptions[i];
	 	//alert(opt.value);
	 	//alert(opt.selected);
	 	if (opt.selected)
	 	{
	 		//alert(opt.value);
	 		if (bFirstItem==0)
	 		{
	 		  group_mcsrc+=','+opt.value;	
			}else
			{
				group_mcsrc+=opt.value;	
				bFirstItem=0;
			}				
	 	}
	 }
	 //alert(group_mcsrc);
	 //g_item=document.getElementById(group_mcsrc_id);
	 //group_mcsrc = g_item.value;
	
	 g_item_name=document.getElementById(group_src_name);
	 group_name = g_item_name.value;
	
	g_item_name=document.getElementById(group_src_concurrentconnection);
	 group_concurrentconnection = g_item_name.value;
	
	    	g_token=find_cookie_value("token");
	
	 confirm_msg="Update Group "+group_no+" Information?";
	  cgi_url = "/server/update_group?token="+escape(g_token)+"&group_no=" + escape(group_no)+"&group_name=" + escape(group_name)+"&group_concurrent_connection=" + escape(group_concurrentconnection)+ "&group_src=" + escape(group_src)+ "&group_mcsrc=" + escape(group_mcsrc)+"&flag="+Math.random();
	if (confirm(confirm_msg))
	 {
		
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = update_group;
		 xmlHttp.send(null);
		 g_temp=g_item.value;
		 // g_item.value=g_item.value+" (updating...)";
		g_item.style.backgroundColor = "#ff0000";
	 }
 }else
 {
 	alert("Channel No. is empty.");
 }
 	
 

}

function Del_group() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
  //   	alert("Delete Group Sucessfully");
    } else
    {
   	alert("Failed to Delete Group");
    }
    	callServer_group_Inquery();
    }
}

function call_Del_group(group_no)
{
  var group_src_id="groupsrc"+group_no; 
 var group_src_name="groupname"+group_no; 
 var group_src;
 var group_name;
 var g_item_name;
 
  var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	
 g_item=document.getElementById(group_src_id);
 group_src = g_item.value;

 g_item_name=document.getElementById(group_src_name);
 group_name = g_item_name.value;
   	g_token=find_cookie_value("token");

 confirm_msg="Delete Group "+group_no+" Information?";
 cgi_url = "/server/del_group?token="+escape(g_token)+ "&group_name=" + escape(group_name)+ "&flag="+Math.random();
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Del_group;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	 g_item.value=g_item.value+" (del...)";
	g_item.style.backgroundColor = "#ff0000";
 }
 

}



function Add_Multiple_User_Info() {

	if (xmlHttp.readyState == 4) 
	{
	    var response = xmlHttp.responseText;
	    var username_id;
	    //alert(response);
	    if (response==1)
	    {
	    	
	    	g_user_no=parseInt(g_user_no)+parseInt(g_multiple_user_no);
	    	if ((g_user_position+g_constant_limit)<=g_user_no)
		{
			if (((g_cur_userno)%g_constant_limit)==1)
			{
				g_user_position=parseInt(g_cur_userno);
			}
			g_user_limit=g_constant_limit;
		}else
		{
			g_user_limit=g_user_no%g_constant_limit;
			if (g_user_limit==0) 
			{
				if (g_user_no<g_user_position)
				{
					g_user_position=g_user_no-g_constant_limit+1;
				}
				g_user_limit=g_constant_limit;
			}
		}
	    	call_get_users(g_user_position,g_user_limit);
	    	//alert(g_username_item.value);
//	    	 	username_id="username"+g_cur_userno;
  //  	g_username_item=document.getElementById(username_id);
    //	alert(g_username_item.value);

	//	g_username_item.focus();
	//	g_username_item.style.backgroundColor = "#00ffff";
	  
	    } else if (response==0)
	    {
	   	alert("Failed to Add Multiple Users");
	    }else if (response==2)
   	   {
   		alert("This function is only for Enterprise version");
		call_get_users(g_user_position,g_user_limit);
 	   } else if (response==3)
	    {
	    	alert("Disk is error(FULL), Please contact administrator");
		call_get_users(g_user_position,g_user_limit);
	    }
	}
 
}
function call_Add_Multiple_User_detail(userno)
{
	var confirm_msg;
	var cgi_url;
	var multiple_user_no;
	var expiration_no;
	var expiration_unit;
	var group;
	//alert(userno);
	g_item=document.getElementById("multiple_user_no");
	multiple_user_no=g_item.value;
	if (multiple_user_no.length==0)
	{
		alert("Multiple User No. is empty");
		return;
	}
	g_multiple_user_no=multiple_user_no;
	//alert(multiple_user_no=g_item.value);
	g_item=document.getElementById("group");
	group=g_item.value;
	
	if (multiple_user_no.length==0)
	{
		alert("Multiple User No. is empty");
		return;
	}
	//alert(multiple_user_no);
	g_item=document.getElementById("expiration_no");
	expiration_no=g_item.value;
	if (expiration_no.length==0)
	{
		alert("'Expiration no.' is empty");
		return;
	}
	//alert(expiration_no);
	g_item=document.getElementById("expiration_unit");
	expiration_unit=g_item.value;

  	g_token=find_cookie_value("token");

	g_cur_userno=userno;
	//alert("111111111");
	//confirm_msg="Add Multiple Users?";
	cgi_url = "/server/add_multiple_user?token="+escape(g_token)+"&userno="+escape(userno)+"&group="+escape(group)+"&multiple_user_no="+escape(multiple_user_no)+"&expiration_no="+escape(expiration_no)+"&expiration_unit="+escape(expiration_unit)+
	"&flag="+Math.random();
	//alert(cgi_url);
//	if (confirm(confirm_msg))
//	{	
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = Add_Multiple_User_Info;
		 xmlHttp.send(null);
//	}
}
function call_Add_Multiple_User(userno) {
   var str;
   var groupname;
   var j;
  var AddMultipleUserWindow;
  var groupname;
  var content = parent.document.getElementById("content");
 	    var username_id;

	g_content=content.innerHTML;

 
	content.innerHTML="";
     str="<head><title>Add Multiple Users</title><link rel='stylesheet' type='text/css' href='menu.css'/>"+'<script src="menu.js"></script></head><body><table align="center">';

  		
 		str+='<tr><td width="120"><font face="Arial"> <font size="2">Multiple User no.: </font></td><td width="100" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="multiple_user_no"'+
 		' id="multiple_user_no"'+
 		' size="5" value="'+
 		'10'+
 		'"/></font></td></tr>';
 		
  
  		str+='<td width="120"><font face="Arial"> <font size="2">Group: </font></td><td width="120" align="center">'+
		' <font face="Arial"> <font size="2">'+
		' <select size="1" name="group" id=group>';
		for (j=0;j<g_total_group_no;j++)
		{
			groupname=g_groupname_array[j];
			if (j>0)
			{
				str+='<option value="'+groupname+'">'+groupname+'</option>';
			}
			else 
			{
				str+='<option selected="selected" value="'+groupname+'">'+groupname+'</option>';
			}	 			
		}
		str+='</select></font></td>';


		str+='<tr><td width="120"><font face="Arial"> <font size="2">Expiration Period: </font></td><td width="100" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="expiration_no"'+
 		' id="expiration_no"'+
 		' size="10" value="'+
 		12+
 		'"/></font></td>';
 		
 		str+='<td width="100" align="center">'+
		' <font face="Arial"> <font size="2">'+
		' <select size="1" name="expiration_unit" id=expiration_unit>'+
		'<option selected="selected" value="month">months</option>'+
		'<option value="year">years</option>'+'</td></tr>';
		
    str+='<tr><td><input type="button" value="Add" onclick=call_Add_Multiple_User_detail("'+userno+'") name="B2" /></td>'+
    '<td><input type="button" value="Cancel" onclick=Cancel_Add_User() name="B3" /></td>'+
    /*		      '<td id=del_id_button width="80" align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=Cancel_Add_User()>'+
	      	      ' <img border="0" id="delbutton" alt="Cancel" title="Cancel" src="del_icon.PNG"></a></td>'+
	      	      */
    '</tr></table></body>';  

  content.innerHTML=str;
      // 	 AddMultipleUserWindow= window.open("", "", "top=300, left=300, width=500, height=150"); 
	//AddMultipleUserWindow.document.write(str); 
	

}
function Add_User_Info() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    var item_add;
    var item_save;
    var item_del;
    var item_more;
    var item_top_total_no;
  //  var item_bottom_total_no;
    if (response==1)
    {
    //	alert("Add User Sucessfully");
  	g_user_no++;
  	if ((g_user_position+g_constant_limit)<=g_user_no)
	{
		if (((g_cur_userno)%g_constant_limit)==1)
		{
			g_user_position=parseInt(g_cur_userno);
		}
		g_user_limit=g_constant_limit;
	}else
	{
		g_user_limit=g_user_no%g_constant_limit;
		if (g_user_limit==0) 
		{
			if (g_user_no<g_user_position)
			{
				g_user_position=g_user_no-g_constant_limit+1;
			}
			g_user_limit=g_constant_limit;
		}
	}
	call_get_users(g_user_position,g_user_limit);
 	
    } else if (response==0)
    {
   	alert("Failed to Add User");
   	//call_get_users();
 	// 	call_get_users(g_user_position,g_user_limit);

    } else if (response==2)
    {
    	alert("Disk is error(FULL), Please contact administrator");
//	call_get_users();
 	//call_get_users(g_user_position,g_user_limit);

    }else if (response==3)
    {
   	//g_item.value=g_temp;
	//g_item.style.backgroundColor = "#ffffff";
  	alert("The user is already in Database");
	//call_get_all_user();
    }else if (response==4)
    {
   	//g_item.value=g_temp;
	//g_item.style.backgroundColor = "#ffffff";
  	alert("Password does not allow the special character ':'");
    }



	//alert(add_id_button.innerHTML);
    }
}

function call_Add_User()
{
 var username_id="username"; 
 var password_id="password"; 
 var group_id="group"; 
 var expired_time_id="expired_time"; 
 var userip_id="userip";
 var macid_id="macid";
 var user_no_id="userno";
 var szpassword;
 var szgroup;
 var expired_time;
 var expired_YY;
 var expired_MM;
 var expired_DD;
 //var paymodel;
 //var user_point;
 var userip;
 var macid;
 var username;
 var usern0;
 var d=new Date();
 var cur_year=d.getFullYear();
 var cur_month=d.getMonth()+1;
 var cur_date=d.getDate();



var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var pos;
	var expired_time_temp;
 	var pos;
	var expired_time_temp;
	var alert_message;

	g_item=document.getElementById(user_no_id);
	user_no=g_item.value;
	/*
	if (user_no>(g_total_user_no+1))
	{
		alert("User No. is invaild.");
		return;
	}
	*/

	g_item=document.getElementById(username_id);
	username=g_item.value;
	if (username.length==0)
	{
		alert("User name is empty");
		return;
	}
	g_item=document.getElementById(expired_time_id);
	expired_time=g_item.value;
	if (expired_time.length==0)
	{
		alert("Expired Time is empty");
		return;
	}else if (expired_time.length>10)
	{
		alert("Date Length is too long(>10)");
		return;
	}
	
	if ((g_user_authorization_mode==1) || (g_user_authorization_mode==0))
	{
		g_item=document.getElementById(password_id);
		szpassword=g_item.value;
		if (szpassword.length==0)
		{
			alert("Pawword is empty");
			return;
		}
		pos=expired_time.indexOf('/');
		if (pos>0)
		{
			expired_MM=expired_time.substring(0,pos);
			expired_time_temp=expired_time.substring(pos+1);
			pos=expired_time_temp.indexOf('/');	
			expired_DD=expired_time_temp.substring(0,pos);
			expired_YY=expired_time_temp.substring(pos+1);
			if (expired_YY<cur_year)
			{
				alert_message="Expired Year should be >="+cur_year;
				alert(alert_message);
				return;
			}
			if ((expired_MM<1)||(expired_MM>12))
			{
				alert("Exipred Month should be between 1 and 12");
				return;
			}
			if ((expired_YY==cur_year)&&(expired_MM<cur_month))
			{
				alert_message="Expired Month should be >"+cur_month;
				alert(alert_message);
				return;
				
			}
			if ((expired_DD<1)||(expired_DD>31))
			{
				alert("Exipred Date should be between 1 and 30");
				return;
			}
			if ((expired_YY==cur_year)&&(expired_MM==cur_month)&&(expired_DD<cur_date))
			{
				alert_message="Expired Date should be >"+cur_date;
				alert(alert_message);
				return;
			}
		}
	}else if (g_user_authorization_mode==2)
	{
		szpassword=null;
	}

	//alert(szpassword);
	g_item=document.getElementById(group_id);
	szgroup=g_item.value;
	//alert(szgroup);
//	g_item=document.getElementById(paymodel_id);
//	paymodel=g_item.value;
//	g_item=document.getElementById(user_point_id);
//	user_point=g_item.value;
	g_item=document.getElementById(userip_id);
	userip=g_item.value;
	g_item=document.getElementById(macid_id);
	macid=g_item.value;

   	g_token=find_cookie_value("token");

g_cur_userno=user_no;
 //confirm_msg="Add User: "+username+" Information?";
 cgi_url = "/server/add_user?token="+escape(g_token)+"&userno="+escape(user_no)+"&username="+escape(username)+
  "&password="+szpassword+
  "&group="+szgroup+
  "&expired_time="+expired_time+
 // "&paymodel="+paymodel+
 // "&user_point="+user_point+
  "&userip="+userip+
  "&macid="+macid+
   "&flag="+Math.random();
 //  alert(cgi_url);

	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Add_User_Info;
	 xmlHttp.send(null);


}
function call_Add_New_User(userno) {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
    	g_token=find_cookie_value("token");
	g_cur_userno=userno;
 cgi_url = "/server/query_group?token="+escape(g_token)+"&flag="+Math.random();

 xmlHttp.open("GET", cgi_url, true);
 xmlHttp.onreadystatechange = group_inquery_item_for_add;
 xmlHttp.send(null);

}

function call_get_first_user(position, limit)
{
	g_user_found_position=0;
	call_get_users(position, limit);
}
function call_get_first_channel(position, limit)
{
	g_channel_found_position=0;
	call_get_channels(position, limit);
}
function call_get_first_movie(position, limit)
{
	g_movie_found_position=0;
	call_get_movies(position, limit);
}

function call_Add_New_User_detail(userno)
{

var HTML_str;
var user_no;
var len;
var paymodel;
var str;
var content = parent.document.getElementById("content");
	
var user_active_no;
var i,j;
var username_id;
var password_id;
var group_id;
var expired_time_id;
var userip_id;
var macid_id;
var reseller_id;
var item_name;
var username;
var szpassword;
var szgroup;
var expired_time;
var userip;
var macid;
var reseller;

var groupname;
var expired_YY;
var expired_MM;
var expired_DD;
var d=new Date();
var cur_year=d.getFullYear();
var cur_month=d.getMonth()+1;
var cur_day=d.getDate();
var bexpired=0;
var pos;
var expired_time_temp;
var yearmsg;
var menustr1;
var menustr2;
	var endposition;
	var position;
	var limit;
	var curren_sequence_no;
	var total_sequence;
	var start_sequence_no;
	var current_position=g_user_position;
	var total_count=g_user_no;
	var pagelineno=0;
	var total_no=0;

	g_content=content.innerHTML;

	user_active_no=total_count;
	user_active_no++;
	 HTML_str= '<table border="0" align="center">'+
	  '<tr>'+
	      '<td width="20" align="center"> <input type="checkbox" name="checkallbox" id=checkallbox  onclick=set_all_checked(g_user_no)></td>'+
	      '<td width="10%" align="center"><font face="Arial" size="2"></font></td>';
	if ((g_user_authorization_mode==1) || (g_user_authorization_mode==0))
	{
		HTML_str+='<td width="10%" align="center"><font face="Arial" size="2">User Name</font></td>'+
		'<td width="10%" align="center"><font face="Arial" size="2">Password</font></td>';
		HTML_str+='<td width="10%" align="center"><font face="Arial" size="2">Group</font></td>'+
		'<td width="10%" align="center"><font face="Arial" size="2">CH List</font></td>'+
		'<td width="10%" align="center"><font face="Arial" size="2">Movie List</font></td>'+
//		'<td width="10%" align="center"><font face="Arial" size="2">Expired Time</font></td>'+
		'<td width="10%" align="center"><font face="Arial" size="2">Expired Time</font></td>'+
		'<td width="10%" align="center"><font face="Arial" size="2">IP</font></td>'+
		'<td width="10%" align="center"><font face="Arial" size="2">MAC ID</font></td>'+
		'<td width="5%" align="center"><font face="Arial" size="2">Reseller</font></td>'+
		'</tr>'+'<tr><td  colspan="11"><hr size="1" color="#66FFFF"></td></tr>';
	}else if (g_user_authorization_mode==2)
	{
		HTML_str+='<td width="20%" align="center"><font face="Arial" size="2">PIN No.</font></td>';
		HTML_str+='<td width="10%" align="center"><font face="Arial" size="2">Group</font></td>'+
		'<td width="10%" align="center"><font face="Arial" size="2">CH List</font></td>'+
		'<td width="10%" align="center"><font face="Arial" size="2">Movie List</font></td>'+
		'<td width="10%" align="center"><font face="Arial" size="2">Expired Time</font></td>'+
		'<td width="10%" align="center"><font face="Arial" size="2">IP</font></td>'+
		'<td width="10%" align="center"><font face="Arial" size="2">MAC ID</font></td>'+
		'<td width="5%" align="center"><font face="Arial" size="2">Reseller</font></td>'+
		'</tr>'+'<tr><td  colspan="10"><hr size="1" color="#66FFFF"></td></tr>';
	}
//	for (i=1,m=1;i<=user_active_no;i++,m++)
//	for (i=1,m=1;i<=g_user_limit;i++,m++)
	pagelineno=parseInt(current_position)+parseInt(g_user_limit)+1;
	for (i=current_position,m=current_position;i<pagelineno;i++,m++)
	{
		
		HTML_str=HTML_str+'<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">';
		
		
		username_id="username"+m; 
		item_name=document.getElementById(username_id);
		
		username = item_name.value;
		//alert(username);
		
		if ((g_user_authorization_mode==1) || (g_user_authorization_mode==0))
		{
			password_id="password"+m; 
			item_name=document.getElementById(password_id);
			szpassword = item_name.value;
		}

		group_id="group"+m; 
		item_name=document.getElementById(group_id);
		szgroup = item_name.value;
		
		expired_time_id="expired_time"+m; 
		item_name=document.getElementById(expired_time_id);
		expired_time = item_name.value;
		
		userip_id="userip"+m; 
		item_name=document.getElementById(userip_id);
		userip = item_name.value;
			
		macid_id="macid"+m; 
		item_name=document.getElementById(macid_id);
		macid = item_name.value;
		
		reseller_id="reseller"+m; 
		item_name=document.getElementById(reseller_id);
		//alert(item_name.innerHTML);
		reseller = item_name.innerHTML;
		

		if ((g_user_authorization_mode==1) || (g_user_authorization_mode==0))
		{
		      HTML_str=HTML_str+'<td width="20" align="center">'+
	 		' <input type="checkbox" name=checkbox'+i+
	 		' id=checkbox'+i+'></td>';
			HTML_str=HTML_str+'<td width="10%" align="center"><font face="Arial"> <font size="2">'+i+'</font></td>'+
			'<td width="10%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input readonly type="text" name="username"'+
			' id=username'+i+' size="12" value="'+
			username+'"/></font></td>'+
			
			'<td width="10%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input type="text" name="password"'+
			' id=password'+i+' size="12" value="'+
			szpassword+'"/></font></td>';
		}else if (g_user_authorization_mode==2)
		{
		      HTML_str=HTML_str+'<td width="20" align="center">'+
	 		' <input type="checkbox" name=checkbox'+i+
	 		' id=checkbox'+i+'></td>';
			HTML_str=HTML_str+'<td width="10%" align="center"><font face="Arial"> <font size="2">'+i+'</font></td>'+
		      '<td width="20%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input readonly type="text" name="username"'+
			' id=username'+i+' size="36" value="'+
			username+'"/></font></td>';
		}
		
		
		HTML_str=HTML_str+'<td width="10%" align="center">'+
		' <font face="Arial"> <font size="2">'+
		' <select size="1" name="group" id=group'+i+'>';
		for (j=0;j<g_total_group_no;j++)
		{
			groupname=g_groupname_array[j];
			//if (szgroup.search(groupname)==-1)
			if (szgroup!=(groupname))
			{
				HTML_str+='<option value="'+groupname+'">'+groupname+'</option>';
			}
			else 
			{
				if (szgroup.length==groupname.length)
				{
					HTML_str+='<option selected="selected" value="'+groupname+'">'+groupname+'</option>';
				}else
				{
					HTML_str+='<option value="'+groupname+'">'+groupname+'</option>';
				}
			}	 			
		}
		HTML_str+='</select></font></td>';
		
		HTML_str=HTML_str+'<td width="10%" align="center">'+
		' <font face="Arial"> <font size="2">'+
		' <select size="1" onchange="call_download_user_chlist('+i+','+'chlist'+i+')" name="ch_list" id=chlist'+i+'>'+
		'<option value="-1">--</option>'+
		'<option value="enigma">Enigma</option>'+
		'<option value="enigma16">Enigma 1.6</option>'+
		'<option value="enigma(RTMP)">Enigma(RTMP)</option>'+
		'<option value="enigma16(RTMP)">Enigma 1.6(RTMP)</option>'+
		'<option value="enigma_no">Enigma(chno)</option>'+
		'<option value="enigma16_no">Enigma 1.6(chno)</option>'+
		'<option value="enigma_no(RTMP)">Enigma(RTMP/chno)</option>'+
		'<option value="enigma16_no(RTMP)">Enigma 1.6(RTMP/chno)</option>'+
		'<option value="m3u">m3u</option>'+
		'<option value="m3u_ts">m3u(MPEG TS)</option>'+
		'<option value="m3u_flv">m3u(FLV)</option>'+
		'<option value="m3u_no">m3u(chno)</option>'+
		'<option value="m3ue_no">m3u(chno with suffix)</option>'+
		'<option value="m3ue_name">m3u(chname with suffix)</option>'+
		'<option value="m3u_rtmp">m3u(RTMP)</option>'+
		'<option value="m3u8">m3u8</option>'+
		'<option value="octagon">octagon</option>'+
		'<option value="ariva">ariva</option>'+
		'<option value="xbmc">XBMC</option>'+
		'<option value="pure">Pure</option>'+
		'<option value="optumuss">Optumuss</option>'+
		'<option value="amiko">Amiko</option>'+
		'<option value="spark">Spark</option>'+
		'<option value="tiger">tiger</option>'+
		'<option value="Bluestar">Bluestar</option>'+
		'<option value="nstreamvod">nStreamVOD</option>'+
		'<option value="m3u_ott">OTT Player</option>'+
		'<option value="script_enigma">*Enigma Script*</option>'+
		'<option value="script_enigma16">*Enigma16 Script*</option>'+
		'<option value="script_mac_address">*MAC Address Script*</option>';
		HTML_str+='</select></font></td>';		
		                         
		HTML_str=HTML_str+'<td width="10%" align="center">'+
		' <font face="Arial"> <font size="2">'+
		' <select size="1" onchange="call_download_user_movielist('+i+','+'movielist'+i+')" name="movie_list" id=movielist'+i+'>'+
		'<option value="-1">--</option>'+
		'<option value="m3u">m3u (Movie)</option>'+
		'<option value="ch_movie_m3u">m3u (Channel/Movie)</option>'+
		'<option value="Bluestar">Bluestar</option>'+
		'<option value="enigma">Enigma</option>'+
		'<option value="enigma16">Enigma 1.6</option>'+
		'<option value="nstreamvod">nStreamVOD</option>'+
 		'<option value="script_enigma">*Enigma Script*</option>'+
		'<option value="script_enigma16">*Enigma16 Script*</option>';
		HTML_str+='</select></font></td>';
		
		
	   	bexpired=0;
	 	pos=expired_time.indexOf('/');
	 	if (pos>0)
	 	{
			expired_MM=expired_time.substring(0,pos);
			expired_time_temp=expired_time.substring(pos+1);
			pos=expired_time_temp.indexOf('/');	
			expired_DD=expired_time_temp.substring(0,pos);
			expired_YY=expired_time_temp.substring(pos+1);
			//yearmsg=cur_year+'/'+cur_month+'/'+cur_day+'--'+expired_YY+'/'+expired_MM+'/'+expired_DD;
	   	    	//alert(yearmsg);
	
	   	    	if (cur_year<expired_YY)
	   	    	{
	   	    		bexpired=0;
	   	    	}else if (cur_year==expired_YY)
	   	    	{
		   	    	if (cur_month<expired_MM)
		   	    	{
		   	    		bexpired=0;
		   	    	}else if (cur_month==expired_MM)
		   	    	{	
			   	    	if (cur_day>expired_DD)
			   	    	{
			   	    		bexpired=1;
			   	    	}else
		   	    		{
		   	    			bexpired=0;
		   	    		}
		   	    	}else if (cur_month>expired_MM)
		   	    	{
		   	    		bexpired=1;
		   	    	}
		   	    	
	   	    	}else if (cur_year>expired_YY)
	    		{
	    			bexpired=1;
	    		}
    		}		
		if (bexpired==0)
		{	 		 		
		      HTML_str+='<td width="18%" align="center">'+
			' <font face="Arial"> <font size="2">'+
			' <input type="text" name="expired_time"'+
			' id=expired_time'+i+' size="12" value="'+
			expired_time+'"/></font></td>';		
		}else
		{
			
			HTML_str+='<td width="18%" align="center">'+
			' <font face="Arial"> <font size="2">'+
			' <input type="text" name="expired_time"  style="background:#ff0000"'+
			' id=expired_time'+i+' size="12" value="'+
			expired_time+'"/></font></td>';		
		
		}
		
		HTML_str+='<td width="10%" align="center">'+
		' <font face="Arial"> <font size="2">'+
		' <input type="text" name="userip"'+
		' id=userip'+i+' size="12" value="'+
		userip+'"/></font></td>';	 			
		
		HTML_str+='<td width="10%" align="center">'+
		' <font face="Arial"> <font size="2">'+
		' <input type="text" name="macid"'+
		' id=macid'+i+' size="12" value="'+
		macid+'"/></font></td>';	 			
		
		HTML_str+='<td id=reseller'+i+' width="10%" align="center">'+
		' <font face="Arial"> <font size="2">'+
		reseller+'</font></td>';	 			
		
		total_no++;
		if (m==userno)
		{
			
			 HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Add_New_User("'+i+'")>'+
			' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';

		      HTML_str+='<td align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_New_Multiple_User("'+i+'")>'+
	      	      ' <img border="0" id="addmultiplebutton" alt="Add Multiple Users" title="Add Multiple Users" src="add_multiple_icon.PNG"></a></td>';

			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Update_User("'+i+'")>'+
			' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
			if (username!="root")
			{
			      	HTML_str+='<td align="center">'+
			      "<a href='javascript:void(0)'"+
			      ' onclick=call_Del_User("'+i+'")>'+
			      ' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
			}
			
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Query_User_More("'+i+'")>'+
			' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td></tr>';

			i++;
			
			HTML_str+='<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
			      '<td width="20" align="center">'+
		 		' <input type="checkbox" name=checkbox'+i+
		 		' id=checkbox'+i+'></td>';
		      HTML_str=HTML_str+'<td width="10%" align="center"><font face="Arial" size="2">'+i+'</font></td>';
			if ((g_user_authorization_mode==1) || (g_user_authorization_mode==0))
 			{
			     HTML_str+='<td width="10%" align="center">'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="username"'+
		 		' id=username'+i+' size="12"/></font></td>'+
	 		      '<td width="10%" align="center">'+
		 		'<font face="Arial" size="2">'+
		 		'<input type="text" name="password"'+
		 		'id=password'+i+' size="12"/></font></td>';
	 		}else if (g_user_authorization_mode==2)
 			{
			     HTML_str+='<td width="20%" align="center">'+
		 		' <font face="Arial" size="2">'+
		 		' <input type="text" name="username"'+
		 		' id=username'+i+' size="36"/></font></td>';
 			}
	 			

		      HTML_str+='<td width="10%" align="center">'+
	 		'<font face="Arial" size="2">'+
			'<select size="1" name="group" id=group'+i+'>';
			
	 		for (j=0;j<g_total_group_no;j++)
	 		{
	 			groupname=g_groupname_array[j];
 				HTML_str+='<option value="'+groupname+'">'+groupname+'</option>';
	 		}
	  		HTML_str+='</select></font></td>';
	  		
	  		HTML_str=HTML_str+'<td width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1">'+
 			'<option value="-1">--</option>'+
			'<option value="enigma">Enigma</option>'+
			'<option value="enigma16">Enigma 1.6</option>'+
			'<option value="enigma(RTMP)">Enigma(RTMP)</option>'+
			'<option value="enigma16(RTMP)">Enigma 1.6(RTMP)</option>'+
			'<option value="enigma_no">Enigma(chno)</option>'+
			'<option value="enigma16_no">Enigma 1.6(chno)</option>'+
			'<option value="enigma_no(RTMP)">Enigma(RTMP/chno)</option>'+
			'<option value="enigma16_no(RTMP)">Enigma 1.6(RTMP/chno)</option>'+
			'<option value="m3u">m3u</option>'+
			'<option value="m3u_ts">m3u(MPEG TS)</option>'+
			'<option value="m3u_flv">m3u(FLV)</option>'+
			'<option value="m3u_no">m3u(chno)</option>'+
			'<option value="m3ue_no">m3u(chno with suffix)</option>'+
			'<option value="m3ue_name">m3u(chname with suffix)</option>'+
			'<option value="m3u_rtmp">m3u(RTMP)</option>'+
			'<option value="m3u8">m3u8</option>'+
 			'<option value="octagon">octagon</option>'+
			'<option value="ariva">ariva</option>'+
 			'<option value="xbmc">XBMC</option>'+
 			'<option value="pure">Pure</option>'+
			'<option value="optumuss">Optumuss</option>'+
			'<option value="amiko">Amiko</option>'+
			'<option value="spark">Spark</option>'+
			'<option value="tiger">Tiger</option>'+
			'<option value="Bluestar">Bluestar</option>'+
			'<option value="nstreamvod">nStreamVOD</option>'+
 			'<option value="m3u_ott">OTT Player</option>'+
			'<option value="script_enigma">*Enigma Script*</option>'+
			'<option value="script_enigma16">*Enigma16 Script*</option>'+
			'<option value="script_mac_address">*MAC Address Script*</option>';
	  		HTML_str+='</select></font></td>';
	 		 		
	  		HTML_str=HTML_str+'<td width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1">'+
 			'<option value="-1">--</option>'+
			'<option value="m3u">m3u (Movie)</option>'+
			'<option value="ch_movie_m3u">m3u (Channel/Movie)</option>'+
			'<option value="Bluestar">Bluestar</option>'+
			'<option value="enigma">Enigma</option>'+
			'<option value="enigma16">Enigma 1.6</option>'+
 			'<option value="nstreamvod">nStreamVOD</option>'+
 			'<option value="script_enigma">*Enigma Script*</option>'+
			'<option value="script_enigma16">*Enigma16 Script*</option>';
	  		HTML_str+='</select></font></td>';

		      HTML_str+='<td width="18%" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="expired_time"'+
	 		' id=expired_time'+i+' size="12"/></font></td>'; 		

		      HTML_str+='<td width="10%" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="userip"'+
	 		' id=userip'+i+' size="12"/></font></td>';

		      HTML_str+='<td width="10%" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="macid"'+
	 		' id=macid'+i+' size="12"/></font></td>';

		      HTML_str+='<td id=reseller'+i+' align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>';
	 		
		      
		       HTML_str+='<td id=add_id_button align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_User("'+i+'")>'+
	      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>'+
	      	      	      	      
		      '<td id=copy_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+

		      '<td id=save_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>'+
	      	      
		      '<td id=del_id_button width="80" align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=Cancel_Add_User()>'+
	      	      ' <img border="0" id="delbutton" alt="Cancel" title="Cancel" src="del_icon.PNG"></a></td>'+

		      '<td id=more_id_button align="center">'+		      
		      ' <font face="Arial" size="2"></font></a></td>';
		      
		      
	      	}else
		{	  
			
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Add_New_User("'+i+'")>'+
			' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>';

		      HTML_str+='<td align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_New_Multiple_User("'+i+'")>'+
	      	      ' <img border="0" id="addmultiplebutton" alt="Add Multiple Users" title="Add Multiple Users" src="add_multiple_icon.PNG"></a></td>';
	      	      

			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Update_User("'+i+'")>'+
			' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
			if (username!="root")
			{
			      	HTML_str+='<td align="center">'+
			      "<a href='javascript:void(0)'"+
			      ' onclick=call_Del_User("'+i+'")>'+
			      ' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
			}
			
			HTML_str+='<td align="center">'+
			"<a href='javascript:void(0)'"+
			' onclick=call_Query_User_More("'+i+'")>'+
			' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>';

		}
		HTML_str+='</tr>';
				
	}
	HTML_str=HTML_str+'</table>';
       //  alert(user_list_info.innerHTML);
      // alert(HTML_str);
  	menustr1='<table width=100%><tr>';
/* 		if (g_show_free_version==1)
		{
			menustr1+='<td><font face="Arial" size="2">Cut</font>'+'&nbsp&nbsp&nbsp'+
	 	      '<font face="Arial" size="2">Copy</font>'+'&nbsp&nbsp&nbsp'+
	 	      '<font face="Arial" size="2">Paste</font>'+'&nbsp&nbsp&nbsp';
		}else
		{
			menustr1+="<td> <a href='javascript:void(0)' onclick=callezserver_cut_selected_user()>"+
	 	      '<font face="Arial" size="2">Cut</font></a>'+'&nbsp&nbsp&nbsp'+
	 	      "<a href='javascript:void(0)' onclick=callezserver_copy_selected_user()>"+
	 	      '<font face="Arial" size="2">Copy</font></a>'+'&nbsp&nbsp&nbsp'+
	 	      "<a href='javascript:void(0)' onclick=callezserver_paste_selected_user()>"+
	 	      '<font face="Arial" size="2">Paste</font></a>'+'&nbsp&nbsp&nbsp';
		}
			
		
	      menustr1+="<a href='javascript:void(0)' onclick=callezserver_delete_selected_user()>"+
 	      '<font face="Arial" size="2">Delete</font></a>'+'&nbsp&nbsp&nbsp'+
	      //"<a href='javascript:void(0)' onclick=call_export_user_profile()>"+
	      //'<font face="Arial" size="2">Export</font></a>'+'&nbsp&nbsp&nbsp'+
	      '</td><td><font face="Arial" size="2"> <input name="user_search_field" id="user_search_field" size="20"/></font><font face="Arial"><font size="2"></font>'+
	   '<input type="button" value="Search" onclick="javascript:search_user();" name="search_user" /></font>'+
	   '<input type="button" value="Go to" onclick="javascript:goto_line_no(3);" name="goto_user_no" /></font>'+	   
	   '</td></tr>'+
	      '</table>';
	      */
      	      menustr1+='<td width=55%"></td>'+'<td width=45%>'+
 	      //'<Input type="button" value="Export" onclick="javascript:call_export_user_profile();" />'+
 	      '<input type="button" value="Delete" onclick="javascript:callezserver_delete_selected_user();" />'+
	      '<input name="user_search_field" id="user_search_field" size="20" value="'+g_search_text+'"/></font><font face="Arial">'+
	   '<input type="button" value="Search" onclick="javascript:callServer_search_user();" name="search_user" />'+
	   '</td></tr>'+
	      '</table>';

      	//content.innerHTML=menustr1+HTML_str;
	if (total_count==0)
	{
		current_position=0;
		endposition=0;
	}else
	{
		endposition=current_position+total_no-1;
	}
//	menustr2='<table width=100%><tr><td>'+'<font face="Arial"> <font size="2">Showing '+ current_position+' to '+endposition+' of '+total_count+' users</td>';
	menustr2='<table width=100%><tr><td width="13%" align="right">'+'<font face="Arial"> <font size="2">Showing '+ current_position+' to '+endposition+' of </td>';
	menustr2+='<td width="20%" id=total_no_top_id>'+'<font face="Arial"> <font size="2">'+total_count+' users</td>';
	position=1;
	limit=g_constant_limit;
	if (total_count>g_constant_limit)
	{
		menustr2+='<td width="67%"><font face="Arial" size="2"><input type="button" value="First" onclick="javascript:call_get_first_user('+position+','+limit+')"; /></font>';
	
		if (current_position-g_constant_limit<0)
		{
				
			menustr2+='<font face="Arial" size="2"><input type="button" disabled value="Previous" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
		}else
		{
			position=current_position-g_constant_limit;
			if ((position+g_constant_limit)<=total_count)
			{
				limit=g_constant_limit;
			}else
			{
				limit=total_count%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
			}
			menustr2+='<font face="Arial" size="2"><input type="button" value="Previous" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
		}
		// user sequence
		total_sequence=Math.floor(total_count/g_constant_limit);
		//alert(total_sequence);
		if ((total_count%g_constant_limit) > 0)
		{
			total_sequence++;
		}
		
		curren_sequence_no=Math.floor(current_position/g_constant_limit)+1;
		//alert(curren_sequence_no);
		if ((total_sequence-curren_sequence_no)<g_sequence_constant_limit)
		{
			start_sequence_no=total_sequence-g_sequence_constant_limit;
		}else
		{
			start_sequence_no=curren_sequence_no-(g_sequence_constant_limit/2);
		}
		//alert(start_sequence_no);
		if (start_sequence_no<=0) start_sequence_no=1;
		//if (total_sequence<g_sequence_constant_limit)
		//{
		//	start_sequence_no=1;
		//}
		for (i=(start_sequence_no-1)*g_constant_limit+1,j=start_sequence_no,k=1;;j++,k++)
		{
			if (j>=total_sequence)
			{
				position=i;
				limit=total_count%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
				if (j<10)
				{			
					if (j==curren_sequence_no)
					{
						menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="0'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
					}else
					{
						menustr2+='<font face="Arial" size="2"><input type="button" value="0'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
					}
				}else
				{
					if (j==curren_sequence_no)
					{
						menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
					}else
					{
						menustr2+='<font face="Arial" size="2"><input type="button" value="'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
					}
				}
				break;
			}
			if (k<=g_sequence_constant_limit)
			{
				position=i;
				limit=g_constant_limit;
				if (j<10)
				{
					if (j==curren_sequence_no)
					{
						menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="0'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
					}else
					{
						menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="0'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
					}
				}else
				{
					if (j==curren_sequence_no)
					{
						menustr2+='<font face="Arial" size="2"><input type="button" value="'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
					}else
					{
						menustr2+='<font face="Arial" size="2"><input type="button" value="'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
					}
				}
				i+=g_constant_limit;
			}else
			{
				
				break;
			}
			
			
		}
		if (endposition+1<=total_count)
		{
			position=endposition+1;
			if ((position+g_constant_limit)<=total_count)
			{
				limit=g_constant_limit;
			}else
			{
				limit=total_count%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
			}
			menustr2+='<font face="Arial" size="2"><input type="button" value="Next" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
		}else
		{
			menustr2+='<font face="Arial" size="2"><input type="button" disabled value="Next" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
		}
		if ((total_count%g_constant_limit)==0)
		{
			position=total_count-g_constant_limit+1;
			limit=g_constant_limit;
		}else
		{
			position=total_count-(total_count%g_constant_limit)+1;
			limit=total_count%g_constant_limit;
			if (limit==0) limit=g_constant_limit;
		}
		menustr2+='<font face="Arial" size="2"><input type="button" value="Last" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
		menustr2+='</td></tr></table>';
	}else
	{
		menustr2+='<td>';
	}
      	content.innerHTML=menustr1+HTML_str+menustr2;
      	//alert(content.innerHTML);

}
function Del_User_Info() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    	alert("Delete User Sucessfully");
    } else if (response==2)
    {
     	alert("Disk is error(FULL), Please contact administrator");  	
    } else if (response==0)
    {
   	alert("Failed to Delete User");
    }
    	call_get_all_user();
    }
}

//nction call_Del_User(user_no,username,szpassword,expired_time,paymodel,user_point)
function call_Del_User(user_no)
{
 var username_id="username"+user_no; 
 var username;

var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
 
	g_item=document.getElementById(username_id);
	username=g_item.value;
	
   	g_token=find_cookie_value("token");

 confirm_msg="Delete User: "+username+" Information?";
// cgi_url = "/server/del_user?token="+escape(g_token)+"&user_no="+escape(user_no)+"&username="+escape(username)+"&flag="+Math.random();
 cgi_url = "/server/del_user?token="+escape(g_token)+"&username="+escape(username)+"&flag="+Math.random();
  // alert(cgi_url);
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Del_User_Info;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	 g_item.value=g_item.value+" (del...)";
	g_item.style.backgroundColor = "#ff0000";
 }
 

}

function Save_User_More() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    	alert("Save User More Sucessfully");
    } else if (response==2)
    {
    	alert("Disk is error(FULL), Please contact administrator");
    } else if (response==0)
    {
   	alert("Failed to Save User More");
    }
   // call_get_all_user();
  }
}

function callServer_Save_More(user_no,username)
{

   var rating_password_id="rating_password";
   var user2ndip_id="user2ndip";
   var user3rdip_id="user3rdip";
   var user4thip_id="user4thip";
   var user5thip_id="user5thip";
   var level_id="level";
   var max_connection_id="max_connection";
   var paymodel_id="paymodel";
   var user_point_id="user_point";
   var isp_lock_id="isp_lock";
   var smart_phone_id="smart_phone";
   var tablet_id="tablet";
   var desktop_id="desktop";
   var tv_id="tv";
   var first_name_id="first_name";
   var last_name_id="last_name";
   var address_id="address";
   var city_id="city";
   var zip_id="zip";
   var tel_id="tel";
   var email_id="email";
   
   var user2ndip;
   var user3rdip;
   var user4thip;
   var user5thip;

   var rating_password;
   var level;
   var max_connection;
   var paymodel;
   var user_point;
   var isp_lock;
   var smart_phone;
   var tablet;
   var desktop;
   var tv;
   var first_name;
   var last_name;
   var address;
   var city;
   var zip;
   var tel;
   var email;
 

var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 

	g_item=document.getElementById(user2ndip_id);
	user2ndip=g_item.value;
	
	g_item=document.getElementById(user3rdip_id);
	user3rdip=g_item.value;
	
	g_item=document.getElementById(user4thip_id);
	user4thip=g_item.value;
	
	g_item=document.getElementById(user5thip_id);
	user5thip=g_item.value;

	g_item=document.getElementById(rating_password_id);
	rating_password=g_item.value;

	g_item=document.getElementById(level_id);
	level=g_item.value;
	
	g_item=document.getElementById(max_connection_id);
	max_connection=g_item.value;

	g_item=document.getElementById(paymodel_id);
	paymodel=g_item.value;

	g_item=document.getElementById(user_point_id);
	user_point=g_item.value;

	g_item=document.getElementById(isp_lock_id);
	isp_lock=g_item.value;

	g_item=document.getElementById(smart_phone_id);
//	alert(g_item);
	smart_phone=g_item.value;
	
	g_item=document.getElementById(tablet_id);
	tablet=g_item.value;
	g_item=document.getElementById(desktop_id);
	desktop=g_item.value;
	g_item=document.getElementById(tv_id);
	tv=g_item.value;
	g_item=document.getElementById(first_name_id);
	first_name=g_item.value;
	g_item=document.getElementById(last_name_id);
	last_name=g_item.value;
	g_item=document.getElementById(address_id);
	address=g_item.value;
	g_item=document.getElementById(city_id);
	city=g_item.value;
	g_item=document.getElementById(zip_id);
	zip=g_item.value;
	g_item=document.getElementById(tel_id);
	tel=g_item.value;
	g_item=document.getElementById(email_id);
	email=g_item.value;

   	g_token=find_cookie_value("token");

 confirm_msg="Save User: "+username+" Information?";
 cgi_url = "/server/save_user_more?token="+escape(g_token)+"&username="+escape(username)+
  "&user2ndip="+user2ndip+
  "&user3rdip="+user3rdip+
  "&user4thip="+user4thip+
  "&user5thip="+user5thip+
  "&rating_password="+rating_password+
  "&level="+level+
  "&max_connection="+max_connection+
  "&paymodel="+paymodel+
  "&user_point="+user_point+
  "&isp_lock="+isp_lock+
  "&smart_phone="+smart_phone+
  "&tablet="+tablet+
  "&desktop="+desktop+
  "&tv="+tv+
  "&first_name="+first_name+
  "&last_name="+last_name+
  "&address="+address+
  "&city="+city+
  "&zip="+zip+
  "&tel="+tel+
  "&email="+email+
   "&flag="+Math.random();
 //  alert(cgi_url);
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Save_User_More;
	 xmlHttp.send(null);

 }


}
function Query_User_More() {
   var str;
   var i;
   var username;
   var user2ndip;
   var user3rdip;
   var user4thip;
   var user5thip;
   var level;
   var max_connection;
   var cur_connection;
   var rating_password;
   var paymodel;
   var paymodel_option;
   var user_point;
   var isp_lock;
   var isp_name;
   var smart_phone;
   var tablet;
   var desktop;
   var tv;
   var first_name;
   var last_name;
   var address;
   var city;
   var zip;
   var tel;
   var email;
   var UserDetailWindow
   	var prev_user_no;
	var next_user_no;
	var total_user_no;
	var nObj;

   // var detail = parent.document.getElementById("detail");
	

	// detail.innerHTML="";

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText.split("\r\n");
     str="<head><title>EZserver Subscriber</title><link rel='stylesheet' type='text/css' href='menu.css'/>"+'<script src="menu.js"></script></head><body><table align="center">';
  //   str='';
 //		alert(response[0]);
 		i=0;
	 	strlength=response[i].length;
   	    	username=response[i].slice(9,strlength);
   	    	
  	    	i++;
    	 	strlength=response[i].length;
   	    	user2ndip=response[i].slice(10,strlength);
  	    	
  	    	i++;
  	    	//alert(response[i]);
    	 	strlength=response[i].length;
   	    	user3rdip=response[i].slice(10,strlength);
  	    	
  	    	i++;
    	 	strlength=response[i].length;
   	    	user4thip=response[i].slice(10,strlength);
   	    	
  	    	i++;
  	    	//alert(response[i]);
    	 	strlength=response[i].length;
   	    	user5thip=response[i].slice(10,strlength);

  	    	i++;
    	 	strlength=response[i].length;
   	    	rating_password=response[i].slice(16,strlength);

  	    	i++;
    	 	strlength=response[i].length;
   	    	level=response[i].slice(6,strlength);

 	    	i++;
    	 	strlength=response[i].length;
   	    	max_connection=response[i].slice(14,strlength);

 	    	i++;
    	 	strlength=response[i].length;
   	    	cur_connection=response[i].slice(14,strlength);

   	    	i++;
    	 	strlength=response[i].length;
   	    	paymodel=response[i].slice(9,strlength);
   	    	
   	    	i++;
	 	strlength=response[i].length;
   	    	user_point=response[i].slice(11,strlength);
 	    	
   	    	i++;
	 	strlength=response[i].length;
   	    	isp_lock=response[i].slice(9,strlength);

   	    	i++;
	 	strlength=response[i].length;
   	    	isp_name=response[i].slice(9,strlength);
 
 
  	    	i++;
	 	strlength=response[i].length;
   	    	smart_phone=response[i].slice(12,strlength);
   	    	
   	    	i++;
     	 	strlength=response[i].length;
   	    	tablet=response[i].slice(7,strlength);
   	    	
   	    	i++;
     	 	strlength=response[i].length;
   	    	desktop=response[i].slice(8,strlength);
   	    	
   	    	i++;
     	 	strlength=response[i].length;
   	    	tv=response[i].slice(3,strlength);
   	    	
   	    	i++;
    	 	strlength=response[i].length;
   	    	first_name=response[i].slice(11,strlength);
   	    	
   	    	i++;
    	 	strlength=response[i].length;
   	    	last_name=response[i].slice(10,strlength);
   	    	
   	    	i++;
    	 	strlength=response[i].length;
   	    	address=response[i].slice(8,strlength);
   	    	
   	    	i++;
    	 	strlength=response[i].length;
   	    	city=response[i].slice(5,strlength);
   	    	
   	    	i++;
    	 	strlength=response[i].length;
   	    	zip=response[i].slice(4,strlength);
   	    	 	    	
   	    	i++;
   	 	strlength=response[i].length;
   	    	tel=response[i].slice(4,strlength);
   	    	
   	    	i++;
   	 	strlength=response[i].length;
   	    	email=response[i].slice(6,strlength);
 
  		
  		if (window.self.name=="UserDetailWindow")
   		{
   			nObj=window.self.document.getElementById("total_user_no");
   			//alert(nObj);
   			//alert(nObj.innerText);
   			
   			total_user_no=parseInt(nObj.innerText);
   			//alert(total_user_no);
   		}else
   		{
   			total_user_no=g_user_no;
   		}
//  		str+='<tr><td><font face="Arial"> <font size="2">User : </font></td><td width="350" height="23"><table><tr><td><font face="Arial"> <font size="2"><b>'+username+'</b> - '+g_cur_userno+' /</font></td><td id=total_user_no> <font size="2">'+total_user_no+'</font></td></tr></table></td></tr>';
 		str+='<tr><td><table><tr><td><font face="Arial"> <font size="2">User : </font></td><td><font size="2"><b>'+g_cur_userno+'</b> / </font></td><td id=total_user_no><font size="2">'+total_user_no+'</font></td></tr></table></td><td width="350" height="23"><font face="Arial"> <font size="2"><b>'+username+'</b></font></td></tr>';
 		
 		/*
 		str+='<tr><td><font face="Arial"> <font size="2">User: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		username+'</font></td></tr>';
 		*/
 		
		str+='<tr><td><font face="Arial"> <font size="2">IP 2: </font></td><td width="16" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="user2ndip"'+
 		' id="user2ndip"'+
 		' size="16" value="'+
 		user2ndip+
 		'"/></font></td></tr>';

		str+='<tr><td><font face="Arial"> <font size="2">IP 3: </font></td><td width="16" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="user3rdip"'+
 		' id="user3rdip"'+
 		' size="16" value="'+
 		user3rdip+
 		'"/></font></td></tr>';

		str+='<tr><td><font face="Arial"> <font size="2">IP 4: </font></td><td width="16" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="user4thip"'+
 		' id="user4thip"'+
 		' size="16" value="'+
 		user4thip+
 		'"/></font></td></tr>';

		str+='<tr><td><font face="Arial"> <font size="2">IP 5: </font></td><td width="16" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="user5thip"'+
 		' id="user5thip"'+
 		' size="16" value="'+
 		user5thip+
 		'"/></font></td></tr>';

		str+='<tr><td><font face="Arial"> <font size="2">Rating Password: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="rating_password"'+
 		' id="rating_password"'+
 		' size="16" value="'+
 		rating_password+
 		'"/></font></td></tr>';

 		str+='<tr><td><font face="Arial"> <font size="2">Level: </font></td><td width="350" height="23">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" name="level" id="level">';
 		if (level==0)
 		{
			str+='<option selected="selected" value="0">'+"User"+'</option>'+
			'<option value="1">'+"Administrator"+'</option>'+
			'<option value="2">'+"Super Reseller"+'</option>'+
			'<option value="3">'+"Reseller"+'</option>'+
			'<option value="4">'+"Restreamer"+'</option>';
			str+='</select></font></td></tr>';
 			
 		}else if (level==1)
 		{
			str+='<option value="0">'+"User"+'</option>'+
			'<option selected="selected" value="1">'+"Administrator"+'</option>'+
			'<option value="2">'+"Super Reseller"+'</option>'+
			'<option value="3">'+"Reseller"+'</option>'+
			'<option value="4">'+"Restreamer"+'</option>';
			str+='</select></font></td></tr>';
 		}else if (level==2)
 		{
			str+='<option value="0">'+"User"+'</option>'+
			'<option value="1">'+"Administrator"+'</option>'+
			'<option selected="selected" value="2">'+"Super Reseller"+'</option>'+
			'<option value="3">'+"Reseller"+'</option>'+
			'<option value="4">'+"Restreamer"+'</option>';
			str+='</select></font></td></tr>';
 		}else if (level==3)
 		{
			str+='<option value="0">'+"User"+'</option>'+
			'<option value="1">'+"Administrator"+'</option>'+
			'<option value="2">'+"Super Reseller"+'</option>'+
			'<option selected="selected" value="3">'+"Reseller"+'</option>'+
			'<option value="4">'+"Restreamer"+'</option>';
			str+='</select></font></td></tr>';
 		}else if (level==4)
 		{
			str+='<option value="0">'+"User"+'</option>'+
			'<option value="1">'+"Administrator"+'</option>'+
			'<option value="2">'+"Super Reseller"+'</option>'+
			'<option value="3">'+"Reseller"+'</option>'+
			'<option selected="selected" value="4">'+"Restreamer"+'</option>';
			str+='</select></font></td></tr>';
 		}
 		
 		
  		
 		 str+='<tr><td><font face="Arial"> <font size="2">Pay Model: </font></td><td width="350" height="23">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" name="paymodel" id="paymodel">';
	 		for (j=0;j<3;j++)
	 		{
	 			paymodel_option=g_paymodel_array[j];
	 			if (paymodel.search(paymodel_option)==-1)
	 			{
	 				str+='<option value="'+paymodel_option+'">'+paymodel_option+'</option>';
	 			}
	 			else
	 			{
	 				str+='<option selected="selected" value="'+paymodel_option+'">'+paymodel_option+'</option>';
	 			}	 			
	 		}
 		str+='</select></font></td></tr>';

 		str+='<tr><td><font face="Arial"> <font size="2">ISP Lock: </font></td><td width="350" height="23">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" name="isp_lock" id="isp_lock">';
 		if (isp_lock=="OFF")
 		{
			str+='<option selected="selected" value="OFF">'+"OFF"+'</option>'+
			'<option value="ON">'+"ON"+'</option>';
			str+='</select></font></td></tr>';
 			
 		}else if (isp_lock=="ON")
 		{
			str+='<option selected="selected" value="ON">'+"ON"+'</option>'+
			'<option value="OFF">'+"OFF"+'</option>';
			str+='</select></font></td></tr>';
			if (isp_name!="ON")
			{
		 		str+='<tr><td><font face="Arial"> <font size="2">ISP Name: </font></td><td width="350" height="23">'+
		 		' <font face="Arial"> <font size="2">'+
		 		isp_name+'</font></td></tr>';
	 		}else
	 		{
		 		str+='<tr><td><font face="Arial"> <font size="2">ISP Name: </font></td><td width="350" height="23">'+
		 		' <font face="Arial"> <font size="2">'+
		 		"NULL"+'</font></td></tr>';
	 		}
 		}
		
		str+='<tr><td><font face="Arial"> <font size="2">Max. Connections: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="max_connection"'+
 		' id="max_connection"'+
 		' size="16" value="'+
 		max_connection+
 		'"/></font></td></tr>';

 		str+='<tr><td><font face="Arial"> <font size="2">Active Connections: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		cur_connection+'</font></td></tr>';

		str+='<tr><td><font face="Arial"> <font size="2">User Point: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="user_point"'+
 		' id="user_point"'+
 		' size="16" value="'+
 		user_point+
 		'"/></font></td></tr>';


 		str+='<tr><td><font face="Arial"> <font size="2">Smart Phone No.: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="smart_phone"'+
 		' id="smart_phone"'+
 		' size="16" value="'+
 		smart_phone+
 		'"/></font></td></tr>';

 		str+='<tr><td><font face="Arial"> <font size="2">Tablet ID: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="tablet"'+
 		' id="tablet"'+
 		' size="16" value="'+
 		tablet+
 		'"/></font></td></tr>';

		str+='<tr><td><font face="Arial"> <font size="2">Desktop ID: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="desktop"'+
 		' id="desktop"'+
 		' size="16" value="'+
 		desktop+
 		'"/></font></td></tr>';

 		str+='<tr><td><font face="Arial"> <font size="2">TV ID: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="tv"'+
 		' id="tv"'+
 		' size="16" value="'+
 		tv+
 		'"/></font></td></tr>';
 		
 		str+='<tr><td><font face="Arial"> <font size="2">First Name: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="first_name"'+
 		' id="first_name"'+
 		' size="16" value="'+
 		first_name+
 		'"/></font></td></tr>';
 		
 		str+='<tr><td><font face="Arial"> <font size="2">Last Name: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="last_name"'+
 		' id="last_name"'+
 		' size="16" value="'+
 		last_name+
 		'"/></font></td></tr>';
 		
 		str+='<tr><td><font face="Arial"> <font size="2">Adress: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="address"'+
 		' id="address"'+
 		' size="50" value="'+
 		address+
 		'"/></font></td></tr>';
 		
 		str+='<tr><td><font face="Arial"> <font size="2">City: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="city"'+
 		' id="city"'+
 		' size="16" value="'+
 		city+
 		'"/></font></td></tr>';
 		
 		str+='<tr><td><font face="Arial"> <font size="2">ZIP: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="zip"'+
 		' id="zip"'+
 		' size="16" value="'+
 		zip+
 		'"/></font></td></tr>';
 		
 		str+='<tr><td><font face="Arial"> <font size="2">Tel: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="tel"'+
 		' id="tel"'+
 		' size="16" value="'+
 		tel+
 		'"/></font></td></tr>';
  
  		str+='<tr><td><font face="Arial"> <font size="2">Email: </font></td><td width="350" height="23">'+
 		' <font face="Arial"> <font size="2">'+
 		' <input type="text" name="email"'+
 		' id="email"'+
 		' size="30" value="'+
 		email+
 		'"/></font></td></tr>';
 	    str+='<tr><td><input type="button" value="Save" onclick=callServer_Save_More("'+g_cur_userno+'"'+','+'"'+username+'") name="B2" /></td>';
 
	    if (parseInt(g_cur_userno)>1)
	    {
	    	    prev_user_no=parseInt(g_cur_userno)-1;
		    str+='<td width="350"  height="23"><input type="button" value="Prev" onclick=call_Query_User_More_by_UserNo("'+prev_user_no+'") name="Prev" />';
	    }else
	    {
		    str+='<td width="350"  height="23"><input type="button" disabled value="Prev" onclick=call_Query_User_More_by_UserNo("'+prev_user_no+'") name="Prev" />';
	    }
	    if (parseInt(g_cur_userno)<total_user_no)
	    {
	    	    next_user_no=parseInt(g_cur_userno)+1;
		    str+='&nbsp&nbsp&nbsp<input type="button" value="Next" onclick=call_Query_User_More_by_UserNo("'+next_user_no+'") name="Next" />';
	    }else
	    {
	    	    str+='&nbsp&nbsp&nbsp<input disabled type="button" value="Next" onclick=call_Query_User_More_by_UserNo("'+next_user_no+'") name="Next" />';
	    }
	    
	     str+='&nbsp&nbsp&nbsp<input type="button" value="Stop connections" onclick=call_stop_user_connections("'+g_username+'"'+','+'"'+cur_connection+'") name="B1" />';  
	     
	    //str+='&nbsp&nbsp&nbsp<input type="button" value="Stop connections" onclick=call_stop_user_connections("'+g_username+'"'+','+'"'+cur_connection+'") name="B1" />';  
	    str+='</td></tr>';
	    	
	    str+='</table></body>';  
   	if (window.self.name=="UserDetailWindow")
   	{
   		window.self.document.body.innerHTML=str;
   	}else
   	{
   		if (g_UserDetailWindow && !g_UserDetailWindow.closed)
   		{
   			g_UserDetailWindow.focus();
   		}else
   		{
	  		UserDetailWindow= window.open("", "UserDetailWindow", "top=100, left=200, width=600, height=650"); 
	 		UserDetailWindow.document.write(str);
	 		g_UserDetailWindow=UserDetailWindow;
 		}
   	}
  			

  }
}

function call_Query_User_More(user_no)
{
 var username_id="username"+user_no; 
 var username;

var confirm_msg;
 	var cgi_url;
	var cookieStr;

 

	g_item=document.getElementById(username_id);
	username=g_item.value;
	g_username=username;
	g_cur_userno=user_no;
	//alert(g_cur_userno);
	//g_user_no=user_no;
	
   	g_token=find_cookie_value("token");

// confirm_msg="Get User: "+username+" more Information?";
 cgi_url = "/server/query_user_more?token="+escape(g_token)+"&username="+escape(username)+"&flag="+Math.random();
  // alert(cgi_url);
// if (confirm(confirm_msg))
// {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Query_User_More;
	 xmlHttp.send(null);
 //}
 

}
function call_Query_User_More_by_UserNo(user_no)
{
 	var cgi_url;
	g_cur_userno=user_no;
	//alert(g_cur_userno);
	
   	g_token=find_cookie_value("token");

 cgi_url = "/server/query_user_more?token="+escape(g_token)+"&user_no="+user_no+"&flag="+Math.random();
  // alert(cgi_url);
// if (confirm(confirm_msg))
// {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Query_User_More;
	 xmlHttp.send(null);
 //}
 

}
function Stop_User_Connections() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    	alert("Stop connections");
    } else if (response==0)
    {
   	alert("Failed to Stop connections");
    }
    }
}
function call_stop_user_connections(username,conno)
{
 //var username_id="username"+user_no; 
 //var username;

var confirm_msg;
 	var cgi_url;
	var cookieStr;

 
	//g_item=document.getElementById(username_id);
	//alert(g_item);
	//username=g_item.value;
	g_username=username;
//	alert(g_username);
	//g_user_no=user_no;
	
   	g_token=find_cookie_value("token");

 confirm_msg="Stop User("+username+") "+conno+" connections?";
 cgi_url = "/server/stop_user_connections?token="+escape(g_token)+"&username="+escape(username)+"&flag="+Math.random();
//  alert(cgi_url);
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Stop_User_Connections;
	 xmlHttp.send(null);
}
 

}
function Update_User_Info() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    	alert("Update User Sucessfully");
    } else if (response==2)
    {
    	alert("Disk is error(FULL), Please contact administrator");
    } else if (response==0)
    {
   	alert("Failed to Update User");
    }else if (response==3)
    {
   	alert("Primay Key can not be changed");
	call_get_all_user();
    } else if (response==4)
    {
  	alert("Password does not allow the special character ':'");
    }
	g_item.value=g_temp;
	g_item.style.backgroundColor = "#ffffff";
    }
}

//function call_Update_User(user_no,username,szpassword,expired_time,paymodel,user_point)
function call_Update_User(user_no)
{
 var username_id="username"+user_no; 
 var password_id="password"+user_no; 
 var group_id="group"+user_no; 
 var expired_time_id="expired_time"+user_no; 
 //var paymodel_id="paymodel"+user_no; 
 //var user_point_id="user_point"+user_no;
 var userip_id="userip"+user_no;
 var macid_id="macid"+user_no;

 var szpassword;
 var szgroup;
 var expired_time;
 //var paymodel;
 //var user_point;
 var username;
 var userip;
 var macid;

var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 var d=new Date();
 var cur_year=d.getFullYear();
 var cur_month=d.getMonth()+1;
 var cur_date=d.getDate();
 var alert_message;
 
	g_item=document.getElementById(username_id);
	username=g_item.value;
	if (username.length==0)
	{
		alert("User name is empty");
		return;
	}	
	g_item=document.getElementById(expired_time_id);
	expired_time=g_item.value;
	if (expired_time.length==0)
	{
		alert("Expired Time is empty");
		return;
	}else if (expired_time.length>10)
	{
		alert("Date Length is too long(>10)");
		return;
	}
	
	if ((g_user_authorization_mode==1) || (g_user_authorization_mode==0))
	 {
		g_item=document.getElementById(password_id);
		szpassword=g_item.value;
		if (szpassword.length==0)
		{
			alert("Pawword is empty");
			return;
		}

		pos=expired_time.indexOf('/');
		if (pos>0)
		{
			expired_MM=expired_time.substring(0,pos);
			expired_time_temp=expired_time.substring(pos+1);
			pos=expired_time_temp.indexOf('/');	
			expired_DD=expired_time_temp.substring(0,pos);
			expired_YY=expired_time_temp.substring(pos+1);
			
				//	alert_message=cur_year+'/'+cur_month+'/'+cur_date+'--'+expired_YY+'/'+expired_MM+'/'+expired_DD;
		   	    	//alert(alert_message);
		
			if (expired_YY<cur_year)
			{
				alert_message="Expired Year should be >="+cur_year;
				alert(alert_message);
				return;
			}
			if ((expired_MM<1)||(expired_MM>12))
			{
				alert("Exipred Month should be between 1 and 12");
				return;
			}
			if ((expired_YY==cur_year)&&(expired_MM<cur_month))
			{
				alert_message="Expired Month should be >"+cur_month;
				alert(alert_message);
				return;
				
			}
			if ((expired_DD<1)||(expired_DD>31))
			{
				alert("Exipred Date should be between 1 and 30");
				return;
			}
			if ((expired_YY==cur_year)&&(expired_MM==cur_month)&&(expired_DD<cur_date))
			{
				alert_message="Expired Date should be >"+cur_date;
				alert(alert_message);
				return;
			}
		}		
		
	}else if (g_user_authorization_mode==2)
	{
		szpassword=null;
	}
		


	
	g_item=document.getElementById(group_id);
	szgroup=g_item.value;
//	g_item=document.getElementById(paymodel_id);
//	paymodel=g_item.value;
//	g_item=document.getElementById(user_point_id);
//	user_point=g_item.value;
	g_item=document.getElementById(userip_id);
	userip=g_item.value;
	g_item=document.getElementById(macid_id);
	macid=g_item.value;
	
   	g_token=find_cookie_value("token");

 confirm_msg="Update User: "+username+" Information?";
// cgi_url = "/server/update_user?token="+escape(g_token)+"&user_no="+escape(user_no)+"&username="+escape(username)+
 cgi_url = "/server/update_user?token="+escape(g_token)+"&username="+escape(username)+
  "&password="+szpassword+
  "&group="+szgroup+
  "&expired_time="+expired_time+
//  "&paymodel="+paymodel+
//  "&user_point="+user_point+
  "&userip="+userip+
  "&macid="+macid+
   "&flag="+Math.random();
  // alert(cgi_url);
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Update_User_Info;
	 xmlHttp.send(null);
	 g_item=document.getElementById(expired_time_id);
	 g_temp=g_item.value;
	 //g_item.value=g_item.value+" (updating...)";
	g_item.style.backgroundColor = "#ff0000";
 }
 

}


//function call_get_all_user() {
function call_get_all_user_detail() {
 

	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;

   var content = parent.document.getElementById("content");
 	
	content.innerHTML="";

  	
  	g_token=find_cookie_value("token");
 cgi_url = "/server/query_all_user?token="+escape(g_token)+"&flag="+Math.random();
 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">User Information Loading...<p>';

 xmlHttp.open("GET", cgi_url, true);
 xmlHttp.onreadystatechange = get_all_user;
 xmlHttp.send(null);

}
function call_get_users_detail() {
 

	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;

  // var content = parent.document.getElementById("content");
 	
	// content.innerHTML="";

  	
  	g_token=find_cookie_value("token");
  	if (g_expired_user==0)
  	{
 		cgi_url = "/server/get_users?token="+escape(g_token)+"&position="+g_user_position+"&1imit="+g_user_limit+"&flag="+Math.random();
 	}else if (g_expired_user==1)
 	{
		cgi_url = "/server/get_users?token="+escape(g_token)+"&position="+g_user_position+"&1imit="+g_user_limit+"&expired=1"+"&flag="+Math.random();
 	}
// content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">User Information Loading...<p>';

 xmlHttp.open("GET", cgi_url, true);
 xmlHttp.onreadystatechange = get_users;
 xmlHttp.send(null);

}
function user_authorization_mode()
{
if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
	    g_user_authorization_mode=response;
	    callServer_System_Inquery();
	    g_System_timer=setInterval(function(){callServer_System_Inquery_Timer()},60*1000);
	  //  alert(g_user_authorization_mode);
	  //  show_uptime();
    }
}

function call_user_authorization_mode() {
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
  	
  	g_token=find_cookie_value("token");

	 cgi_url = "/server/query_user_authorization?token="+escape(g_token)+"&flag="+Math.random();
	  xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = user_authorization_mode;
	 xmlHttp.send(null);

}  

function call_get_all_user(position, limit) {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
   	g_token=find_cookie_value("token");
	
	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;
	g_user_position=position;
	g_user_limit=limit;
	if (g_token!=0)
	{
		cgi_url = "/server/query_group?token="+escape(g_token)+"&flag="+Math.random();
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = group_inquery_item;
		xmlHttp.send(null);
	}

}
function call_get_users(position,limit) {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
   	g_token=find_cookie_value("token");
	g_user_position=position;
	g_user_limit=limit;
	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;
	if (g_token!=0)
	{
		cgi_url = "/server/query_group?token="+escape(g_token)+"&flag="+Math.random();
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = group_inquery_item;
		xmlHttp.send(null);
	}

}
function Download_User_Chlist() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
      /* if ((response==1))
    {
	    		alert("For security, root can not create channel list");
    }else*/
    if ((response==0))
    {
	    		alert("Can not create channel list");
    }else
    {
	    if (response.length>0)
	    
	    {
	    	window.location =response; 
	    }else
	    	{
	    		alert("Can not create channel list");
	    	}
	    	
    }
}
}
function getlink_download(fileName, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', fileName);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function call_download_user_chlist(user_no,sObj)
{
 var username_id="username"+user_no; 
 var password_id="password"+user_no;
 var username;
 var szpassword;

var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var getlinkurl;
	var getlinkfilename;
 
 
	g_item=document.getElementById(username_id);
	username=g_item.value;
	if (sObj.value=="m3u_getlink")
	{
		g_item=document.getElementById(password_id);
		szpassword=g_item.value;
		getlinkurl="http://"+location.hostname+":"+g_httpport+"/getlink?username="+username+":password="+szpassword+":type=m3u:dynamic=0";
		getlinkfilename="ezserver_ch_list("+username+").txt";
		getlink_download(getlinkfilename,getlinkurl);
	}else if (sObj.value=="m3u8_getlink")
	{
		g_item=document.getElementById(password_id);
		szpassword=g_item.value;
		getlinkurl="http://"+location.hostname+":"+g_httpport+"/getlink?username="+username+":password="+szpassword+":type=hls:dynamic=0";
		getlinkfilename="ezserver_ch_list("+username+").txt";
		getlink_download(getlinkfilename,getlinkurl);
	}else
	{
		g_token=find_cookie_value("token");
		//alert(user_no);
		//alert(sObj.value);
	 	cgi_url = "/server/call_download_user_chlist?token="+escape(g_token)+"&hostname="+location.hostname+"&username="+escape(username)+"&ch_list_type="+sObj.value+"&flag="+Math.random();
		
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = Download_User_Chlist;
		 xmlHttp.send(null); 
	 }

}
function Download_User_Movielist() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
      /* if ((response==1))
    {
	    		alert("For security, root can not create movie list");
    }else*/
    if ((response==0))
    {
	    		alert("Can not create movie list");
    }else
    {
	    if (response.length>0)
	    
	    {
	    	window.location =response; 
	    }else
	    	{
	    		alert("Can not create movie list");
	    	}
	    	
    }
}
}
function call_download_user_movielist(user_no,sObj)
{
 var username_id="username"+user_no; 
 var password_id="password"+user_no;
 var username;
 var szpassword;

var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 	var getlinkurl;
	var getlinkfilename;

 
	g_item=document.getElementById(username_id);
	username=g_item.value;
	if (sObj.value=="m3u_getlink")
	{
		g_item=document.getElementById(password_id);
		szpassword=g_item.value;
		getlinkurl="http://"+location.hostname+":"+g_httpport+"/getlink?username="+username+":password="+szpassword+":type=m3u:content=movie:dynamic=0";
		getlinkfilename="ezserver_movie_list("+username+").txt";
		getlink_download(getlinkfilename,getlinkurl);
	}else if (sObj.value=="m3u_all_getlink")
	{
		g_item=document.getElementById(password_id);
		szpassword=g_item.value;
		getlinkurl="http://"+location.hostname+":"+g_httpport+"/getlink?username="+username+":password="+szpassword+":type=m3u:content=all:dynamic=0";
		getlinkfilename="ezserver_all_list("+username+").txt";
		getlink_download(getlinkfilename,getlinkurl);
	}else
	{
	   	g_token=find_cookie_value("token");
		//alert(user_no);
		//alert(sObj.value);
	 	cgi_url = "/server/call_download_user_movielist?token="+escape(g_token)+"&hostname="+location.hostname+"&username="+escape(username)+"&movie_list_type="+sObj.value+"&flag="+Math.random();
		
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = Download_User_Movielist;
		 xmlHttp.send(null); 
	 }

}
function get_all_user()
{
 
  if (xmlHttp.readyState == 4) {

    var response = xmlHttp.responseText.split("\r\n");
     var username;
    var szpassword;
    var szgroup;
    var expired_timel
   // var paymodel;
  //  var paymodel_option;
  //  var user_point;
    var userip;
    var macid;
    var reseller;
    var user_title="<p>"+"User List"+"</p>";
    var user_list;
    var i=0;
    var user_no=1;
	var total_user_no=0;
	var HTML_str='';
	var strlength=0;
	var pos=0;
   var content = parent.document.getElementById("content");
  //var detail = parent.document.getElementById("detail");
  var expired_YY;
  var expired_MM;
  var expired_DD;
  var d=new Date();
  	var cur_year=d.getFullYear();
  	var cur_month=d.getMonth()+1;
  	var cur_day=d.getDate();
  	var bexpired=0;
  	var pos;
  	var expired_time_temp;
  	var yearmsg;
  	var menustr1;
	var menustr2;
	content.innerHTML="";
	//detail.innerHTML="";
	g_search_user_item.value=null;
	
	content.innerHTML="";
	 HTML_str= '<table border="0"  cellpadding="0" cellspacing="10" align="center">'+
	  '<tr>'+
	      '<td width="20" align="center"> <input type="checkbox" name="checkallbox" id=checkallbox  onclick=set_all_checked(g_user_no)></td>'+
	      '<td width="10%" align="center"><font face="Arial" size="2"></font></td>';
	      if ((g_user_authorization_mode==1) || (g_user_authorization_mode==0))
	      {
		     HTML_str+='<td width="10%" align="center"><font face="Arial" size="2">User Name<br>(Primary Key)</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">Password</font></td>';
		      HTML_str+='<td width="10%" align="center"><font face="Arial" size="2">Group</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">CH List</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">Movie List</font></td>'+
//		      '<td width="10%" align="center"><font face="Arial" size="2">Expired Time</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">Expired Time</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">IP</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">MAC ID</font></td>'+
		      '<td width="5%" align="center"><font face="Arial" size="2">Reseller</font></td>'+
	 	 '</tr>'+'<tr><td  colspan="11"><hr size="1" color="#66FFFF"></td></tr>';
	      }else if (g_user_authorization_mode==2)
	      {
	      	     HTML_str+='<td width="20%" align="center"><font face="Arial" size="2">PIN No.(Primary Key)</font></td>';
		      HTML_str+='<td width="10%" align="center"><font face="Arial" size="2">Group</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">CH List</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">Movie List</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">Expired Time</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">IP</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">MAC ID</font></td>'+
		      '<td width="5%" align="center"><font face="Arial" size="2">Reseller</font></td>'+
	 	 '</tr>'+'<tr><td  colspan="10"><hr size="1" color="#66FFFF"></td></tr>';
	      }
	      	
 	
	while (1)
	{
 	 	if (response[i]==0) break;
		//alert(response[i]);
	 	strlength=response[i].length;
   	    	username=response[i].slice(9,strlength);
     	 	strlength=response[i+1].length;
   	    	szpassword=response[i+1].slice(9,strlength);
    	 	strlength=response[i+2].length;
   	    	szgroup=response[i+2].slice(6,strlength);
	 	strlength=response[i+3].length;
   	    	expired_time=response[i+3].slice(13,strlength);

	   	bexpired=0;
	 	pos=expired_time.indexOf('/');
	 	if (pos>0)
	 	{
			expired_MM=expired_time.substring(0,pos);
			expired_time_temp=expired_time.substring(pos+1);
			pos=expired_time_temp.indexOf('/');	
			expired_DD=expired_time_temp.substring(0,pos);
			expired_YY=expired_time_temp.substring(pos+1);
			//yearmsg=cur_year+'/'+cur_month+'/'+cur_day+'--'+expired_YY+'/'+expired_MM+'/'+expired_DD;
	   	    	//alert(yearmsg);
	
	   	    	if (cur_year<expired_YY)
	   	    	{
	   	    		bexpired=0;
	   	    	}else if (cur_year==expired_YY)
	   	    	{
		   	    	if (cur_month<expired_MM)
		   	    	{
		   	    		bexpired=0;
		   	    	}else if (cur_month==expired_MM)
		   	    	{	
			   	    	if (cur_day>expired_DD)
			   	    	{
			   	    		bexpired=1;
			   	    	}else
		   	    		{
		   	    			bexpired=0;
		   	    		}
		   	    	}else if (cur_month>expired_MM)
		   	    	{
		   	    		bexpired=1;
		   	    	}
		   	    	
	   	    	}else if (cur_year>expired_YY)
	    		{
	    			bexpired=1;
	    		}
    		}else
    		{
    			bexpired=2;
    		}
    			
    	
   	    	
   	    	
     	 	//strlength=response[i+4].length;
     	 	
   	    	//paymodel=response[i+4].slice(9,strlength);
	 	//strlength=response[i+5].length;
   	    	//user_point=response[i+5].slice(11,strlength);
	 	strlength=response[i+4].length;
   	    	userip=response[i+4].slice(7,strlength);
	 	strlength=response[i+5].length;
   	    	macid=response[i+5].slice(6,strlength);
	 	strlength=response[i+6].length;
   	    	reseller=response[i+6].slice(9,strlength);
 
 		i=i+7;
		      HTML_str=HTML_str+'<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
		      '<td width="20" align="center">'+
	 		' <input type="checkbox" name=checkbox'+user_no+
	 		' id=checkbox'+user_no+'></td>';
	 		
		   if ((g_user_authorization_mode==1) || (g_user_authorization_mode==0))
		   {
		      HTML_str=HTML_str+'<td width="10%" align="center"><font face="Arial"> <font size="2">'+user_no+'</font></td>'+
		      '<td width="10%" align="center">'+
	 		' <font face="Arial" font size="2">'+
	 		' <input type="text" name="username"'+
	 		' id=username'+user_no+' size="12" value="'+
	 		username+'"/></font></td>'+
	 		
		      '<td width="10%" align="center">'+
	 		' <font face="Arial" font size="2">'+
	 		' <input type="text" name="password"'+
	 		' id=password'+user_no+' size="12" value="'+
	 		szpassword+'"/></font></td>';
		   }else if (g_user_authorization_mode==2)
	 		{
		 		HTML_str=HTML_str+'<td width="10%" align="center"><font face="Arial"> <font size="2">'+user_no+'</font></td>'+
			      '<td width="20%" align="center">'+
		 		' <font face="Arial" font size="2">'+
		 		' <input type="text" name="username"'+
		 		' id=username'+user_no+' size="36" value="'+
		 		username+'"/></font></td>';
	 		}
	 		

		      HTML_str=HTML_str+'<td width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" name="group" id=group'+user_no+'>';
	 		for (j=0;j<g_total_group_no;j++)
	 		{
	 			groupname=g_groupname_array[j];
	 			//if (szgroup.search(groupname)==-1)
	 			if (szgroup!=(groupname))
	 			{
	 				HTML_str+='<option value="'+groupname+'">'+groupname+'</option>';
	 			}
	 			else 
	 			{
	 				if (szgroup.length==groupname.length)
	 				{
	 					HTML_str+='<option selected="selected" value="'+groupname+'">'+groupname+'</option>';
	 				}else
	 				{
	 					HTML_str+='<option value="'+groupname+'">'+groupname+'</option>';
	 				}
	 			}	 			
	 		}
	  		HTML_str+='</select></font></td>';
	  		
	  		HTML_str=HTML_str+'<td width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" onchange="call_download_user_chlist('+user_no+','+'chlist'+user_no+')" name="ch_list" id=chlist'+user_no+'>'+
 			'<option value="-1">--</option>'+
			'<option value="enigma">Enigma</option>'+
			'<option value="enigma16">Enigma 1.6</option>'+
			'<option value="enigma(RTMP)">Enigma(RTMP)</option>'+
			'<option value="enigma16(RTMP)">Enigma 1.6(RTMP)</option>'+
			'<option value="enigma_no">Enigma(chno)</option>'+
			'<option value="enigma16_no">Enigma 1.6(chno)</option>'+
			'<option value="enigma_no(RTMP)">Enigma(RTMP/chno)</option>'+
			'<option value="enigma16_no(RTMP)">Enigma 1.6(RTMP/chno)</option>'+
			'<option value="m3u">m3u</option>'+
			'<option value="m3u_getlink">m3u(getlink API)</option>'+
			'<option value="m3u_ts">m3u(MPEG TS)</option>'+
			'<option value="m3u_flv">m3u(FLV)</option>'+
			'<option value="m3u_no">m3u(chno)</option>'+
			'<option value="m3ue_no">m3u(chno with suffix)</option>'+
			'<option value="m3ue_name">m3u(chname with suffix)</option>'+
			'<option value="m3u_rtmp">m3u(RTMP)</option>'+
			'<option value="m3u8">m3u8</option>'+
			'<option value="m3u8_getlink">m3u8(getlink API)</option>'+
			'<option value="octagon">octagon</option>'+
			'<option value="ariva">ariva</option>'+
 			'<option value="xbmc">XBMC</option>'+
 			'<option value="pure">Pure</option>'+
			'<option value="optumuss">Optumuss</option>'+
			'<option value="amiko">Amiko</option>'+
			'<option value="spark">Spark</option>'+
			'<option value="tiger">Tiger</option>'+
			'<option value="Bluestar">Bluestar</option>'+
			'<option value="nstreamvod">nStreamVOD</option>'+
 			'<option value="m3u_ott">OTT Player</option>'+
			'<option value="script_enigma">*Enigma Script*</option>'+
			'<option value="script_enigma16">*Enigma16 Script*</option>'+
			'<option value="script_mac_address">*MAC Address Script*</option>';
	  		HTML_str+='</select></font></td>';		
	  		                         
 			HTML_str=HTML_str+'<td width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" onchange="call_download_user_movielist('+user_no+','+'movielist'+user_no+')" name="movie_list" id=movielist'+user_no+'>'+
 			'<option value="-1">--</option>'+
			'<option value="m3u">m3u (Movie)</option>'+
			'<option value="m3u_getlink">m3u(Movie-getlink API)</option>'+
			'<option value="ch_movie_m3u">m3u (Channel/Movie)</option>'+
			'<option value="m3u_all_getlink">m3u(Channel/Movie-getlink API)</option>'+
			'<option value="Bluestar">Bluestar</option>'+
			'<option value="enigma">Enigma</option>'+
			'<option value="enigma16">Enigma 1.6</option>'+
 			'<option value="nstreamvod">nStreamVOD</option>'+
 			'<option value="script_enigma">*Enigma Script*</option>'+
			'<option value="script_enigma16">*Enigma16 Script*</option>';
	  		HTML_str+='</select></font></td>';
	  		
	  		
	  		if (bexpired==0)
	  		{	 		 		
			      HTML_str+='<td width="18%" align="center">'+
		 		' <font face="Arial"> <font size="2">'+
		 		' <input type="text" name="expired_time"'+
		 		' id=expired_time'+user_no+' size="12" value="'+
		 		expired_time+'"/></font></td>';		
	 		}else if (bexpired==1)
	 		{
	 			
	 			HTML_str+='<td width="18%" align="center">'+
		 		' <font face="Arial"> <font size="2">'+
		 		' <input type="text" name="expired_time"  style="background:#ff0000"'+
		 		' id=expired_time'+user_no+' size="12" value="'+
		 		expired_time+'"/></font></td>';		

	 		}else if (bexpired==2)
	 		{
	 			
	 			HTML_str+='<td width="18%" align="center">'+
		 		' <font face="Arial"> <font size="2">'+
		 		' <input type="text" name="expired_time"  style="background:#ffff00"'+
		 		' id=expired_time'+user_no+' size="12" value="'+
		 		expired_time+'"/></font></td>';		

	 		}
	 	
	 		HTML_str+='<td width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" name="userip"'+
	 		' id=userip'+user_no+' size="12" value="'+
	 		userip+'"/></font></td>';	 			

	 		HTML_str+='<td width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" name="macid"'+
	 		' id=macid'+user_no+' size="12" value="'+
	 		macid+'"/></font></td>';	 			

	 		HTML_str+='<td id=reseller'+user_no+' width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
	 		reseller+'</font></td>'+	 			
	 		
		    
		      '<td align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_New_User("'+user_no+'")>'+
	      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>'+

		      '<td align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_New_Multiple_User("'+user_no+'")>'+
	      	      ' <img border="0" id="addmultiplebutton" alt="Add Multiple Users" title="Add Multiple Users" src="add_multiple_icon.PNG"></a></td>'+

		      '<td align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Update_User("'+user_no+'")>'+
	      	      ' <img border="0" id="savebutton" alt="Save" title="Save" src="save_icon.PNG"></a></td>';
		      if (username!="root")
		      {
			      	HTML_str+='<td align="center">'+
			      "<a href='javascript:void(0)'"+
			      ' onclick=call_Del_User("'+user_no+'")>'+
		      	      ' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>';
	      	      }
	      	      
		      HTML_str+='<td align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Query_User_More("'+user_no+'")>'+
	      	      ' <img border="0" id="morebutton" alt="More" title="More" src="more_icon.PNG"></a></td>'+
		    '</tr>';
		total_user_no++;
		user_no++;
		//alert(HTML_str);
    }
        HTML_str=HTML_str+'</table>';
       //  alert(user_list_info.innerHTML);
   	g_user_no=total_user_no;
 	menustr1='<table width=100%><tr><td id=total_no_top_id>'+'<font face="Arial"> <font size="2">User Total: '+ g_user_no+'</td></tr><tr>';
		if (g_show_free_version==1)
		{
			menustr1+='<td><font face="Arial" size="2">Cut</font>'+'&nbsp&nbsp&nbsp'+
	 	      '<font face="Arial" size="2">Copy</font>'+'&nbsp&nbsp&nbsp'+
	 	      '<font face="Arial" size="2">Paste</font>'+'&nbsp&nbsp&nbsp';
		}else
		{
			menustr1+="<td> <a href='javascript:void(0)' onclick=callezserver_cut_selected_user()>"+
	 	      '<font face="Arial" size="2">Cut</font></a>'+'&nbsp&nbsp&nbsp'+
	 	      "<a href='javascript:void(0)' onclick=callezserver_copy_selected_user()>"+
	 	      '<font face="Arial" size="2">Copy</font></a>'+'&nbsp&nbsp&nbsp'+
	 	      "<a href='javascript:void(0)' onclick=callezserver_paste_selected_user()>"+
	 	      '<font face="Arial" size="2">Paste</font></a>'+'&nbsp&nbsp&nbsp';
		}
			
		
 	      menustr1+="<a href='javascript:void(0)' onclick=callezserver_delete_selected_user()>"+
 	      '<font face="Arial" size="2">Delete</font></a>'+'&nbsp&nbsp&nbsp'+
 	      "<a href='javascript:void(0)' onclick=callezserver_refresh_selected_user()>"+
 	      '<font face="Arial" size="2">Refresh</font></a>'+'&nbsp&nbsp&nbsp'+
	      //"<a href='javascript:void(0)' onclick=call_export_user_profile()>"+
	      //'<font face="Arial" size="2">Export</font></a>'+'&nbsp&nbsp&nbsp'+
	      '</td><td><font face="Arial" size="2"> <input name="user_search_field" id="user_search_field" size="20"/></font><font face="Arial"><font size="2"></font>'+
	   '<input type="button" value="Search" onclick="javascript:search_user();" name="search_user" /></font>'+
	   '<input type="button" value="Go to" onclick="javascript:goto_line_no(3);" name="goto_user_no" /></font>'+	   
	   '</td></tr>'+
	      '</table>';
      	content.innerHTML=menustr1+HTML_str;
/*   	menustr2='<table width=99%><tr><td id=total_user_no_bottom_id width=20%>'+'<font face="Arial"> <font size="2">Total: '+ g_user_no+'</td>'+
 	      "<td width=75% align=right> <a href='javascript:void(0)' onclick=call_get_all_user()>"+
 	      ' <font face="Arial" size="2">Refresh</font></a>'+
	      "<td width=80% align=right> <a href='javascript:void(0)' onclick=call_export_user_profile()>"+
	      ' <font face="Arial" size="2">Export</font></a>'+
	      '</td></tr></table>';
	      */
 }

 
}
function cleanup_expired_user()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    var alertmessage;
    
    if (response==0)
    {
   	alert("No expired users");
    } else if (response>0)
    {
	g_user_no-=parseInt(response);
	if (g_user_no<=0) g_user_no=1;
	if ((g_user_position+g_constant_limit)<=g_user_no)
	{
		g_user_limit=g_constant_limit;
	}else
	{
		g_user_limit=g_user_no%g_constant_limit;
		if (g_user_limit==0) 
		{
			if (g_user_no>0)
			{
				if (g_user_no<g_user_position)
				{
					g_user_position=g_user_no-g_constant_limit+1;
				}
				g_user_limit=g_constant_limit;
			}else
			{
				g_user_limit==0;
			}
		}
	}
    	if (response==1)
    	{
    		alertmessage="Cleanup "+ response +" expired user";
    	}else
    	{
    		alertmessage="Cleanup "+ response +" expired users";
    	}
  	alert(alertmessage);
     }
     call_get_users_detail();
    	
  }
}
function callezserver_cleanup_expired_user()
{
 	var cgi_url;
	var confirm_msg;
	
  	g_token=find_cookie_value("token");
	confirm_msg="Cleanup Expired Users?";
	if (confirm(confirm_msg))
	{
	 cgi_url = "/server/cleanup_expired_users?token="+escape(g_token)+"&flag="+Math.random();
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = cleanup_expired_user;
	 xmlHttp.send(null);	
	}
}
function callezserver_get_all_user() {

	g_expired_user=0;
	g_user_position=1;
	g_user_limit=g_constant_limit;
	call_get_users(g_user_position,g_user_limit);

}
function get_expired_user()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    //alert(response);
    if (response==0)
    {
   	alert("No expired user");
    }else if (response>0)
    {
	g_expired_user_no=response;
    	g_expired_user=1;
    	g_user_position=1;
    	if (g_expired_user_no>g_constant_limit)
    	{
    		g_user_limit=g_constant_limit;
    	}else
    	{
    		g_user_limit=g_expired_user_no;
    	}
	call_get_users(g_user_position,g_user_limit);
    }
    	
  }
}
function callezserver_get_expired_user()
{
	var cgi_url;
	
	g_token=find_cookie_value("token");
	cgi_url = "/server/get_expired_user_no?token="+escape(g_token)+"&flag="+Math.random();
	
	xmlHttp.open("GET", cgi_url, true);
	xmlHttp.onreadystatechange = get_expired_user;
	xmlHttp.send(null);	
}
function Save_User_Setting()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    //alert(response);
    if (response==0)
    {
   	alert("User Setting Failed");
    }else if (response==1)
    {
	alert("User Setting Sucessfully");
    }  	
    close_setting_modal();
  }
}
function call_Save_User_Setting()
{
	var isp_lock_id="isp_lock";
	var isp_lock_flag;
 	var cgi_url;

	g_item=document.getElementById(isp_lock_id);
	isp_lock_flag=g_item.value;
   	g_token=find_cookie_value("token");
	cgi_url = "/server/save_user_setting?token="+escape(g_token)+"&isp_lock_flag="+isp_lock_flag+"&flag="+Math.random();
 //  alert(cgi_url);
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Save_User_Setting;
	 xmlHttp.send(null);
}
function sort_user_ascending()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    	var content;

    //alert(response);
    if (response==0)
    {
    	alert("Sort Failed");
   	if (g_user_name_order_flag==1)
    	{
    		g_user_name_order_flag=0;
  		content = document.getElementById("user_name_id");
 		content.innerHTML='<font face="Arial" size="2">User Name</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';
  	}else if (g_user_group_order_flag==1)
    	{
    		g_user_group_order_flag=0;
		content = document.getElementById("group_id");
		content.innerHTML='<font face="Arial" size="2">Group</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("group") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("group") title="Z to A">'+'&#x25bc'+'</a></font>';
     	}else if (g_user_expired_date_order_flag==1)
    	{
    		g_user_expired_date_order_flag=0;
    		content = document.getElementById("time_expired_id");
   		content.innerHTML='<font face="Arial" size="2">Expired Time</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("expired_time") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("expired_time") title="Z to A">'+'&#x25bc'+'</a></font>';
	}
    }else if (response>0)
    {
	g_expired_user=0;
	g_user_position=1;
	g_user_limit=g_constant_limit;
	call_get_users(g_user_position,g_user_limit);    }
    	
  }
}
function callezserver_sort_user_ascending(sortkey)
{
	var cgi_url;
	var content;
	g_token=find_cookie_value("token");
	cgi_url = "/server/sort_user_ascending?token="+escape(g_token)+"&sortkey="+sortkey+"&flag="+Math.random();
	if (sortkey=="name")
	{
		content = document.getElementById("user_name_id");
		g_user_name_order_flag=1;
		g_user_group_order_flag=0;
		g_user_expired_date_order_flag=0;
	}else if (sortkey=="group")
	{
		content = document.getElementById("group_id");
		g_user_name_order_flag=0;
		g_user_group_order_flag=1;
		g_user_expired_date_order_flag=0;
	}else if (sortkey=="expired_time")
	{
		content = document.getElementById("time_expired_id");
		g_user_name_order_flag=0;
		g_user_group_order_flag=0;
		g_user_expired_date_order_flag=1;
	}
	content.innerHTML='<div class="loader"></div>';
	xmlHttp.open("GET", cgi_url, true);
	xmlHttp.onreadystatechange = sort_user_ascending;
	xmlHttp.send(null);	
}
function sort_user_descending()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    	var content;

    //alert(response);
    if (response==0)
    {
     	alert("Sort Failed");
  	if (g_user_name_order_flag==2)
    	{
   		g_user_name_order_flag=0;
 		content = document.getElementById("user_name_id");
 		content.innerHTML='<font face="Arial" size="2">User Name</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';
		      
    	}else if (g_user_group_order_flag==2)
    	{
    		g_user_group_order_flag=0;
		content = document.getElementById("group_id");
		content.innerHTML='<font face="Arial" size="2">Group</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("group") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("group") title="Z to A">'+'&#x25bc'+'</a></font>';
		      
    	}else if (g_user_expired_date_order_flag==2)
    	{
  		g_user_expired_date_order_flag=0;
  		content = document.getElementById("time_expired_id");
  		content.innerHTML='<font face="Arial" size="2">Expired Time</font><font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("expired_time") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("expired_time") title="Z to A">'+'&#x25bc'+'</a></font>';
		      
    	}
    }else if (response>0)
    {
	g_expired_user=0;
	g_user_position=1;
	g_user_limit=g_constant_limit;
	call_get_users(g_user_position,g_user_limit);    }
    	
  }
}
function callezserver_sort_user_descending(sortkey)
{
	var cgi_url;
	var content;
	g_token=find_cookie_value("token");
	cgi_url = "/server/sort_user_descending?token="+escape(g_token)+"&sortkey="+sortkey+"&flag="+Math.random();
	if (sortkey=="name")
	{
		content = document.getElementById("user_name_id");
		g_user_name_order_flag=2;
		g_user_group_order_flag=0;
		g_user_expired_date_order_flag=0;
	}else if (sortkey=="group")
	{
		content = document.getElementById("group_id");
		g_user_name_order_flag=0;
		g_user_group_order_flag=2;
		g_user_expired_date_order_flag=0;
	}else if (sortkey=="expired_time")
	{
		content = document.getElementById("time_expired_id");
		g_user_name_order_flag=0;
		g_user_group_order_flag=0;
		g_user_expired_date_order_flag=2;
	}
	content.innerHTML='<div class="loader"></div>';
	xmlHttp.open("GET", cgi_url, true);
	xmlHttp.onreadystatechange = sort_user_descending;
	xmlHttp.send(null);	
}	
function get_users()
{
 
  if (xmlHttp.readyState == 4) {

    var response = xmlHttp.responseText.split("\r\n");
     var username;
    var szpassword;
    var szgroup;
    var expired_timel
   // var paymodel;
  //  var paymodel_option;
  //  var user_point;
    var userip;
    var macid;
    var reseller;
    var user_title="<p>"+"User List"+"</p>";
    var user_list;
    var i=0;
    var j=0;
    var k=0;
    var user_no=1;
	var total_no=0;
	var HTML_str='';
	var strlength=0;
	var pos=0;
   var content = parent.document.getElementById("content");
  //var detail = parent.document.getElementById("detail");
  var expired_YY;
  var expired_MM;
  var expired_DD;
  var d=new Date();
  	var cur_year=d.getFullYear();
  	var cur_month=d.getMonth()+1;
  	var cur_day=d.getDate();
  	var bexpired=0;
  	var pos;
  	var expired_time_temp;
  	var yearmsg;
  	var menustr1;
	var menustr2;
	var endposition;
	var position;
	var limit;
	var curren_sequence_no;
	var total_sequence;
	var start_sequence_no;
	var current_position=g_user_position;
	var total_count=0;
	content.innerHTML="";
	var new_total_no;
	//detail.innerHTML="";
	
	if (g_expired_user==0)
	{
		total_count=g_user_no;
	}else if (g_expired_user==1)
	{
		total_count=g_expired_user_no;
	}
	
	g_search_user_item.value=null;
	content.innerHTML="";
	
//	 HTML_str= '<table border="0"  cellpadding="0" cellspacing="10" align="center">'+
	 HTML_str= '<table border="0" align="center">'+
	  '<tr>'+
	      '<td width="20" align="center"> <input type="checkbox" name="checkallbox" id=checkallbox  onclick=set_all_checked(g_user_no)></td>'+
	      '<td width="10%" align="center"><font face="Arial" size="2"></font></td>';
	      if ((g_user_authorization_mode==1) || (g_user_authorization_mode==0))
	      {
		     HTML_str+='<td id="user_name_id" width="10%" align="center"><font face="Arial" size="2">User Name</font>';
		     if (g_user_name_order_flag==0)
		     {
		     	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';
		      }else if (g_user_name_order_flag==1)
		     {
		     	HTML_str+='<font face="Arial" size="2" color="#cccccc">'+'&#x25b2'+'</font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';
		      }else if (g_user_name_order_flag==2)
		     {
		     	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2" color="#cccccc">'+'&#x25bc'+'</font>';
		      }
		      HTML_str+='</td>'+
		      '<td width="20" align="center"></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">Password</font></td>';
		      HTML_str+='<td id="group_id" width="10%" align="center"><font face="Arial" size="2">Group</font>';
		      if (g_user_group_order_flag==0)
		      {
		     	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("group") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("group") title="Z to A">'+'&#x25bc'+'</a></font>';
		      }else if (g_user_group_order_flag==1)
		      {
		     	HTML_str+='<font face="Arial" size="2" color="#cccccc">'+'&#x25b2'+'</font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("group") title="Z to A">'+'&#x25bc'+'</a></font>';
		      }else if (g_user_group_order_flag==2)
		      {
		     	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("group") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2" color="#cccccc">'+'&#x25bc'+'</font>';
		      }
		      HTML_str+='</td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">CH List</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">Movie List</font></td>'+
		      '<td id="time_expired_id" width="10%" align="center"><font face="Arial" size="2">Expired Time</font>';
		      if (g_user_expired_date_order_flag==0)
		      {
		     	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("expired_time") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("expired_time") title="Z to A">'+'&#x25bc'+'</a></font>';
		      }else if (g_user_expired_date_order_flag==1)
		      {
		     	HTML_str+='<font face="Arial" size="2" color="#cccccc">'+'&#x25b2'+'</font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("expired_time") title="Z to A">'+'&#x25bc'+'</a></font>';
		      }else if (g_user_expired_date_order_flag==2)
		      {
		     	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("expired_time") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2" color="#cccccc">'+'&#x25bc'+'</font>';
		      }
		      HTML_str+='</td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">IP</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">MAC ID</font></td>'+
		      '<td width="5%" align="center"><font face="Arial" size="2">Reseller</font></td>'+
	 	 '</tr>'+'<tr><td  colspan="11"><hr size="1" color="#66FFFF"></td></tr>';
	      }else if (g_user_authorization_mode==2)
	      {
	      	     HTML_str+='<td id="user_name_id" width="20%" align="center"><font face="Arial" size="2">PIN No.';
		     if (g_user_name_order_flag==0)
		     {
		     	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';
		      }else if (g_user_name_order_flag==1)
		     {
		     	HTML_str+='<font face="Arial" size="2" color="#cccccc">'+'&#x25b2'+'</font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("name") title="Z to A">'+'&#x25bc'+'</a></font>';
		      }else if (g_user_name_order_flag==2)
		     {
		     	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("name") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2" color="#cccccc">'+'&#x25bc'+'</font>';
		      }
		      HTML_str+='<td width="20" align="center"></td>';
		      HTML_str+='<td id="group_id" width="10%" align="center"><font face="Arial" size="2">Group';
		      if (g_user_group_order_flag==0)
		      {
		     	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("group") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("group") title="Z to A">'+'&#x25bc'+'</a></font>';
		      }else if (g_user_group_order_flag==1)
		      {
		     	HTML_str+='<font face="Arial" size="2" color="#cccccc">'+'&#x25b2'+'</font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("group") title="Z to A">'+'&#x25bc'+'</a></font>';
		      }else if (g_user_group_order_flag==2)
		      {
		     	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("group") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2" color="#cccccc">'+'&#x25bc'+'</font>';
		      }
		      HTML_str+='</td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">CH List</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">Movie List</font></td>'+
		      '<td  id="time_expired_id" width="10%" align="center"><font face="Arial" size="2">Expired Time</font>';
		      if (g_user_expired_date_order_flag==0)
		      {
		     	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("expired_time") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("expired_time") title="Z to A">'+'&#x25bc'+'</a></font>';
		      }else if (g_user_expired_date_order_flag==1)
		      {
		     	HTML_str+='<font face="Arial" size="2" color="#cccccc">'+'&#x25b2'+'</font>'+
		      	'<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_descending("expired_time") title="Z to A">'+'&#x25bc'+'</a></font>';
		      }else if (g_user_expired_date_order_flag==2)
		      {
		     	HTML_str+='<font face="Arial" size="2">'+"<a href='javascript:void(0)'"+' style="text-decoration: none; color: #000000" onclick=callezserver_sort_user_ascending("expired_time") title="A to Z">'+'&#x25b2'+'</a></font>'+
		      	'<font face="Arial" size="2" color="#cccccc">'+'&#x25bc'+'</font>';
		      }
		      HTML_str+='</td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">IP</font></td>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">MAC ID</font></td>'+
		      '<td width="5%" align="center"><font face="Arial" size="2">Reseller</font></td>'+
	 	 '</tr>'+'<tr><td  colspan="11"><hr size="1" color="#66FFFF"></td></tr>';
	      }
	      	
 	user_no=current_position;
 	while (1)
	{
 	 	if (response[i]==0) break;
		//alert(response[i]);
	 	strlength=response[i].length;
   	    	username=response[i].slice(9,strlength);
     	 	strlength=response[i+1].length;
   	    	szpassword=response[i+1].slice(9,strlength);
    	 	strlength=response[i+2].length;
   	    	szgroup=response[i+2].slice(6,strlength);
	 	strlength=response[i+3].length;
   	    	expired_time=response[i+3].slice(13,strlength);

	   	bexpired=0;
	 	pos=expired_time.indexOf('/');
	 	if (pos>0)
	 	{
			expired_MM=expired_time.substring(0,pos);
			expired_time_temp=expired_time.substring(pos+1);
			pos=expired_time_temp.indexOf('/');	
			expired_DD=expired_time_temp.substring(0,pos);
			expired_YY=expired_time_temp.substring(pos+1);
			//yearmsg=cur_year+'/'+cur_month+'/'+cur_day+'--'+expired_YY+'/'+expired_MM+'/'+expired_DD;
	   	    	//alert(yearmsg);
	
	   	    	if (cur_year<expired_YY)
	   	    	{
	   	    		bexpired=0;
	   	    	}else if (cur_year==expired_YY)
	   	    	{
		   	    	if (cur_month<expired_MM)
		   	    	{
		   	    		bexpired=0;
		   	    	}else if (cur_month==expired_MM)
		   	    	{	
			   	    	if (cur_day>expired_DD)
			   	    	{
			   	    		bexpired=1;
			   	    	}else
		   	    		{
		   	    			bexpired=0;
		   	    		}
		   	    	}else if (cur_month>expired_MM)
		   	    	{
		   	    		bexpired=1;
		   	    	}
		   	    	
	   	    	}else if (cur_year>expired_YY)
	    		{
	    			bexpired=1;
	    		}
    		}else
    		{
    			bexpired=2;
    		}
    			
    	
   	    	
   	    	
     	 	//strlength=response[i+4].length;
     	 	
   	    	//paymodel=response[i+4].slice(9,strlength);
	 	//strlength=response[i+5].length;
   	    	//user_point=response[i+5].slice(11,strlength);
	 	strlength=response[i+4].length;
   	    	userip=response[i+4].slice(7,strlength);
	 	strlength=response[i+5].length;
   	    	macid=response[i+5].slice(6,strlength);
	 	strlength=response[i+6].length;
   	    	reseller=response[i+6].slice(9,strlength);
 
 		i=i+7;

		      HTML_str=HTML_str+'<tr onmouseover="ChangeBackgroundColor(this)" onmouseout="RestoreBackgroundColor(this)">'+
		      '<td width="20" align="center">';
		      if (g_user_found_position==user_no)
		      {
	 		HTML_str+=' <input type="checkbox" checked name=checkbox'+user_no;
	 	      }else
	 	      {
	 		HTML_str+=' <input type="checkbox" name=checkbox'+user_no;
	 	      }
	 		HTML_str+=' id=checkbox'+user_no+'></td>';
	 		
		   if ((g_user_authorization_mode==1) || (g_user_authorization_mode==0))
		   {
		      HTML_str=HTML_str+'<td width="10%" align="center"><font face="Arial"> <font size="2">'+user_no+'</font></td>'+
		      '<td width="10%" align="center">'+
	 		' <font face="Arial" font size="2">'+
	 		' <input readonly type="text" name="username"'+
	 		' id=username'+user_no+' size="12" value="'+
	 		username+'"/></font></td>'+
	 		'<td  style="cursor: pointer;" width="20">'+
			'<div class="dropdown">'+
				'<button class="dropbtn">'+
  				'<div class="bar1"></div>'+
  				'<div class="bar2"></div>'+
  				'<div class="bar3"></div>'+
				'</button>'+
  				'<div class="dropdown-content">'+
     					"<a href='javascript:void(0)'"+
					' onclick=call_Update_User("'+user_no+'")>'+'<table><tr><td width=10%><img src="save.png"></td><td><font face="Arial" size="3"><b>Save</b></font></td></tr></table></a>'+
					"<a href='javascript:void(0)'"+
					' onclick=call_Query_User_More("'+user_no+'")>'+'<table><tr><td width=10%><img src="edit.png"></td><td><font face="Arial" size="3"><b>Edit more options</b></font></td></tr></table></a>'+
    					'</div>'+
			'</div>'+
	 		'</td>'+
		      '<td width="10%" align="center">'+
	 		' <font face="Arial" font size="2">'+
	 		' <input type="text" name="password"'+
	 		' id=password'+user_no+' size="12" value="'+
	 		szpassword+'"/></font></td>';
		   }else if (g_user_authorization_mode==2)
	 		{
		 		HTML_str=HTML_str+'<td width="10%" align="center"><font face="Arial"> <font size="2">'+user_no+'</font></td>'+
			      '<td width="20%" align="center">'+
		 		' <font face="Arial" font size="2">'+
		 		' <input readonly ype="text" name="username"'+
		 		' id=username'+user_no+' size="36" value="'+
		 		username+'"/></font></td>'+
		 	'<td  style="cursor: pointer;" width="20">'+
			'<div class="dropdown">'+
				'<button class="dropbtn">'+
  				'<div class="bar1"></div>'+
  				'<div class="bar2"></div>'+
  				'<div class="bar3"></div>'+
				'</button>'+
  				'<div class="dropdown-content">'+
     					"<a href='javascript:void(0)'"+
					' onclick=call_Update_User("'+user_no+'")>'+'<table><tr><td width=10%><img src="save.png"></td><td><font face="Arial" size="3"><b>Save</b></font></td></tr></table></a>'+
					"<a href='javascript:void(0)'"+
					' onclick=call_Query_User_More("'+user_no+'")>'+'<table><tr><td width=10%><img src="edit.png"></td><td><font face="Arial" size="3"><b>Edit more options</b></font></td></tr></table></a>'+
    					'</div>'+
			'</div>'+
	 		'</td>';
	 	}
	 		

		      HTML_str=HTML_str+'<td width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" name="group" id=group'+user_no+'>';
	 		for (j=0;j<g_total_group_no;j++)
	 		{
	 			groupname=g_groupname_array[j];
	 			
	 			//if (szgroup.search(groupname)==-1)
	 			if (szgroup!=(groupname))
	 			{
	 				HTML_str+='<option value="'+groupname+'">'+groupname+'</option>';
	 			}
	 			else 
	 			{
	 				if (szgroup.length==groupname.length)
	 				{
	 					HTML_str+='<option selected="selected" value="'+groupname+'">'+groupname+'</option>';
	 				}else
	 				{
	 					HTML_str+='<option value="'+groupname+'">'+groupname+'</option>';
	 				}
	 			}	 			
	 		}
	  		HTML_str+='</select></font></td>';
	  		
	  		HTML_str=HTML_str+'<td width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" onchange="call_download_user_chlist('+user_no+','+'chlist'+user_no+')" name="ch_list" id=chlist'+user_no+'>'+
 			'<option value="-1">--</option>'+
			'<option value="enigma">Enigma</option>'+
			'<option value="enigma16">Enigma 1.6</option>'+
			'<option value="enigma(RTMP)">Enigma(RTMP)</option>'+
			'<option value="enigma16(RTMP)">Enigma 1.6(RTMP)</option>'+
			'<option value="enigma_no">Enigma(chno)</option>'+
			'<option value="enigma16_no">Enigma 1.6(chno)</option>'+
			'<option value="enigma_no(RTMP)">Enigma(RTMP/chno)</option>'+
			'<option value="enigma16_no(RTMP)">Enigma 1.6(RTMP/chno)</option>'+
			'<option value="m3u">m3u</option>'+
			'<option value="m3u_getlink">m3u(getlink API)</option>'+
			'<option value="m3u_pure_name">m3u (No Encoded)</option>'+
			'<option value="m3u_ts">m3u(MPEG TS)</option>'+
			'<option value="m3u_flv">m3u(FLV)</option>'+
			'<option value="m3u_no">m3u(chno)</option>'+
			'<option value="m3ue_no">m3u(chno with suffix)</option>'+
			'<option value="m3ue_name">m3u(chname with suffix)</option>'+
			'<option value="m3u_rtmp">m3u(RTMP)</option>'+
			'<option value="m3u8">m3u8</option>'+
			'<option value="m3u8_getlink">m3u8(getlink API)</option>'+
			'<option value="m3u8_pure_name">m3u8(No Encoded)</option>'+
			'<option value="octagon">octagon</option>'+
			'<option value="ariva">ariva</option>'+
 			'<option value="xbmc">XBMC</option>'+
 			'<option value="pure">Pure</option>'+
			'<option value="optumuss">Optumuss</option>'+
			'<option value="amiko">Amiko</option>'+
			'<option value="spark">Spark</option>'+
			'<option value="tiger">Tiger</option>'+
			'<option value="Bluestar">Bluestar</option>'+
			'<option value="nstreamvod">nStreamVOD</option>'+
 			'<option value="m3u_ott">OTT Player</option>'+
			'<option value="script_enigma">*Enigma Script*</option>'+
			'<option value="script_enigma16">*Enigma16 Script*</option>'+
			'<option value="script_mac_address">*MAC Address Script*</option>';
	  		HTML_str+='</select></font></td>';		
	  		                         
 			HTML_str=HTML_str+'<td width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
			' <select size="1" onchange="call_download_user_movielist('+user_no+','+'movielist'+user_no+')" name="movie_list" id=movielist'+user_no+'>'+
 			'<option value="-1">--</option>'+
			'<option value="m3u">m3u (Movie)</option>'+
			'<option value="m3u_getlink">m3u(Movie-getlink API)</option>'+
			'<option value="ch_movie_m3u">m3u (Channel/Movie)</option>'+
			'<option value="m3u_all_getlink">m3u(All-getlink API)</option>'+
			'<option value="Bluestar">Bluestar</option>'+
			'<option value="enigma">Enigma</option>'+
			'<option value="enigma16">Enigma 1.6</option>'+
 			'<option value="nstreamvod">nStreamVOD</option>'+
			'<option value="script_enigma">*Enigma Script*</option>'+
			'<option value="script_enigma16">*Enigma16 Script*</option>';
	  		HTML_str+='</select></font></td>';
	  		
	  		
	  		if (bexpired==0)
	  		{	 		 		
			      HTML_str+='<td width="15%" align="center">'+
		 		' <font face="Arial"> <font size="2">'+
		 		' <input type="text" name="expired_time"'+
		 		' id=expired_time'+user_no+' size="10" value="'+
		 		expired_time+'"/></font></td>';		
	 		}else if (bexpired==1)
	 		{
	 			
	 			HTML_str+='<td width="15%" align="center">'+
		 		' <font face="Arial"> <font size="2">'+
		 		' <input type="text" name="expired_time"  style="background:#ff0000"'+
		 		' id=expired_time'+user_no+' size="10" value="'+
		 		expired_time+'"/></font></td>';		

	 		}else if (bexpired==2)
	 		{
	 			
	 			HTML_str+='<td width="15%" align="center">'+
		 		' <font face="Arial"> <font size="2">'+
		 		' <input type="text" name="expired_time"  style="background:#ffff00"'+
		 		' id=expired_time'+user_no+' size="10" value="'+
		 		expired_time+'"/></font></td>';		

	 		}
	 	
	 		HTML_str+='<td width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" name="userip"'+
	 		' id=userip'+user_no+' size="12" value="'+
	 		userip+'"/></font></td>';	 			

	 		HTML_str+='<td width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
	 		' <input type="text" name="macid"'+
	 		' id=macid'+user_no+' size="12" value="'+
	 		macid+'"/></font></td>';	 			

	 		HTML_str+='<td id=reseller'+user_no+' width="10%" align="center">'+
	 		' <font face="Arial"> <font size="2">'+
	 		reseller+'</font></td>';
	 		
		      
		      
		      HTML_str+='</tr>';
		total_no++;
		user_no++;
		//alert(HTML_str);
    }
        HTML_str=HTML_str+'</table>';
        new_total_no=Number(g_user_no)+1;
        //new_total_no=total_no+1;
       //  alert(user_list_info.innerHTML);
   	//total_count=total_no;
  // 	g_total_user_no=total_no;
// 	menustr1='<table width=100%><tr><td id=total_no_top_id>'+'<font face="Arial"> <font size="2">User Total: '+ total_count+'</td></tr><tr>';
 	menustr1='<table width=100%><tr>';
	menustr1+='<td width="4%">'+
	'<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Setting" onclick="javascript:open_setting_modal();" />';
	menustr1+='<div id="PanelModalSetting" class="modal">'+
			'<div class="modal-content">'+
			'<span onclick="javascript:close_setting_modal();" class="close">&times;</span>';
			menustr1+='<table align="center">';
			
 			menustr1+='<tr><td><font face="Arial" font size="2">ISP Locked : </font></td><td>'+
			 	'<font face="Arial" size="2">'+
				'<select size="1" style="width: 100;" name="isp_lock" id=isp_lock>';
			menustr1+='<option value="1">'+'Enable All'+'</option>';
			menustr1+='<option selected="selected" value="0">'+'Disable All'+'</option>';
	 		menustr1+='</select></font></td></tr>';
  			
			menustr1+='<tr><td><input type="button" value="Save" onclick=call_Save_User_Setting() name="Save" /></td></tr></table>'+
			'</div>'+
		'</div></td>';
	menustr1+='<td width="4%">'+
		'<p style="margin-top: 10"><Input type="button" value="Add" onclick="javascript:open_modal();" />';
		menustr1+='<div id="PanelModal" class="modal">'+
				'<div class="modal-content">'+
				'<span onclick="javascript:close_modal();" class="close">&times;</span>';
    				menustr1+='<table align="center">';
    				menustr1+='<tr><td><font face="Arial"><font size="2">User No. : </font></td><td width="350" height="23">'+
				' <font face="Arial" size="2">'+
				' <input type="text" name="userno"'+
				' id="userno"'+
				' size="3" value="'+
				new_total_no+
				'"/></font></td></tr>';
				
	 			if ((g_user_authorization_mode==1) || (g_user_authorization_mode==0))
	 			{
					menustr1+='<tr><td><font face="Arial" font size="2">User Name : </font></td><td width="20">'+
					 	' <font face="Arial" size="2">'+
					 	' <input type="text" name="username"'+
					 	' id=username'+
					 	' size="12"/'+
					 	'</font></td></tr>';
					menustr1+='<tr><td><font face="Arial" font size="2">Password : </font></td><td>'+
					 		' <font face="Arial" size="2">'+
					 		' <input type="text" name="password"'+
					 		' id=password'+
					 		' size="12"/'+
					 		'</font></td></tr>';
				}else if (g_user_authorization_mode==2)
				{
					menustr1+='<tr><td><font face="Arial" font size="2">Password : </font></td><td>'+
					 		' <font face="Arial" size="2">'+
					 		' <input type="text" name="password"'+
					 		' id=password'+
					 		' size="12"/'+
					 		'</font></td></tr>';			
				}		
				menustr1+='<tr><td><font face="Arial" font size="2">Group : </font></td><td>'+
				 	'<font face="Arial" size="2">'+
					'<select size="1" name="group" id=group>';
				for (j=0;j<g_total_group_no;j++)
		 		{
		 			groupname=g_groupname_array[j];
	 				menustr1+='<option value="'+groupname+'">'+groupname+'</option>';
		 		}
	  			menustr1+='</select></font></td></tr>';
	  			
				menustr1+='<tr><td><font face="Arial" size="2">Expired Time : </font></td><td>'+
				 		' <font face="Arial" size="2">'+
				 		' <input type="text" name="expired_time"'+
				 		' id=expired_time'+
				 		' size="12"/'+
				 		'</font></td></tr>';
				menustr1+='<tr><td><font face="Arial" size="2">IP : </font></td><td>'+
				 		' <font face="Arial" size="2">'+
				 		' <input type="text" name="userip"'+
				 		' id=userip'+
				 		' size="12"/'+
				 		'</font></td></tr>';
				menustr1+='<tr><td><font face="Arial" size="2">MAC ID : </font></td><td>'+
				 		' <font face="Arial" size="2">'+
				 		' <input type="text" name="macid"'+
				 		' id=macid'+
				 		' size="12"/'+
				 		'</font></td></tr>';
				menustr1+='<tr><td><input type="button" value="Add" onclick=call_Add_User() name="Save" /></td></tr></table>'+
				'</div>'+
			'</div></td>';

	if (g_show_free_version!=1)
	{
		if (g_expired_user==1)
		{
				menustr1+='<td valign="top"><p style="margin-top: 10"><Input disabled name="user_cut_field" id="user_cut_field" type="button" value="&nbsp;&nbsp;Cut&nbsp;&nbsp;&nbsp;" onclick="javascript:callezserver_cut_selected_user();" />';
		}else if (g_expired_user==0)
		{
			if (g_copy_paste==0)
			{
				menustr1+='<td valign="top"><p style="margin-top: 10"><Input name="user_cut_field" id="user_cut_field" type="button" value="&nbsp;&nbsp;Cut&nbsp;&nbsp;&nbsp;" onclick="javascript:callezserver_cut_selected_user();" />';
			}else
			{
				menustr1+='<td valign="top"><p style="margin-top: 10"><Input name="user_cut_field" id="user_cut_field" type="button" value="&nbsp;Paste&nbsp;" onclick="javascript:callezserver_paste_selected_user();" />';
			}
		}
	}else
	{
			menustr1+='<td valign="top"><p style="margin-top: 10"><Input disabled name="user_cut_field" id="user_cut_field" type="button" value="&nbsp;&nbsp;Cut&nbsp;&nbsp;&nbsp;" onclick="javascript:callezserver_cut_selected_user();" />';
	}
	//menustr1+='<td><p style="margin-top: 10"><Input disabled name="user_cut_field" id="user_cut_field" type="button" value="&nbsp;&nbsp;Cut&nbsp;&nbsp;&nbsp;" onclick="javascript:callezserver_cut_selected_user();" />';
	//menustr1+='&nbsp<Input type="button" value="Export" onclick="javascript:call_export_user_profile();" />'+
	
	menustr1+='&nbsp<Input name="cleanup_expired_user" id="cleanup_expired_user" type="button" value="Cleanup" onclick="javascript:callezserver_cleanup_expired_user();" />';
	if (g_expired_user==1)
	{
		menustr1+='&nbsp<Input name="expired_user_button" id="expired_user_button" type="button" value="All" onclick="javascript:callezserver_get_all_user();" />';
		menustr1+='&nbsp<input type="button" value="Delete" disabled onclick="javascript:callezserver_delete_selected_user();" />';
	}else if (g_expired_user==0)
	{
		menustr1+='&nbsp<Input name="expired_user_button" id="expired_user_button" type="button" value="Expired" onclick="javascript:callezserver_get_expired_user();" />';
		menustr1+='&nbsp<input type="button" value="Delete" onclick="javascript:callezserver_delete_selected_user();" />';
	}
	
	menustr1+='&nbsp<input name="user_search_field" id="user_search_field" size="20" value="'+g_search_text+'"/></font><font face="Arial">';
	if (g_user_found_position>0)
	{
	   menustr1+='&nbsp<input type="button" value="Find Next" onclick="javascript:callServer_search_user();" id="user_search_button" name="search_user" />';
	}else
	{
	   menustr1+='&nbsp<input type="button" value="Search" onclick="javascript:callServer_search_user();" id="user_search_button" name="search_user" />';
	}
	  menustr1+='</td></tr>'+
	  '<tr><td colspan=3><hr size="1" color="#66FFFF"></td></tr>'+
		      '</table>';
	if (total_count==0)
	{
		current_position=0;
		endposition=0;
	}else
	{
		endposition=current_position+total_no-1;
	}
	menustr2='<table width=100%><tr><td width="13%" align="right">'+'<font face="Arial"> <font size="2">Showing '+ current_position+' to '+endposition+' of </td>';
	menustr2+='<td width="20%" id=total_no_top_id>'+'<font face="Arial"> <font size="2">'+total_count+' users</td>';
	position=1;
	limit=g_constant_limit;
	if (total_count>g_constant_limit)
	{
		menustr2+='<td width="67%"><font face="Arial" size="2"><input type="button" value="First" onclick="javascript:call_get_first_user('+position+','+limit+')"; /> </font>';
	
		if (current_position-g_constant_limit<0)
		{
				
			menustr2+='<font face="Arial" size="2"><input type="button" disabled value="Previous" onclick="javascript:call_get_users('+position+','+limit+')"; /> </font>';
		}else
		{
			position=current_position-g_constant_limit;
			if ((position+g_constant_limit)<=total_count)
			{
				limit=g_constant_limit;
			}else
			{
				limit=total_count%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
			}
			menustr2+='<font face="Arial" size="2"><input type="button" value="Previous" onclick="javascript:call_get_users('+position+','+limit+')"; /> </font>';
		}
		// user sequence
		total_sequence=Math.floor(total_count/g_constant_limit);
		//alert(total_sequence);
		if ((total_count%g_constant_limit) > 0)
		{
			total_sequence++;
		}
		
		curren_sequence_no=Math.floor(current_position/g_constant_limit)+1;
		//alert(curren_sequence_no);
		if ((total_sequence-curren_sequence_no)<g_sequence_constant_limit)
		{
			start_sequence_no=total_sequence-g_sequence_constant_limit;
		}else
		{
			start_sequence_no=curren_sequence_no-(g_sequence_constant_limit/2);
		}
		//alert(start_sequence_no);
		if (start_sequence_no<=0) start_sequence_no=1;
		//if (total_sequence<g_sequence_constant_limit)
		//{
		//	start_sequence_no=1;
		//}
		for (i=(start_sequence_no-1)*g_constant_limit+1,j=start_sequence_no,k=1;;j++,k++)
		{
			if (j>=total_sequence)
			{
				position=i;
				limit=total_count%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
				if (j<10)
				{
					if (j==curren_sequence_no)
					{
						menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="0'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /> </font>';
					}else
					{
						menustr2+='<font face="Arial" size="2"><input type="button" value="0'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /> </font>';
					}
				}else
				{
					if (j==curren_sequence_no)
					{
						menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /> </font>';
					}else
					{
						menustr2+='<font face="Arial" size="2"><input type="button" value="'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /> </font>';
					}
				}
				//menustr2+='</td>';
				break;
			}
			if (k<=g_sequence_constant_limit)
			{
				position=i;
				limit=g_constant_limit;
				if (j<10)
				{
					if (j==curren_sequence_no)
					{
						menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="0'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /> </font>';
					}else
					{
						menustr2+='<font face="Arial" size="2"><input type="button" value="0'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /> </font>';
					}
				}else
				{
					if (j==curren_sequence_no)
					{
						menustr2+='<font face="Arial" size="2"><input style="background-color:#ff0000" type="button" value="'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /> </font>';
					}else
					{
						menustr2+='<font face="Arial" size="2"><input type="button" value="'+j+'" onclick="javascript:call_get_users('+position+','+limit+')"; /> </font>';
					}
				}
				i+=g_constant_limit;
			}else
			{
				//menustr2+='</td>';
				break;
			}
			
			
		}
		if (endposition+1<=total_count)
		{
			position=endposition+1;
			if ((position+g_constant_limit)<=total_count)
			{
				limit=g_constant_limit;
			}else
			{
				limit=total_count%g_constant_limit;
				if (limit==0) limit=g_constant_limit;
			}
			menustr2+='<font face="Arial" size="2"><input type="button" value="Next" onclick="javascript:call_get_users('+position+','+limit+')"; /> </font>';
		}else
		{
			menustr2+='<font face="Arial" size="2"><input type="button" disabled value="Next" onclick="javascript:call_get_users('+position+','+limit+')"; /> </font>';
		}
		if ((total_count%g_constant_limit)==0)
		{
			position=total_count-g_constant_limit+1;
			limit=g_constant_limit;
		}else
		{
			position=total_count-(total_count%g_constant_limit)+1;
			limit=total_count%g_constant_limit;
			if (limit==0) limit=g_constant_limit;
		}
		menustr2+='<font face="Arial" size="2"><input type="button" value="Last" onclick="javascript:call_get_users('+position+','+limit+')"; /></font>';
	}else
	{
		menustr2+='<td>';
	}
	menustr2+='</td></tr></table>';
      	content.innerHTML=menustr1+HTML_str+menustr2;
 }

 
}
function blacklist_remove_all()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
      if (response==1)
    {
	 callServer_blacklist_Inquery();
    } else
    {
   	alert("Failed to Remove All");
   }
 g_remove_all_button.innerHTML='<font face="Arial" size="2">Remove</font>';
    	
  }
}

function call_blacklist_remove_all() {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var confirm_msg;
	
  	g_token=find_cookie_value("token");
 	g_remove_all_button= document.getElementById("blacklist_remove_all");
 	//alert(g_remove_all_button);
	confirm_msg="Remove All?";
	if (confirm(confirm_msg))
	{
	 cgi_url = "/server/remove_all_black_list?token="+escape(g_token)+"&flag="+Math.random();
	
     	 g_remove_all_button.innerHTML='<font size="2" face="Arial">Removing</font>';
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = blacklist_remove_all;
	 xmlHttp.send(null);
	 }

}
function blacklist_remove_ip()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
	// g_blacklist_remove_item.innerHTML='<font face="Arial" size="2">Remove</font>';
	 callServer_blacklist_Inquery();
    } else
    {
   	alert("Failed to Remove");
 	callServer_blacklist_Inquery();

//  	g_blacklist_remove_item.innerHTML='<font face="Arial" size="2">Remove</font>';
  }
    	
  }
}
function callServer_blacklist_remove_ip(ip) {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var confirm_msg;
	
	blacklist_ip_remove_button="blacklist_ip_remove_button="+ip;
// alert(blacklist_ip_remove_button);
//    var detail = parent.document.getElementById("detail");
	g_blacklist_remove_item=document.getElementById(blacklist_ip_remove_button);
  	g_token=find_cookie_value("token");
	confirm_msg="Remove "+ip+" ?";
	if (confirm(confirm_msg))
	{
	 cgi_url = "/server/remove_ip_black_list?token="+escape(g_token)+"&ipaddress="+ip+"&flag="+Math.random();
	// alert(cgi_url);
	
	g_blacklist_remove_item.innerHTML='<font face="Arial" size="2">Removing</font>';
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = blacklist_remove_ip;
	 xmlHttp.send(null);
	 }

}
function blacklist_inquery()
{
 
 if (xmlHttp.readyState == 4) {


    var response = xmlHttp.responseText.split("\r\n");
 /*   var group_no;
    var group_name;
    var group_concurrent_connection;
    var group_src;
    var group_title="<p>"+"Group List"+"</p>";
    var group_list;
   */
   var ip_no;
   var username;
   var ip;
   var macid;
   var country;
    var i=0;
 	var blacklist_no=0;
	var HTML_str='';
	var strlength=0;
	var pos=0;
 //   var detail = parent.document.getElementById("detail");
	var content = parent.document.getElementById("content");

	//content.innerHTML="";
	 HTML_str= '<table border="0">'+
	  '<tr>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">No.</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">User</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">IP</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">MAC Address</font></td>'+
	      '<td width="100" height="17" align="center"><font face="Arial" size="2">Country</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">Failed Login times</font></td>'+
	      '<td width="200" height="17" align="center"><font face="Arial" size="2">Available Login times</font></td>'+
 	      '</tr>'+'<tr><td  colspan="7"><hr size="1" color="#66FFFF"></td></tr>';
 	

	 while (1)
	{
//		alert(response[i]);
 	 	if (response[i]==0) break;
	 	strlength=response[i].length;
	 	//alert(strlength);
   	    	ip_no=response[i].slice(3,strlength);
   	    	//alert(ip_no);
     	 	strlength=response[i+1].length;
   	    	username=response[i+1].slice(9,strlength);

     	 	strlength=response[i+2].length;
   	    	ip=response[i+2].slice(3,strlength);
   	    	//alert(ip);
   	    	
    	 	strlength=response[i+3].length;
   	    	macid=response[i+3].slice(6,strlength);
   	    	
    	 	
    	 	strlength=response[i+4].length;
   	    	country=response[i+4].slice(8,strlength);
   	    	//alert(country);
   	    	
   	 	strlength=response[i+5].length;
   	    	tryno=response[i+5].slice(6,strlength);

   	 	strlength=response[i+6].length;
   	    	availno=response[i+6].slice(8,strlength);
 
 		i=i+7;
		blacklist_no++;
		HTML_str=HTML_str+
		   '<tr>'+
		      '<td width="100" align="center"><font face="Arial" size="2">'+ip_no+'</font></td>'+
		      '<td width="100" align="center"><font face="Arial" size="2">'+username+'</font></td>'+
		      '<td width="100" align="center"><font face="Arial" size="2">'+ip+'</font></td>'+
		      '<td width="100" align="center"><font face="Arial" size="2">'+macid+'</font></td>'+
		      '<td width="100" align="center"><font face="Arial" size="2">'+country+'</font></td>'+
		      '<td width="200" align="center"><font face="Arial" size="2">'+tryno+'</font></td>'+
		      '<td width="200" align="center"><font face="Arial" size="2">'+availno+'</font></td>'+

		      '<td id=blacklist_ip_remove_button='+ip+' align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=callServer_blacklist_remove_ip("'+ip+'")>'+
	      	      ' <img border="0" id="delbutton" alt="Remove" title="Remove" src="del.png"></a></td>'+
		    '</tr>';
		   // alert(HTML_str);
     }
        //detail.innerHTML=HTML_str;
      // alert(menu_main.innerHTML);
  
  	content.innerHTML='<table width=100%><tr>'+
  	      '<td id=blacklist_remove_all width=80%>'+
   	      '<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Refresh" onclick="javascript:callServer_blacklist_Inquery();" />'+	      
  	      '&nbsp<Input type="button" value="Remove All" onclick="javascript:call_blacklist_remove_all();" />'+
  	      '</td>'+
		'<td align=right width=20%>'+
  		'<p style="margin-left: 5"><font face="Arial" size="2">Total: '+ blacklist_no+'</td>'+
  	      '</tr></table>'+HTML_str;
 	      
 }

 
}

function callServer_blacklist_Inquery() {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
//    var detail = parent.document.getElementById("detail");
	var content = parent.document.getElementById("content");
  	g_token=find_cookie_value("token");
  	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;

 cgi_url = "/server/query_black_list?token="+escape(g_token)+"&flag="+Math.random();
 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Blacklist Loading...<p>';


 xmlHttp.open("GET", cgi_url, true);
 xmlHttp.onreadystatechange = blacklist_inquery;
 xmlHttp.send(null);

}
function Disable_Balancer_Respponse() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    
 	 var balancer_header_item=document.getElementById("balancer_header");
	 balancer_header_item.innerHTML='<font face="Arial" size="2"><input type="radio" value="V1" checked name="R1" onclick="javascript:checked_disable_balancer()"><b>Disabled</b><input type="radio" name="R1" value="V3" onclick="javascript:checked_master_balancer()"><b>By Geo. Location</b><input type="radio" name="R1" value="V4" onclick="javascript:checked_edge_balancer()"><b>By Max. Streaming No.</b></font>';
    	callServer_balancer_Inquery();
    }
 
}
function Checked_Master_Balancer_Respponse() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
 	 var balancer_header_item=document.getElementById("balancer_header");
	 balancer_header_item.innerHTML='<font face="Arial" size="2"><input type="radio" value="V1" name="R1" onclick="javascript:checked_disable_balancer()"><b>Disabled</b><input type="radio" name="R1" value="V3" checked onclick="javascript:checked_master_balancer()"><b>By Geo. Location</b><input type="radio" name="R1" value="V4" onclick="javascript:checked_edge_balancer()"><b>By Max. Streaming No.</b></font>';
    	callServer_balancer_Inquery();
    }
 
}
function Checked_Edge_Balancer_Respponse() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
	 var balancer_header_item=document.getElementById("balancer_header");
	 balancer_header_item.innerHTML='<font face="Arial" size="2"><input type="radio" value="V1" name="R1" onclick="javascript:checked_disable_balancer()"><b>Disabled</b><input type="radio" name="R1" value="V3" onclick="javascript:checked_master_balancer()"><b>By Geo. Location</b><input type="radio" name="R1" value="V4" checked onclick="javascript:checked_edge_balancer()"><b>By Max. Streaming No.</b></font>';
  	callServer_balancer_Inquery();
    }
 
}

function checked_disable_balancer()
{
	 confirm_msg="Disable Balancer?";
	 if (confirm(confirm_msg))
	 {
		 cgi_url = "/server/disable_balancer?token="+escape(g_token)+"&flag="+Math.random();	
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = Disable_Balancer_Respponse;
		 xmlHttp.send(null);
		 var balancer_header_item=document.getElementById("balancer_header");
		 balancer_header_item.innerHTML='<font face="Arial" size="2"><b>Updating</b></font>';
	 }else
	{
		callServer_balancer_Inquery();
	}
	 	
 }
function checked_master_balancer()
{
	 confirm_msg="Change to by Geo. Location?";
	 if (confirm(confirm_msg))
	 {
		 cgi_url = "/server/checked_master_balancer?token="+escape(g_token)+"&flag="+Math.random();	
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = Checked_Master_Balancer_Respponse;
		 xmlHttp.send(null);
		 var balancer_header_item=document.getElementById("balancer_header");
		 balancer_header_item.innerHTML='<font face="Arial" size="2"><b>Updating</b></font>';
	} else
 	{
 		callServer_balancer_Inquery();
 	}
}
function checked_edge_balancer()
{
	 confirm_msg="Change to By Max. Streaming No.";
	 if (confirm(confirm_msg))
	 {
		 cgi_url = "/server/checked_edge_balancer?token="+escape(g_token)+"&flag="+Math.random();	
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = Checked_Edge_Balancer_Respponse;
		 xmlHttp.send(null);
		 var balancer_header_item=document.getElementById("balancer_header");
		 balancer_header_item.innerHTML='<font face="Arial" size="2"><b>Updating</b></font>';
	} else
 	{
 		callServer_balancer_Inquery();
 	}
}

function Cancel_Add_Balancer()
{
	callServer_balancer_Inquery();

}
function Update_Blancer() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    //alert(response);
    if (response==1)
    {
    //	alert("Add Server Sucessfully");
    } else if (response==0)
    {
   	alert("Failed to Update Server");
    } else if (response==2)
    {
    	alert("Disk is error(FULL), Please contact administrator");
    }else if (response==3)
    {
    	alert("The Server is already in Database");
    }

	g_item.value=g_temp;
	g_item.style.backgroundColor = "#ffffff";
	//alert(add_id_button.innerHTML);
//	callServer_balancer_Inquery();
    }
}

function call_Update_Blancer(balancer_index)
{

	var servername_id="servername"+balancer_index;
	var username_id="username"+balancer_index;
	var szpassword_id="password"+balancer_index;
	var server_ip_id="server_ip"+balancer_index;
	var panel_port_id="panel_port"+balancer_index;
	var country_id="country"+balancer_index;
	var servername;
	var username;
	var szpassword;
	var server_ip;
	var panel_port;
	var country;
	var confirm_msg;
	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var pos;
	var alert_message;


 	g_item=document.getElementById(servername_id);
	servername=g_item.value;
	g_item=document.getElementById(username_id);
	username=g_item.value;
	g_item=document.getElementById(szpassword_id);
	szpassword=g_item.value;
	g_item=document.getElementById(server_ip_id);
	server_ip=g_item.value;
	g_item=document.getElementById(panel_port_id);
	panel_port=g_item.value;
	g_item=document.getElementById(country_id);
	country=g_item.value;
	if (servername.length==0)
	{
		alert("Slave Server Name is empty");
		return;
	}

   	g_token=find_cookie_value("token");

	cgi_url = "/server/update_balancer?token="+escape(g_token)+"&index="+balancer_index+"&servername="+escape(servername)+
	"&username="+escape(username)+
	"&password="+escape(szpassword)+
	"&server_ip="+escape(server_ip)+
	"&panel_port="+escape(panel_port)+
	"&country="+escape(country)+
	"&flag="+Math.random();
	//  alert(cgi_url);
	confirm_msg="Update Server "+servername+" ?";
	if (confirm(confirm_msg))
	{
	
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Update_Blancer;
		xmlHttp.send(null);
		g_temp=g_item.value;
		// g_item.value=g_item.value+" (Updating...)";
		g_item.style.backgroundColor = "#ff0000";
	}


}
function Add_Blancer() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
	    if (response==1)
	    {
	    //	alert("Add Server Sucessfully");
	 	callServer_balancer_Inquery();   
	    } else if (response==0)
	    {
	   	alert("Failed to Add Server");
	    } else if (response==2)
	    {
	    	alert("Disk is error(FULL), Please contact administrator");
	    }else if (response==3)
	    {
	    	alert("Server name is already in use.");
	    }
    }
}

function call_Add_Blancer()
{

var servername_id="servername";
var username_id="username";
var szpassword_id="password";
var server_ip_id="server_ip";
var panel_port_id="panel_port";
var country_id="country";
var servername;
var username;
var szpassword;
var server_ip;
var panel_port;
var country;




var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var pos;
	var expired_time_temp;
 	var pos;
	var expired_time_temp;
	var alert_message;


 	g_item=document.getElementById(servername_id);
	servername=g_item.value;
	g_item=document.getElementById(username_id);
	username=g_item.value;
	g_item=document.getElementById(szpassword_id);
	szpassword=g_item.value;
	g_item=document.getElementById(server_ip_id);
	server_ip=g_item.value;
	g_item=document.getElementById(panel_port_id);
	panel_port=g_item.value;
	g_item=document.getElementById(country_id);
	country=g_item.value;
	if (servername.length==0)
	{
		alert("Slave Server Name is empty");
		return;
	}
	if (username.length==0)
	{
		alert("Admin. Name is empty");
		return;
	}
	if (szpassword.length==0)
	{
		alert("Password is empty");
		return;
	}
	if (server_ip.length==0)
	{
		alert("IP is empty");
		return;
	}
	if (panel_port.length==0)
	{
		alert("Panel Port is empty");
		return;
	}
	if (country.length==0)
	{
		alert("Country is empty");
		return;
	}
   	g_token=find_cookie_value("token");

  cgi_url = "/server/add_balancer?token="+escape(g_token)+"&servername="+escape(servername)+
 "&username="+escape(username)+
 "&password="+escape(szpassword)+
 "&server_ip="+escape(server_ip)+
 "&panel_port="+escape(panel_port)+
 "&country="+escape(country)+
 "&flag="+Math.random();
 //  alert(cgi_url);
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Add_Blancer;
	 xmlHttp.send(null);


}

function call_Add_New_Balancer()
{

var HTML_str;
var user_no;
var len;
var servername;
var username;
var szpassword;
var userip;
var panel_port;
var country;var str;
var content = parent.document.getElementById("content");
	

	g_balancer_server_no++;

	HTML_str=content.innerHTML;
	//alert(HTML_str);
	//len=HTML_str.length-16;
	len=HTML_str.lastIndexOf("<TABLE");
	
	if (len==-1)
	{
		len=HTML_str.lastIndexOf("<table");
	}
		
		//HTML_str=HTML_str.slice(800,len);
		//alert(HTML_str);
//	alert(len);
	//len+=6;
	HTML_str=HTML_str.slice(0,len);

	user_no=g_balancer_server_no;
//	alert(HTML_str);
	HTML_str=HTML_str+'<tr><td><table><tr>';
			HTML_str+='<td width="5%" align="center"><font face="Arial"> <font size="2">'+user_no+'</font></td>';
			HTML_str+='<td width="15%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input type="text" name="servername"'+
			' id=servername'+user_no+' size="20"></font></td>';

	
			HTML_str+='<td width="10%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input type="text" name="username"'+
			' id=username'+user_no+' size="12" value=root></font></td>';
			
			HTML_str+='<td width="20%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input type="text" name="password"'+
			' id=password'+user_no+' size="20"></font></td>';
	
			HTML_str+='<td width="10%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input type="text" name="server_ip"'+
			' id=server_ip'+user_no+' size="12" value=192.168.0.8></font></td>';
	
			HTML_str+='<td width="10%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input type="text" name="panel_port"'+
			' id=panel_port'+user_no+' size="12" value=18000></font></td>';
	
			HTML_str+='<td width="15%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input type="text" name="country"'+
			' id=country'+user_no+' size="20"></font></td>';
			
			HTML_str+='<td width="10%" align="center" id=server_status'+user_no+'>'+
				'<b><font color="#FF0000" face="Arial" size="2">OFF</font></b></td>';	
	 		
		      HTML_str+='<td id=add_id_button align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_Blancer("'+user_no+'")>'+
	      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a></td>'+
	      	      
		      '<td align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=Cancel_Add_Balancer()>'+
	      	      ' <img border="0" id="delbutton" alt="Cancel" title="Cancel" src="del_icon.PNG"></a></td>'+

		    '</tr></table></td></tr>';
	//alert(HTML_str);

	       content.innerHTML=HTML_str+'</table>';
  //      alert(user_list_info.innerHTML);
   
		
}

function Del_Balancer() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    //alert(response);
    if (response==1)
    {
    	alert("Delete Server Sucessfully");
    } else if (response==2)
    {
     	alert("Disk is error(FULL), Please contact administrator");  	
    } else if (response==0)
    {
   	alert("Failed to Delete Server");
    }
    	callServer_balancer_Inquery();
    }
}

//nction call_Del_User(user_no,username,szpassword,expired_time,paymodel,user_point)
function call_Del_Balancer(user_no)
{
var servername_id="servername"+user_no;
var servername;
var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
 
	g_item=document.getElementById(servername_id);
	servername=g_item.value;
	
   	g_token=find_cookie_value("token");

 confirm_msg="Delete Server: "+servername+" ?";
 cgi_url = "/server/del_balancer?token="+escape(g_token)+"&servername="+escape(servername)+"&flag="+Math.random();
  // alert(cgi_url);
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Del_Balancer;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	 g_item.value=g_item.value+" (del...)";
	g_item.style.backgroundColor = "#ff0000";
 }
 

}

function Query_Edge_Server() {

  if (xmlHttp.readyState == 4) {
	var response = xmlHttp.responseText.split("\r\n");
	var servername_id="servername"+g_edge_server_no;
	var username_id="username"+g_edge_server_no;
	var szpassword_id="password"+g_edge_server_no;
	var server_ip_id="server_ip"+g_edge_server_no;
	var panel_port_id="panel_port"+g_edge_server_no;
	var country_id="country"+g_edge_server_no;
	var max_connection_no_id="max_connection_no"+g_edge_server_no;
	var free_conneciton_no_id="free_conneciton_no"+g_edge_server_no;
	var server_status_id="server_status"+g_edge_server_no;
	
	var servername_id_item=document.getElementById(servername_id);
	var username_id_item=document.getElementById(username_id);
	var szpassword_id_item=document.getElementById(szpassword_id);
	var server_ip_id_item=document.getElementById(server_ip_id);
	var panel_port_id_item=document.getElementById(panel_port_id);
	var country_id_item=document.getElementById(country_id);
	var max_connection_no_id_item=document.getElementById(max_connection_no_id);
	var free_conneciton_no_id_item=document.getElementById(free_conneciton_no_id);
	var server_status_id_item=document.getElementById(server_status_id);
	
	var servername;
	var username;
	var szpassword;
	var userip;
	var panel_port;
	var country;
	var max_connection_no;
	var free_conneciton_no;
	var server_status;
	var i;
	
	i=0;
 	strlength=response[i].length;
    	servername=response[i].slice(11,strlength);
    	//alert(servername);
 	strlength=response[i+1].length;
    	username=response[i+1].slice(9,strlength);
    	//alert(username);
 	strlength=response[i+2].length;
    	szpassword=response[i+2].slice(9,strlength);
    	//alert(szpassword);
 	strlength=response[i+3].length;
    	server_ip=response[i+3].slice(10,strlength);
    	//alert(server_ip);
 	strlength=response[i+4].length;
    	panel_port=response[i+4].slice(11,strlength);
    	//alert(panel_port);
 	strlength=response[i+5].length;
    	country=response[i+5].slice(8,strlength);
    	//alert(country);
 	strlength=response[i+6].length;
    	max_connection_no=response[i+6].slice(13,strlength);

 	strlength=response[i+7].length;
    	free_conneciton_no=response[i+7].slice(8,strlength);

 	strlength=response[i+8].length;
    	server_status=response[i+8].slice(14,strlength);
     
        servername_id_item.value=servername;
	username_id_item.value=username;
	szpassword_id_item.value=szpassword;
	server_ip_id_item.value=server_ip;
	panel_port_id_item.value=panel_port;
	country_id_item.value=country;
	max_connection_no_id_item.innerHTML='<font face="Arial" size="2">'+max_connection_no+'</font>';
	free_conneciton_no_id_item.innerHTML='<font face="Arial" size="2">'+free_conneciton_no+'</font>';
	if (server_status==1)
	{
		server_status_id_item.innerHTML='<font face="Arial" size="2">ON</font>';
	}else if (server_status==2)
	{
		server_status_id_item.innerHTML='<font color="#00FF00" face="Arial" size="2">Checking</font>';
	}
	else {
		server_status_id_item.innerHTML='<b><font color="#FF0000" face="Arial" size="2">OFF</font></b>';
	}
	servername_id_item.style.backgroundColor= "#ffffff";
		
   }
}

//nction call_Del_User(user_no,username,szpassword,expired_time,paymodel,user_point)
function call_Query_Edge_Server(user_no)
{
var servername_id="servername"+user_no;
var servername;
var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
 
	g_item=document.getElementById(servername_id);
	servername=g_item.value;
	
	g_edge_server_no=user_no;
	
	
   	g_token=find_cookie_value("token");

 cgi_url = "/server/query_edge_server?token="+escape(g_token)+"&servername="+escape(servername)+"&flag="+Math.random();
  // alert(cgi_url);

	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Query_Edge_Server;
	 xmlHttp.send(null);
	g_item.style.backgroundColor = "#ff0000";

}
function balancer_inquery()
{
 
  if (xmlHttp.readyState == 4) {


	var response = xmlHttp.responseText.split("\r\n");
	var balancertype;
	var servername;
	var username;
	var szpassword;
	var userip;
	var panel_port;
	var country;
	var max_connection_no;
	var free_conneciton_no;
	var server_status;
	var user_title="<p>"+"User List"+"</p>";
	var user_list;
	var i=0;
	var user_no=1;
	var total_user_no=0;
	var HTML_str='';
	var strlength=0;
	var pos=0;
	var content = parent.document.getElementById("content");
	var menustr;

	content.innerHTML="";
	//detail.innerHTML="";
	
	content.innerHTML="";
	HTML_str= '<table border="0 align="center">';
	strlength=response[0].length;
	balancertype=response[0].slice(13,strlength);
	//alert(balancertype);
	if (balancertype==0)
	{		
		 HTML_str+= '<tr><td id=balancer_header colspan="10"><font face="Arial" size="2"><input type="radio" value="V1" checked name="R1" onclick="javascript:checked_disable_balancer()"><b>Disabled</b><input type="radio" name="R1" value="V3" onclick="javascript:checked_master_balancer()"><b>By Geo. Location</b><input type="radio" name="R1" value="V4" onclick="javascript:checked_edge_balancer()"><b>By Max. Streaming No.</b></font></td></tr>';
	}else if (balancertype==2)
	{
		 HTML_str+= '<tr><td id=balancer_header colspan="10"><font face="Arial" size="2"><input type="radio" value="V1" name="R1" onclick="javascript:checked_disable_balancer()"><b>Disabled</b><input type="radio" name="R1" value="V3" onclick="javascript:checked_master_balancer()"><b>By Geo. Location</b><input type="radio" name="R1" value="V4" checked onclick="javascript:checked_edge_balancer()"><b>By Max. Streaming No.</b></font></td></tr>';
	}else if (balancertype==1)
	{
		 HTML_str+= '<tr><td id=balancer_header colspan="10"><font face="Arial" size="2"><input type="radio" value="V1" name="R1" onclick="javascript:checked_disable_balancer()"><b>Disabled</b><input type="radio" name="R1" value="V3" checked onclick="javascript:checked_master_balancer()"><b>By Geo. Location</b><input type="radio" name="R1" value="V4" onclick="javascript:checked_edge_balancer()"><b>By Max. Streaming No.</b></font></td></tr>';
	}else if (balancertype==-1)
	{
		alert("For Enterprise Version Only...");
	}
	if (balancertype!=-1)
	{
		i=i+1;	
		HTML_str+='</tr>'+'<tr><td  colspan="11"><hr size="1" color="#66FFFF"></td></tr>';
		  HTML_str+='<tr>'+
		      '<td width="5%" align="left"><p style="margin-left: 5"><font face="Arial" size="2">No.</font></td>';
			     HTML_str+='<td width="10%" align="center"><font face="Arial" size="2">Slave Server Name</font></td>'+
			      '<td width="10%" align="center"></td>'+
			      '<td width="10%" align="center"><font face="Arial" size="2">Admin. Name</font></td>'+
			      '<td width="10%" align="center"><font face="Arial" size="2">Password</font></td>'+
			      '<td width="10%" align="center"><font face="Arial" size="2">Domain/IP</font></td>'+
			      '<td width="10%" align="center"><font face="Arial" size="2">Panel Port</font></td>'+
			      '<td width="10%" align="center"><font face="Arial" size="2">Country</font></td>'+
			      '<td width="10%" align="center"><font face="Arial" size="2">Max Connection</font></td>'+
			      '<td width="10%" align="center"><font face="Arial" size="2">Free Connection</font></td>'+
			      '<td width="10%" align="center"><font face="Arial" size="2">Status</font></td>'+
		 	 '</tr>'+'<tr><td  colspan="11"><hr size="1" color="#66FFFF"></td></tr>';
		      
		      	
	 	i=1;
		while (1)
		{
		 	if (response[i]==0) break;
			//alert(response[i]);
		 	strlength=response[i].length;
		    	servername=response[i].slice(11,strlength);
		    	//alert(servername);
		 	strlength=response[i+1].length;
		    	username=response[i+1].slice(9,strlength);
		    	//alert(username);
		 	strlength=response[i+2].length;
		    	szpassword=response[i+2].slice(9,strlength);
		    	//alert(szpassword);
		 	strlength=response[i+3].length;
		    	server_ip=response[i+3].slice(10,strlength);
		    	//alert(server_ip);
		 	strlength=response[i+4].length;
		    	panel_port=response[i+4].slice(11,strlength);
		    	//alert(panel_port);
		 	strlength=response[i+5].length;
		    	country=response[i+5].slice(8,strlength);
		    	//max_connection_no(country);
		 	strlength=response[i+6].length;
		    	max_connection_no=response[i+6].slice(13,strlength);
		    	//alert(max_connection_no);
		 	strlength=response[i+7].length;
		    	free_conneciton_no=response[i+7].slice(8,strlength);		    	
		    	//alert(free_conneciton_no)
		 	strlength=response[i+8].length;
		    	server_status=response[i+8].slice(14,strlength);
		    	//alert(server_status);
		
			i=i+9;
			HTML_str+='<tr>';
			HTML_str+='<td width="5%" align="left"><p style="margin-left: 5"><font face="Arial"> <font size="2">'+user_no+'</font></td>';
			HTML_str+='<td width="15%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input type="text" name="servername"'+
			' id=servername'+user_no+' size="20" value="'+
			servername+'"/></font></td>'+
			'<td  style="cursor: pointer;" width="20">'+
			'<div class="dropdown">'+
				'<button class="dropbtn">'+
  				'<div class="bar1"></div>'+
  				'<div class="bar2"></div>'+
  				'<div class="bar3"></div>'+
				'</button>'+
  				'<div class="dropdown-content">'+
     					"<a href='javascript:void(0)'"+
					' onclick=call_Update_Blancer("'+user_no+'")>'+'<table><tr><td width=10%><img src="save.png"></td><td><font face="Arial" size="3"><b>Save</b></font></td></tr></table></a>'+
    					"<a href='javascript:void(0)'"+
					' onclick=call_Del_Balancer("'+user_no+'")>'+'<table><tr><td width=10%><img src="del.png"></td><td><font face="Arial" size="3"><b>Delete</b></font></td></tr></table></a>'+
					"<a href='javascript:void(0)'"+
					' onclick=call_Query_Edge_Server("'+user_no+'")>'+'<table><tr><td width=10%><img src="refresh.png"></td><td><font face="Arial" size="3"><b>Refresh</b></font></td></tr></table></a>'+
    					'</div>'+
			'</div>'+
	 		'</td>';	
			HTML_str+='<td width="10%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input type="text" name="username"'+
			' id=username'+user_no+' size="12" value="'+
			username+'"/></font></td>';
			
			HTML_str+='<td width="20%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input type="text" name="password"'+
			' id=password'+user_no+' size="20" value="'+
			szpassword+'"/></font></td>';
	
			HTML_str+='<td width="10%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input type="text" name="server_ip"'+
			' id=server_ip'+user_no+' size="12" value="'+
			server_ip+'"/></font></td>';
	
			HTML_str+='<td width="10%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input type="text" name="panel_port"'+
			' id=panel_port'+user_no+' size="5" value="'+
			panel_port+'"/></font></td>';
	
			HTML_str+='<td width="15%" align="center">'+
			' <font face="Arial" font size="2">'+
			' <input type="text" name="country"'+
			' id=country'+user_no+' size="10" value="'+
			country+'"/></font></td>';
		 		
			HTML_str+='<td width="10%" align="center" id=max_connection_no'+user_no+'>'+
			'<font face="Arial" size="2">'+max_connection_no+'</font></td>';
			HTML_str+='<td width="10%" align="center" id=free_conneciton_no'+user_no+'>'+
			'<font face="Arial" color="#0000FF" size="2">'+free_conneciton_no+'</font></td>';
			if (server_status==1)
			{
				HTML_str+='<td width="10%" align="center" id=server_status'+user_no+'>'+
				'<font face="Arial" size="2">ON</font></td>';
			}else if (server_status==2)
			{
				HTML_str+='<td width="10%" align="center" id=server_status'+user_no+'>'+
				'<font color="#00FF00" face="Arial" size="2">Checking</font></td>';
			}
			else {
				HTML_str+='<td width="10%" align="center" id=server_status'+user_no+'>'+
				'<b><font color="#FF0000" face="Arial" size="2">OFF</font></b></td>';
			}
		
			
			HTML_str+='</tr>';
			total_user_no++;
			user_no++;
			//alert(HTML_str);
			
		}
		
		HTML_str=HTML_str+'</table>';
		if (balancertype>0)
		{
		menustr='<table width=100%><tr>';
		menustr+='<td width="4%">'+
		'<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Add" onclick="javascript:open_modal();" />';
		menustr+='<div id="PanelModal" class="modal">'+
				'<div class="modal-content">'+
				'<span onclick="javascript:close_modal();" class="close">&times;</span>';
    				menustr+='<table align="center">';
    				
				menustr+='<tr><td><font face="Arial" font size="2">Slaver Name: </font></td><td width="20">'+
				 	' <font face="Arial" size="2">'+
				 	' <input type="text" name="servername"'+
				 	' id=servername'+
				 	' size="20"/'+
				 	'</font></td></tr>';
				menustr+='<tr><td><font face="Arial" font size="2">Admin. Name: </font></td><td width="20">'+
				 	' <font face="Arial" size="2">'+
				 	' <input type="text" name="username"'+
				 	' id=username'+
				 	' size="12"/'+
				 	'</font></td></tr>';
				menustr+='<tr><td><font face="Arial" font size="2">Password: </font></td><td width="20">'+
				 	' <font face="Arial" size="2">'+
				 	' <input type="text" name="password"'+
				 	' id=password'+
				 	' size="20"/'+
				 	'</font></td></tr>';
				menustr+='<tr><td><font face="Arial" font size="2">Domain (IP): </font></td><td width="20">'+
				 	' <font face="Arial" size="2">'+
				 	' <input type="text" name="server_ip"'+
				 	' id=server_ip'+
				 	' size="12"/'+
				 	'</font></td></tr>';
				menustr+='<tr><td><font face="Arial" font size="2">Panel port: </font></td><td width="20">'+
				 	' <font face="Arial" size="2">'+
				 	' <input type="text" name="panel_port"'+
				 	' id=panel_port'+
				 	' size="5"/'+
				 	'</font></td></tr>';
				menustr+='<tr><td><font face="Arial" font size="2">Country: </font></td><td width="20">'+
				 	' <font face="Arial" size="2">'+
				 	' <input type="text" name="country"'+
				 	' id=country'+
				 	' size="20"/'+
				 	'</font></td></tr>';
				
				menustr+='<tr><td><input type="button" value="Add" onclick=call_Add_Blancer() name="Save" /></td></tr></table>'+
				'</div>'+
			'</div></td>';
		menustr+='<td valign="top"><p style="margin-top: 10"><Input type="button" value="Refresh" onclick="javascript:callServer_balancer_Inquery();" />'+
		'<td width=20% align=right>'+'<p style="margin-right: 5"><font face="Arial"> <font size="2">Total: '+ total_user_no+'</td>'+
		'</tr></table>';
		      
		      
		 }else
	 	{
			menustr='<table width=100%><tr><td width=100% align=right>'+'<p style="margin-right: 5"><font face="Arial"> <font size="2">Total: '+ total_user_no+'</td>'+
			'</tr></table>';
	 	}
		 	
		 content.innerHTML=menustr+HTML_str;
		g_balancer_server_no=total_user_no;
	}
 }

 
}
function callServer_balancer_Inquery() {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
//    var detail = parent.document.getElementById("detail");
	var content = parent.document.getElementById("content");
  	g_token=find_cookie_value("token");
  	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;

 cgi_url = "/server/query_balancer_list?token="+escape(g_token)+"&flag="+Math.random();
 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Balancer Loading...<p>';


 xmlHttp.open("GET", cgi_url, true);
 xmlHttp.onreadystatechange = balancer_inquery;
 xmlHttp.send(null);

}
function create_enigma_chlist()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
     if (response.length>1)
    {
    	alert(response);
    }else
    {		
  	alert("Failed to Create");
   }
   callServer_group_Inquery();
    	
    	
  }
}
function create_m3u8_ch_list()
{
 
 if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response.length>1)
    {
    	alert(response);
    }else
    {		
  	alert("Failed to Create");
   }
   callServer_group_Inquery();
    	
  }
}
function create_xbmc_ch_list()
{
 
 if (xmlHttp.readyState == 4) {
   var response = xmlHttp.responseText;
     if (response.length>1)
    {
   	alert(response);
    }else
    {		
  	alert("Failed to Create");
   }
   callServer_group_Inquery();
    	
    	
  }
}

function call_create_enigma_chlist() {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
//    var detail = parent.document.getElementById("detail");
	var content = parent.document.getElementById("content");
  	g_token=find_cookie_value("token");
  	var service_type;
  	
  	service_type=prompt("Please enter Service Type","1:0:1:0:0:0:0:0:0:0");
  	if (service_type!=null)
  	{

	 cgi_url = "/server/create_enigma_ch_list?token="+escape(g_token)+"&hostname="+location.hostname+"&enigma_serveice_parm="+service_type+"&flag="+Math.random();
	 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Creating Enigma Channel List...<p>';
	
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = create_enigma_chlist;
	 xmlHttp.send(null);
	 }

}
function call_create_m3u8_chlist() {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
//    var detail = parent.document.getElementById("detail");
	var content = parent.document.getElementById("content");
  	g_token=find_cookie_value("token");

 cgi_url = "/server/create_m3u8_ch_list?token="+escape(g_token)+"&hostname="+location.hostname+"&flag="+Math.random();
 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Creating M3U8 Channel List...<p>';


 xmlHttp.open("GET", cgi_url, true);
 xmlHttp.onreadystatechange = create_m3u8_ch_list;
 xmlHttp.send(null);

}
function call_create_xbmc_chlist() {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
//    var detail = parent.document.getElementById("detail");
	var content = parent.document.getElementById("content");
  	g_token=find_cookie_value("token");

 cgi_url = "/server/create_xbmc_ch_list?token="+escape(g_token)+"&hostname="+location.hostname+"&flag="+Math.random();
 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Creating XBMC Channel List...<p>';


 xmlHttp.open("GET", cgi_url, true);
 xmlHttp.onreadystatechange = create_xbmc_ch_list;
 xmlHttp.send(null);

}

function group_inquery()
{
 
 if (xmlHttp.readyState == 4) {


    var response = xmlHttp.responseText.split("\r\n");
    var group_no;
    var group_name;
    var group_concurrent_connection;
    var group_src;
    var group_mc_src;
    var group_title="<p>"+"Group List"+"</p>";
    var group_list;
    var i=0;
 	var group_active_no=0;
	var HTML_str='';
	var strlength=0;
	var pos=0;
	var str;
	var mc_name;
	var mc_selected;
	var menustr1;
 //   var detail = parent.document.getElementById("detail");
	var content = parent.document.getElementById("content");
	

	//content.innerHTML="";
	 HTML_str= '<table border="0" align="center">'+
	  '<tr>'+
	      '<td width="100" align="center"><font face="Arial" size="2">Group</font></td>'+
	      '<td width="150" align="cneter"><font face="Arial" size="2">Group Name</font></td>'+
	      '<td width="20" align="center"></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Channel No.</font></td>'+
	      '<td width="200" align="center"><font face="Arial" size="2">Movie Category</font></td>'+
 	      '<td width="200" align="center"><font face="Arial" size="2"> User Multiple Connection</font></td>'+
 	 '</tr>'+'<tr><td  colspan="6"><hr size="1" color="#66FFFF"></td></tr>';
 	
	while (1)
	{
 	 	if (response[i]==0) break;
//		alert(response[i]);
	 	strlength=response[i].length;
	 	//alert(strlength);
   	    	group_no=response[i].slice(3,strlength);
     	 	strlength=response[i+1].length;
   	    	group_name=response[i+1].slice(5,strlength);
    	 	
    	 	strlength=response[i+2].length;
   	    	group_concurrent_connection=response[i+2].slice(11,strlength);
   	    	
     	 	strlength=response[i+3].length;
   	    	group_src=response[i+3].slice(4,strlength);

     	 	strlength=response[i+4].length;
  	    	group_mc_src=response[i+4].slice(7,strlength);

 		i=i+5;
		group_active_no++;
		HTML_str=HTML_str+
		   '<tr>'+
		      '<td width="100" align="center"><font face="Arial" size="2">'+group_no+'</font></td>'+
		      '<td width="150" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="groupname"'+
	 		' id=groupname'+group_no+
	 		' size="20" value="'+
	 		group_name+'"/></font></td>'+
			'<td  style="cursor: pointer;" width="20">'+
			'<div class="dropdown">'+
				'<button class="dropbtn">'+
  				'<div class="bar1"></div>'+
  				'<div class="bar2"></div>'+
  				'<div class="bar3"></div>'+
				'</button>'+
  				'<div class="dropdown-content">'+
     					"<a href='javascript:void(0)'"+
					' onclick=callServer_update_group("'+group_no+'")>'+'<table><tr><td width=10%><img src="save.png"></td><td><font face="Arial" size="3"><b>Save</b></font></td></tr></table></a>'+
					"<a href='javascript:void(0)'"+
					' onclick=call_Del_group("'+group_no+'")>'+'<table><tr><td width=10%><img src="del.png"></td><td><font face="Arial" size="3"><b>Delete</b></font></td></tr></table></a>'+
    					'</div>'+
			'</div>'+
	 		'</td>'+	 		
		      '<td width="200" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="groupsrc"'+
	 		' id=groupsrc'+group_no+
	 		' size="35" value="'+
	 		group_src+'"/></font></td>';
		        
			HTML_str+='<td width="200" align="center">'+
	 		' <font face="Arial" size="2">'+' <select multiple style="width: 180;" name="groupmcsrc" id=groupmcsrc'+group_no+'>';
	 		while (1)
	 		{
	 			str=group_mc_src.search('=');
	 			if (str>0)
	 			{
	 				mc_name=group_mc_src.substring(0,str);
	 				mc_selected=group_mc_src.substring(str+1,str+2);
	 				//alert(mc_name);
	 				//alert(mc_selected);
	 				if (mc_selected==1)
	 				{
	 					HTML_str+='<option selected="selected" value="'+mc_name+'">'+mc_name+'</option>';
	 				}else
	 				{
	 					HTML_str+='<option value="'+mc_name+'">'+mc_name+'</option>';
	 				}
	 				group_mc_src=group_mc_src.substring(str+3);
	 			}else
	 				break;
	 			
	 		}
			HTML_str+='</select></font></td>';
	 		
	 		HTML_str+='<td width="150" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="groupconcurrentconnection"'+
	 		' id=groupconcurrentconnection'+group_no+
	 		' size="3" value="'+
	 		group_concurrent_connection+'"/></font></td>'+

		      
		    '</tr>';
     }
        //detail.innerHTML=HTML_str;
      // alert(menu_main.innerHTML);
  
  	menustr1='<td width="4%">'+
		'<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Add" onclick="javascript:open_modal();" />';
		menustr1+='<div id="PanelModal" class="modal">'+
				'<div class="modal-content">'+
				'<span onclick="javascript:close_modal();" class="close">&times;</span>';
    				menustr1+='<table align="center">';
    				
    				menustr1+='<tr><td><font face="Arial"><font size="2">Group Name : </font></td><td width="350" height="23">'+
				' <font face="Arial" size="2">'+
				' <input type="text" name="groupname"'+
				' id="groupname"'+
				' size="20" />'+
				'</font></td></tr>';
				
				
				menustr1+='<tr><td><font face="Arial"><font size="2">Channel No. : </font></td><td width="350" height="23">'+
				' <font face="Arial" size="2">'+
				' <input type="text" name="groupsrc"'+
				' id="groupsrc"'+
				' size="20" />'+
				'</font></td></tr>';
				
	 			menustr1+='<tr><td><font face="Arial" font size="2">Movie Category : </font></td><td>'+
				 	'<font face="Arial" size="2">'+
					'<select size="1" style="width: 180;" name="groupmcsrc" id=groupmcsrc>';
				menustr1+='<option selected="selected" value="'+'all'+'">'+'all'+'</option>';
		 		menustr1+='</select></font></td></tr>';
	  			
			
			
				menustr1+='<tr><td><font face="Arial" size="2">User Multiple Connection : </font></td><td>'+
				 		' <font face="Arial" size="2">'+
				 		' <input type="text" name="group_concurrentconnection"'+
				 		' id=group_concurrentconnection'+
				 		' size="3"/>'+
				 		'</font></td></tr>';
				menustr1+='<tr><td><input type="button" value="Add" onclick=call_Add_Group() name="Save" /></td></tr></table>'+
				'</div>'+
			'</div></td>';
			
  	content.innerHTML='<table width=100%><tr>'+
 	menustr1+
 	'<td  valign="top" align=right>'+
 	'<p style="margin-right: 5; margin-top: 10">'+
  	'<font face="Arial" size="2">Total: '+ group_active_no+'</td>'+
	'</tr></table>'+HTML_str;
	g_total_group_no=group_active_no;
 
 }

 
}

function callServer_group_Inquery() {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
//    var detail = parent.document.getElementById("detail");
	var content = parent.document.getElementById("content");
  	g_token=find_cookie_value("token");
  	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;

 cgi_url = "/server/query_group?token="+escape(g_token)+"&flag="+Math.random();
 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">Group Information Loading...<p>';


 xmlHttp.open("GET", cgi_url, true);
 xmlHttp.onreadystatechange = group_inquery;
 xmlHttp.send(null);

}
function group_inquery_item()
{
 
 if (xmlHttp.readyState == 4) {

    var response = xmlHttp.responseText.split("\r\n");
    var group_name;
    var i=0;
	var group_active_no=0;
	while (1)
	{
//		alert(group_active_no);
 	 	if (response[i]==0) break;
//		alert(response[i]);
    	 	strlength=response[i+1].length;
   	    	g_groupname_array[group_active_no]=response[i+1].slice(5,strlength);
//  	    	alert(g_groupname_array[group_active_no]);
 		i=i+5;
		group_active_no++;
	}
	g_total_group_no=group_active_no;
 	call_get_users_detail();
 }

 
}

function group_inquery_item_for_add()
{
 
 if (xmlHttp.readyState == 4) {


    var response = xmlHttp.responseText.split("\r\n");
    var group_name;
    var i=0;
	var group_active_no=0;
	
	while (1)
	{
 	 	if (response[i]==0) break;
//		alert(response[i]);
    	 	strlength=response[i+1].length;
   	    	g_groupname_array[group_active_no]=response[i+1].slice(5,strlength);
 // 	    	alert(g_groupname_array[group_active_no]);
 		i=i+5;
		group_active_no++;
	}
	g_total_group_no=group_active_no;
 	call_Add_New_User_detail(g_cur_userno);
 }

 
}
function group_inquery_item_for_add_multiple_user()
{
 
 if (xmlHttp.readyState == 4) {


    var response = xmlHttp.responseText.split("\r\n");
    var group_name;
    var i=0;
	var group_active_no=0;
	
	while (1)
	{
 	 	if (response[i]==0) break;
		//alert(response[i]);
    	 	strlength=response[i+1].length;
   	    	g_groupname_array[group_active_no]=response[i+1].slice(5,strlength);
 // 	    	alert(g_groupname_array[group_active_no]);
 		i=i+5;
		group_active_no++;
	}
	g_total_group_no=group_active_no;
 	call_Add_Multiple_User(g_cur_userno);
 }

 
}
function call_Add_New_Multiple_User(userno) {
  	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
    	g_token=find_cookie_value("token");
	g_cur_userno=userno;

  //	username_id="username"+userno;
    //	g_username_item=document.getElementById(username_id);

 cgi_url = "/server/query_group?token="+escape(g_token)+"&flag="+Math.random();

 xmlHttp.open("GET", cgi_url, true);
 xmlHttp.onreadystatechange = group_inquery_item_for_add_multiple_user;
 xmlHttp.send(null);

}
function server_shutdown(){
  var login_status = document.getElementById("login_status");

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
      if (response==1)
    {
//	 login_status.innerHTML='<font face="Arial" color="#FF0000" size="4">EZserver Closed</font>';  
    	alert("Restart EZserver Sucessfully");
    } else
    {
   	alert("Failed to Restart EZserver");
    }
 }
}
function callserver_shutdown()
{
// var login_status = document.getElementById("login_status");
// var ret=login_status.innerHTML.search("Logout");
   var shutdown_status = document.getElementById("content");
var confirm_msg="Restart EZserver?";
 var login_area = document.getElementById("login_area");
	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;

	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;

      	g_token=find_cookie_value("token");
      	if (g_token!=0)
      	{

		cgi_url = "/server/shutdown?token="+escape(g_token)+"&flag="+Math.random();
		
		if (confirm(confirm_msg))
		{
			shutdown_status.innerHTML='';
			// login_status.innerHTML='<font face="Arial" color="#FF0000" size="4">EZserver Closing...</font>';  
			 xmlHttp.open("GET", cgi_url, true);
			 xmlHttp.onreadystatechange = server_shutdown;
			 xmlHttp.send(null);
		}
	}
 	
}
function restart_ezserver(){
  var restart_status = document.getElementById("content");

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
      if (response==1)
    {
    	alert("Restarted EZserver and re-login Sucessfully");
 	login();
   } else
    {
   	alert("Failed to Restart EZserver");
     }
  //   restart_status.innerHTML='<p align="center"><font face="Arial" size="3"><a style="text-decoration:none" '+"href='javascript:void(0)'"+' onclick=callserver_restart()>Restart</a></font>';  
 }
}
function callserver_restart()
{
  var restart_status = document.getElementById("content");
// var ret=login_status.innerHTML.search("Logout");
 var confirm_msg="Restart EZserver?";
 //var login_area = document.getElementById("login_area");
	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;
      	g_token=find_cookie_value("token");
      	if (g_token!=0)
      	{

		cgi_url = "/server/restart_ezserver?token="+escape(g_token)+"&flag="+Math.random();
		
		if (confirm(confirm_msg))
		{
			// login_status.innerHTML='<font face="Arial" color="#FF0000" size="4">EZserver Closing...</font>';  
			 xmlHttp.open("GET", cgi_url, true);
			 xmlHttp.onreadystatechange = restart_ezserver;
			 xmlHttp.send(null);
			 restart_status.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="2">Restarting</font>'; 
		}

	}
 	
}
function open_middleware_windows()
{
	var middleware_url='http://'+location.host+'/middleware/index.htm';
	window.open(middleware_url);

}
function get_uptime()
{
   var home_field= parent.document.getElementById("home_field");
    var strlength;
 
   
	if (xmlHttp.readyState == 4) 
	{
		var response = xmlHttp.responseText;
		
		if (response.length>0)
		{
   			home_field.innerHTML="<a href='javascript:void(0)' onclick=show_uptime()>"+'<font face="Arial" size="2">'+response+'</font>'+'<a>';
   		}else
   		{
   			// clearInterval(g_server_timer);
   		}
   			
   		

	}

}
function show_uptime()
{
	var time_delay=5000;

    	cgi_url= "/server/inquery_uptime?token="+escape(g_token)+"&flag="+Math.random();

	xmlHttp.open("GET", cgi_url, true);
	xmlHttp.onreadystatechange =get_uptime ;
	xmlHttp.send(null);
	
	//setTimeout("show_uptime()",time_delay);
}
function system_info_inquery()
{
    
	if (xmlHttp.readyState == 4) 
	{
    		var response = xmlHttp.responseText.split("\r\n");
		var str;
		var i=0;
  		var content = parent.document.getElementById("content");
  		var static_mac_address;
  		var static_network_interface;
  		var static_pagination_limit_number;
  		var static_movie_number;
  		var static_channel_number
  		var mac_address=null;
  		var network_interface=null;
  		var content;
  		var ez_button;
  		var main_button;
  		var add_cuet_at;
  		var add_cuet;
  		var free_version_flag=0;
  		var static_user_number=0;
  		var active_connection_no=0;
  		var active_channel_no=0;
  		var uptime;
  		var act_str1;
  		var act_str2;
  		var act_str3;
  		var act_str4;
  		var version_date;
  		var field_object;
		var filter_flag=0;
		var balancer_flag=0;
		var mac_flag=0;
		var start_time;
		var group_no=0;
 		var download_bw;
		var upload_bw;
		var total_memory="N/A";
		var free_memory="N/A";;
		var disk_use="N/A";;
		var load_average="N/A";;
		var blacklist_no;
		
   		if (response[0].search("ezhometech")==0)
  		{
  			
 			
  			
  			str='<table align="center" border="1" cellpadding="0" cellspacing="20" width="100%" height="100%" bordercolor="#E1E1E1">'+
			    
			    '<tr>'+
			      '<td valign="top" id="system_id">'+
			        '</td>'+
			      '<td valign="top" id="subscriber_id">'+
			       '</td>'+
			      '<td valign="top" id="channel_movie_id">'+
			      '</td>'+
			    '</tr>'+
			  '</table>';
		//	str+='</td></tr></table>';
	  		while(1)
	  		{
				if (response[i]==0) break;
				/*if ((response[i].search("Channels:")==0)||
				(response[i].search("Groups:")==0)||
				(response[i].search("Start at:")==0)||
				(response[i].search("Upload Bandwidth:")==0))
				{
					str+='<tr><td><hr size="1" color="#66FFFF"></td></tr>';
				}
				if (response[i].search("Mac address")==0)
				{
					free_version_flag=0;
					static_mac_address="Mac address: ";
					mac_address=response[i].substring(static_mac_address.length);
					str+='<tr>'+
					'<td>'+
					'<p align="left" style="text-indent: 5"><font face="Arial" size="2">'+'<b>*</b> '+static_mac_address+'</font>'+
					'<font face="Arial" size="1">'+mac_address+'</font>'+
					'</p>'+
					'</td>'+      
					'</tr>';
				}else if (response[i].search("Limitation: Max")==0)
				{	
					
					free_version_flag=1;
					str+='<tr>'+
					'<td>'+
					'<p align="left" style="text-indent: 5"><font face="Arial" color="#FF0000" size="2">'+'<b>* '+response[i]+'</b></font>'+
					'</p>'+
					'</td>'+      
					'</tr>';
				}else if (response[i].search("Pagination Limit No.:")==0)
				{	
					
					static_pagination_limit_number="Pagination Limit No.: <b>";
					g_constant_limit=parseInt(response[i].substring(static_pagination_limit_number.length,response[i].length-4));
					//g_sequence_constant_limit=g_constant_limit;
				}else
				{
					str+='<tr>'+
					'<td>'+
					'<p align="left" style="text-indent: 5"><font face="Arial" size="2">'+'<b>*</b> '+response[i]+'</font>'+
					'</p>'+
					'</td>'+      
					'</tr>';
				}
				*/
				if (response[i].search("Mac address")==0)
				{
					free_version_flag=0;
					static_mac_address="Mac address: ";
					mac_address=response[i].substring(static_mac_address.length);
					
				}else if (response[i].search("Network interface")==0)
				{
					free_version_flag=0;
					static_network_interface="Network interface: ";
					network_interface=response[i].substring(static_network_interface.length);
					
				}else if (response[i].search("Start at: ")==0)
				{
					static_channel_number="Start at: <b>";
					
					start_time=response[i].substring(static_channel_number.length,response[i].length-4);
					
				}else
				if (response[i].search("Channels: ")==0)
				{
					static_channel_number="Channels: <b>";
					
					g_total_ch_no=response[i].substring(static_channel_number.length,response[i].length-4);
					//alert(g_total_ch_no);
					
					
				}else
				if (response[i].search("Movies: ")==0)
				{
					static_movie_number="Movies: <b>";
					
					g_total_movie_no=response[i].substring(static_movie_number.length,response[i].length-4);
					//alert(g_total_movie_no);
					
					
				}else
				if (response[i].search("Groups: ")==0)
				{
					static_user_number="Groups: <b>"
					group_no=response[i].substring(static_user_number.length,response[i].length-4);
				}else
				if (response[i].search("Subscribers: ")==0)
				{
					static_user_number="Subscribers: <b>"
					g_user_no=response[i].substring(static_user_number.length,response[i].length-4);
				}else
				if (response[i].search("Blacklist IP: ")==0)
				{
					static_user_number="Blacklist IP: <b>"
					blacklist_no=response[i].substring(static_user_number.length,response[i].length-4);
				}else
				if (response[i].search("Streaming Connections: ")==0)
				{
					static_user_number="Streaming Connections: <b>"
					active_connection_no=response[i].substring(static_user_number.length,response[i].length-4);
					//alert(active_connection_no);
				}else
				if (response[i].search("Active Channels: ")==0)
				{
					static_user_number="Active Channels: <b>"
					active_channel_no=response[i].substring(static_user_number.length,response[i].length-4);
					//alert(active_channel_no);
				}else
				if (response[i].search("Uptime: ")==0)
				{
					static_user_number="Uptime: <b>"
					uptime=response[i].substring(static_user_number.length,response[i].length-4);
					
				}else
				if (response[i].search("Version: ")==0)
				{
					static_user_number="Version: <b>"
					version_date=response[i].substring(static_user_number.length,response[i].length-4);
					
				}else
				if (response[i].search("Filter: ")==0)
				{
					static_user_number="Filter: <b>"
					filter_flag=response[i].substring(static_user_number.length,response[i].length-4);
					
				}else
				if (response[i].search("Balancer: ")==0)
				{
					static_user_number="Balancer: <b>"
					balancer_flag=response[i].substring(static_user_number.length,response[i].length-4);
					
				}else
				if (response[i].search("Mac: ")==0)
				{
					static_user_number="Mac: <b>"
					mac_flag=response[i].substring(static_user_number.length,response[i].length-4);
					
				}else
				if (response[i].search("Download Bandwidth: ")==0)
				{
					static_user_number="Download Bandwidth: <b>"
					download_bw=response[i].substring(static_user_number.length,response[i].length-4);
				}else
				if (response[i].search("Upload Bandwidth: ")==0)
				{
					static_user_number="Upload Bandwidth: <b>"
					upload_bw=response[i].substring(static_user_number.length,response[i].length-4);
				}else
				if (response[i].search("Total Memory: ")==0)
				{
					static_user_number="Total Memory: <b>"
					total_memory=response[i].substring(static_user_number.length,response[i].length-4);
				}else
				if (response[i].search("Free Memory: ")==0)
				{
					static_user_number="Free Memory: <b>"
					free_memory=response[i].substring(static_user_number.length,response[i].length-4);
				}else
				if (response[i].search("Disk Use: ")==0)
				{
					static_user_number="Disk Use: <b>"
					disk_use=response[i].substring(static_user_number.length,response[i].length-4);
				}else
				if (response[i].search("Load Average: ")==0)
				{
					static_user_number="Load Average: <b>"
					load_average=response[i].substring(static_user_number.length,response[i].length-4);
				}else if (response[i].search("Pagination Limit No.:")==0)
				{	
					
					static_pagination_limit_number="Pagination Limit No.: <b>";
					g_constant_limit=parseInt(response[i].substring(static_pagination_limit_number.length,response[i].length-4));
					//g_sequence_constant_limit=g_constant_limit;
				}

				i++;
			}
			//alert(act_str);
			//alert(str);
			content.innerHTML=str;	
			

			
			
			
			field_object=document.getElementById("version_id");
			field_object.innerHTML='<p align="center" style="margin-top: 5; margin-bottom: 5"><b><font face="Arial" color="#FFFFFF" size="6">'+version_date+'</font></b>';

			field_object=document.getElementById("sn_id");
			//alert(field_object);
			if (network_interface==null)
			{
				field_object.innerHTML='<p style="margin-left: 10; margin-right: 10"><font face="Arial" size="2" color="#ffffff"><b>'+'Limitation: Max. 5 channels<br><font face="Arial" size="3" color="#003366"><b>Max. 2 connections'+'</b></font></p>';
			}else
			{
				free_version_flag=0;
				if (mac_address==null)
				{
					field_object.innerHTML='<p align="left" style="margin-left: 35;"><font face="Arial" size="2" color="#00ffffff3366">Network interface: <b>'+network_interface+'</b><br>Server Type: <b>'+"VPS"+'</b></font></p>';
				}else
				{
					field_object.innerHTML='<p align="left" style="margin-left: 35;"><font face="Arial" size="2" color="#ffffff">Network interface: <b>'+network_interface+'</b><br>Mac address: <b>'+mac_address+'</b></font></p>';
				}
			}

			field_object=document.getElementById("system_id");
			field_object.innerHTML='<p style="margin-left: 22; margin-right: 10;margin-top: 25;margin-bottom: 25"><font face="Arial" size="4" color="#000000">System</font></p>'+
			        '<p style="margin-left: 22; margin-right: 10;margin-bottom: 0"><font face="Arial" size="2" color="#000000">Uptime</font><br>'+
			        '<p style="margin-left: 22; margin-right: 10;margin-top: 5"><font face="Arial" size="6" color="#000000">'+uptime+'</font></p>'+
			        '<table width="100%" style="margin-left: 22;">'+
			        '<tr>'+
			        '<td width=65%>'+
			        '<font face="Arial" size="2" color="#000000">Start at </font>'+
			        '</td>'+
			        '<td>'+
			        '<font face="Arial" size="2" color="#000000">'+start_time+'</font>'+
			        '</td>'+
			        '</tr>'+
			        '<tr>'+
			        '<td width=65%>'+
			        '<font face="Arial" size="2" color="#000000">Balancer Option</font>'+
			        '</td>'+
			        '<td>'+
			        '<font face="Arial" size="2" color="#000000">'+balancer_flag+'</font>'+
			        '</td>'+
			        '</tr>'+
			        '<tr>'+
			        '<td width=65%>'+
			        '<font face="Arial" size="2" color="#000000">User Agent Control</font>'+
			        '</td>'+
			        '<td>'+
			        '<font face="Arial" size="2" color="#000000">'+filter_flag+'</font>'+
			        '</td>'+
			        '</tr>'+
			        '<tr>'+
			        '<td width=65%>'+
			        '<font face="Arial" size="2" color="#000000">Total RAM size</font>'+
			        '</td>'+
			        '<td>'+
			        '<font face="Arial" size="2" color="#000000">'+total_memory+'</font>'+
			        '</td>'+
			        '</tr>'+
			        '<tr>'+
			        '<td width=65%>'+
			        '<font face="Arial" size="2" color="#000000">Available RAM size</font>'+
			        '</td>'+
			        '<td>'+
			        '<font face="Arial" size="2" color="#000000">'+free_memory+'</font>'+
			        '</td>'+
			        '</tr>'+
			        '<tr>'+
			        '<td width=65%>'+
			        '<font face="Arial" size="2" color="#000000">Disk Use</font>'+
			        '</td>'+
			        '<td>'+
			        '<font face="Arial" size="2" color="#000000">'+disk_use+'</font>'+
			        '</td>'+
			        '</tr>'+
			        '<tr>'+
			        '<td width=65%>'+
			        '<font face="Arial" size="2" color="#000000">Load average</font>'+
			        '</td>'+
			        '<td>'+
			        '<font face="Arial" size="2" color="#000000">'+load_average+'</font>'+
			        '</td>'+
			        '</tr>'+
			        '</table>';
			
			field_object=document.getElementById("channel_movie_id");
			field_object.innerHTML='<p style="margin-left: 22; margin-right: 10;margin-top: 25;margin-bottom: 25"><font face="Arial" size="4" color="#000000">Channels</font></p>'+
				'<p style="margin-left: 22; margin-right: 10;margin-bottom: 0"><font face="Arial" size="2" color="#000000">Active channels</font><br>'+
			        '<p style="margin-left: 22; margin-right: 10;margin-top: 5"><font face="Arial" size="6" color="#000000">'+active_channel_no+'</font></p>'+
			        '<table width="100%" style="margin-left: 22;">'+
			        '<tr>'+
			        '<td width=65%>'+
			        '<font face="Arial" size="2" color="#000000">Current channels</font>'+
			        '</td>'+
			        '<td>'+
			        '<font face="Arial" size="2" color="#000000">'+g_total_ch_no+'</font>'+
			        '</td>'+
			        '</tr>'+
			        '<tr>'+
			        '<td width=65%>'+
			        '<font face="Arial" size="2" color="#000000">Upload bandwidth</font>'+
			        '</td>'+
			        '<td>'+
			        '<font face="Arial" size="2" color="#000000">'+upload_bw+'</font>'+
			        '</td>'+
			        '</tr>'+
			        '</table>'+
			        '<hr size="1" color="#CCFFFF">'+
			        '<p style="margin-left: 22; margin-right: 10;margin-top: 25;margin-bottom: 25"><font face="Arial" size="4" color="#000000">Movies</font></p>'+
				'<p style="margin-left: 22; margin-right: 10;margin-bottom: 0"><font face="Arial" size="2" color="#000000">Current movies</font><br>'+
				'<p style="margin-left: 22; margin-right: 10;margin-top: 5"><font face="Arial" size="6" color="#000000">'+g_total_movie_no+'</font></p>';

			
			field_object=document.getElementById("subscriber_id");
			//alert(field_object);
			field_object.innerHTML='<p style="margin-left: 22; margin-right: 10;margin-top: 25;margin-bottom: 25"><font face="Arial" size="4" color="#000000">Users</font></p>'+
			        '<p style="margin-left: 22; margin-right: 10;margin-bottom: 0"><font face="Arial" size="2" color="#000000">Current connections</font><br>'+
			        '<p style="margin-left: 22; margin-right: 10;margin-top: 5"><font face="Arial" size="6" color="#000000">'+active_connection_no+'</font></p>'+
			        '<table width="100%" style="margin-left: 22;">'+
			        '<tr>'+
			        '<td width=65%>'+
			        '<font face="Arial" size="2" color="#000000">Current users</font>'+
			        '</td>'+
			        '<td>'+
			        '<font face="Arial" size="2" color="#000000">'+g_user_no+'</font>'+
			        '</td>'+
			        '</tr>'+
			        '<tr>'+
       			        '<td width=65%>'+
				'<font face="Arial" size="2" color="#000000">Groups</font>'+
			        '</td>'+
			        '<td>'+
			        '<font face="Arial" size="2" color="#000000">'+group_no+'</font>'+
			        '</td>'+
			        '</tr>'+
			        '<tr>'+
			        '<td width=65%>'+
			        '<font face="Arial" size="2" color="#000000">Blacklist</font>'+
			        '</td>'+
			        '<td>'+
			        '<font face="Arial" size="2" color="#000000">'+blacklist_no+'</font>'+
			        '</td>'+
			        '</tr>'+
			        '<tr>'+
			        '<td width=65%>'+
			        '<font face="Arial" size="2" color="#000000">Download bandwidth</font>'+
			        '</td>'+
			        '<td>'+
			        '<font face="Arial" size="2" color="#000000">'+download_bw+'</font>'+
			        '</td>'+
			        '</tr>'+
			        '</table>';
			       
			    
			
			/*
			field_object=document.getElementById("movie_id");
			field_object.innerHTML='<p style="margin-left: 22; margin-right: 10;margin-top: 25;margin-bottom: 25"><font face="Arial" size="4" color="#000000">Movies</font></p>'+
				'<p style="margin-left: 22; margin-right: 10;margin-bottom: 0"><font face="Arial" size="2" color="#000000">Current movies</font><br>'+
				'<p style="margin-left: 22; margin-right: 10;margin-top: 5"><font face="Arial" size="6" color="#000000">'+g_total_movie_no+'</font></p>';
				*/
			
		}else
		{
  			bSystem_Inquery_Panel=0;
  			clearInterval(g_System_timer);			
		    	g_token=find_cookie_value("token");
		  	g_user_id=find_cookie_value("userid");
		  	g_password=find_cookie_value("password");
		 	 cgi_url = "/token/destroytoken?token="+escape(g_token)+"&flag="+Math.random();
			 xmlHttp.open("GET", cgi_url, true);
			 xmlHttp.onreadystatechange = login_out_return;
			 xmlHttp.send(null);
		}
		if ((free_version_flag==1)&&(g_show_free_version==0))
		{
			g_show_free_version=1;
			alert("Free Trial is for 5 channels, 2 users and some Addons only.")
		}
		g_active_channel_no=active_channel_no;
		//alert(g_active_channel_no);
			

	}

}
function callServer_System_Inquery_Timer()
{
	var time_delay=5000;

	if (bSystem_Inquery_Panel==0)
	{
		clearInterval(g_System_timer);
		g_System_timer=0;
		// alert("Clear Status Timer");
	}else
	{
		bQuery_Channel_Status=0;
		bQuery_Online_Player=0;
		bGet_Channel_Statistics=0;
	    	cgi_url= "/server/system_info_inquery?token="+escape(g_token)+"&flag="+Math.random();
	
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange =system_info_inquery ;
		xmlHttp.send(null);
	}	
	//setTimeout("show_uptime()",time_delay);
}

function callServer_System_Inquery()
{
	bSystem_Inquery_Panel=1;
	callServer_System_Inquery_Timer();
	
}
function show_hide_credit_option(user_no)
{
	
	var item_id;
	var item;
	var creditflag_id="checkedflag"+user_no;
	var creditflag;


//	alert(creditflag_id);
	creditflag=document.getElementById(creditflag_id);
//	alert(creditflag);
	if (creditflag.checked==true)
	{	
		item_id="credit"+user_no;
		//item=document.getElementById(item_id)
		//alert(item.value);
		document.getElementById(item_id).disabled=false;
		item_id="credit_unit"+user_no;
		document.getElementById(item_id).disabled=false;
	}else
	{
		item_id="credit"+user_no;
		//item=document.getElementById(item_id)
		//alert(item.value);
		document.getElementById(item_id).disabled=true;
		item_id="credit_unit"+user_no;
		document.getElementById(item_id).disabled=true;
	}
		
}
function get_reseller()
{
 
 if (xmlHttp.readyState == 4) {


    var response = xmlHttp.responseText.split("\r\n");
    var username;
    var checkedflag;
    var credit;
    var credit_unit;
    var creator;
    var resellertype;
 //   var szpassword;
    var user_title="<p>"+"Reseller List"+"</p>";
    var user_list;
    var i=0;
    var user_no=1;
	var total_user_no=0;
	var HTML_str='';
	var strlength=0;
	var pos=0;
   var content = parent.document.getElementById("content");
 
  	var menustr;

	content.innerHTML="";
	//detail.innerHTML="";
	
	content.innerHTML="";
	 HTML_str= '<table border="0 align="center">'+
	  '<tr>'+
	      '<td width="10%" align="center"><font face="Arial" size="2">No.</font></td>';
	      	HTML_str+='<td width="10%" align="center"><font face="Arial" size="2">Name</font></td>';
	      	HTML_str+='<td width="10%" align="center"></td>';
	      	HTML_str+='<td width="10%" align="center"><font face="Arial" size="2">Credit Option</font></td>';
	      	HTML_str+='<td width="10%" align="center"><font face="Arial" size="2">Credit</font></td>';
	      	HTML_str+='<td width="10%" align="center"><font face="Arial" size="2">Credit Unit</font></td>';
	      	HTML_str+='<td width="10%" align="center"><font face="Arial" size="2">Creator</font></td>';
	      	HTML_str+='<td width="10%" align="center"><font face="Arial" size="2">Type</font></td>';
	      HTML_str+='</tr>'+'<tr><td  colspan="8"><hr size="1" color="#66FFFF"></td></tr>';
	      	
	
	while (1)
	{
 	 	if (response[i]==0) break;
//		alert(response[i]);
	 	strlength=response[i].length;
   	    	username=response[i].slice(9,strlength);
 		i=i+1;
	 	strlength=response[i].length;
   	    	checkedflag=response[i].slice(8,strlength);
 		i=i+1;
	 	strlength=response[i].length;
   	    	credit=response[i].slice(7,strlength);
 		i=i+1;
	 	strlength=response[i].length;
   	    	credit_unit=response[i].slice(12,strlength);
 		i=i+1;
	 	strlength=response[i].length;
   	    	creator=response[i].slice(8,strlength);
 		i=i+1;
	 	strlength=response[i].length;
   	    	resellertype=response[i].slice(5,strlength);
 		i=i+1;
		HTML_str=HTML_str+
		   '<tr>';


 		HTML_str=HTML_str+'<td width="10%" align="center"><font face="Arial"> <font size="2">'+user_no+'</font></td>'+
	      '<td width="10%" align="center" id="username'+user_no+'">'+
 		' <font face="Arial" font size="2">'+
 		username+'</font></td>'+
 		'<td  style="cursor: pointer;" width="20">'+
		'<div class="dropdown">'+
			'<button class="dropbtn">'+
			'<div class="bar1"></div>'+
			'<div class="bar2"></div>'+
			'<div class="bar3"></div>'+
			'</button>'+
			'<div class="dropdown-content">'+
				"<a href='javascript:void(0)'"+
				' onclick=call_Update_Reseller("'+user_no+'")>'+'<table><tr><td width=10%><img src="save.png"></td><td><font face="Arial" size="3"><b>Save</b></font></td></tr></table></a>'+
				'</div>'+
		'</div>'+
 		'</td>';
  		if (checkedflag==0)
 		{
 //			HTML_str+='<td width="10%" align="center">'+' <form><input type="checkbox" name="checkedflag'+user_no+'"'+
 			HTML_str+='<td width="10%" align="center">'+' <form><input type="checkbox" id="checkedflag'+user_no+'"'+
 			' onclick="javascript:show_hide_credit_option('+user_no+')"'+'></td>';

	 	      HTML_str+='<td width="10%" align="center">'+
	 		' <font face="Arial" font size="2">'+
	 		' <input type="text" disabled name="credit"'+
	 		' id=credit'+user_no+' size="3" value="'+
	 		credit+'"/></font></td>'+	
		      '<td width="10%" align="center">'+
	 		' <font face="Arial" font size="2">'+
	 		' <input type="text" disabled name="credit_unit"'+
	 		' id=credit_unit'+user_no+' size="3" value="'+
	 		credit_unit+'"/></font></td>';
		}else if (checkedflag==1)
 		{
 		
//			HTML_str+='<td width="10%" align="center">'+' <form><input type="checkbox" checked name="checkedflag'+user_no+'"'+
			HTML_str+='<td width="10%" align="center">'+' <form><input type="checkbox" checked id="checkedflag'+user_no+'"'+
 			' onclick="javascript:show_hide_credit_option('+user_no+')"'+'></td>';

	 	      HTML_str+='<td width="10%" align="center">'+
	 		' <font face="Arial" font size="2">'+
	 		' <input type="text" name="credit"'+
	 		' id=credit'+user_no+' size="3" value="'+
	 		credit+'"/></font></td>'+	
		      '<td width="10%" align="center">'+
	 		' <font face="Arial" font size="2">'+
	 		' <input type="text" name="credit_unit"'+
	 		' id=credit_unit'+user_no+' size="3" value="'+
	 		credit_unit+'"/></font></td>';
 		}
 		// alert(HTML_str);
	      HTML_str+='<td width="10%" align="center">'+
 		' <font face="Arial" font size="2">'+
 		creator+'</font></td>';
 		if (resellertype==2)
 		{
	 	     	HTML_str+='<td width="10%" align="center">'+
	 		' <font face="Arial" font size="2">'+
	 		"Super Reseller"+'</font></td>';
 	     	}else if (resellertype==3)
 	     	{
	 	     	HTML_str+='<td width="10%" align="center">'+
	 		' <font face="Arial" font size="2">'+
	 		"Reseller"+'</font></td>';
 	     	}
 	     	
	      HTML_str+='</tr>';
		total_user_no++;
		user_no++;
		//alert(HTML_str);
    }
        HTML_str=HTML_str+'</table>';
       //  alert(user_list_info.innerHTML);
   	/*
   	menustr='<table width=99%><tr><td width=20%>'+'<font face="Arial"> <font size="2">Total: '+ total_user_no+'</td>'+
 	      "<td width=80% align=right> <a href='javascript:void(0)' onclick=call_get_reseller()>"+
 	      ' <font face="Arial" size="2">Refresh</font></a>'+
	      "<td width=80% align=right> <a href='javascript:void(0)' onclick=call_Add_New_Reseller()>"+
	      ' <font face="Arial" size="2">Add</font></a>'+

	      '</td></tr></table>';
	 content.innerHTML=menustr+HTML_str+menustr;
	 */
  	menustr='<table width=100%><tr><td width=100% align=right>'+'<p style="margin-right: 5"><font face="Arial"> <font size="2">Total: '+ total_user_no+'</td>'+
	      '</td></tr></table>';
	 content.innerHTML=menustr+HTML_str;
	g_reseller_no=total_user_no;
 }

 
}
function call_get_reseller() {
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	
   var content = parent.document.getElementById("content");
	

	content.innerHTML="";

  	
  	g_token=find_cookie_value("token");
  	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;

 cgi_url = "/server/query_reseller_index?token="+escape(g_token)+"&flag="+Math.random();
 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">User Information Loading...<p>';

 xmlHttp.open("GET", cgi_url, true);
 xmlHttp.onreadystatechange = get_reseller;
 xmlHttp.send(null);

}

function Cancel_Add_Reseller()
{
	call_get_reseller();

}

function Add_Reseller_Info() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    //	alert("Add Reseller Sucessfully");
    } else if (response==0)
    {
   	alert("Failed to Add Reseller");
    } else if (response==2)
    {
    	alert("Disk is error(FULL), Please contact administrator");
    }else if (response==3)
    {
    	alert("The reseller is already in Database");
    }

	g_item.value=g_temp;
	g_item.style.backgroundColor = "#ffffff";
	//alert(add_id_button.innerHTML);
	call_get_reseller();
    }
}

function call_Add_Reseller(user_no)
{

 var username_id="username"+user_no; 
 var username;
 


var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var pos;
	var expired_time_temp;
 	var pos;
	var expired_time_temp;
	var alert_message;


	g_item=document.getElementById(username_id);
	username=g_item.value;
	if (username.length==0)
	{
		alert("Reseller name is empty");
		return;
	}

   	g_token=find_cookie_value("token");

 confirm_msg="Add Reseller: "+username+" Information?";
 cgi_url = "/server/add_reseller?token="+escape(g_token)+"&username="+escape(username)+"&flag="+Math.random();
 //  alert(cgi_url);
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Add_Reseller_Info;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	 g_item.value=g_item.value+" (Adding...)";
	g_item.style.backgroundColor = "#ff0000";
 }


}

function call_Add_New_Reseller()
{

var HTML_str;
var user_no;
var len;
var paymodel;
var str;
  var content = parent.document.getElementById("content");
	

	g_reseller_no++;

	HTML_str=content.innerHTML;
	//alert(HTML_str);
	//len=HTML_str.length-16;
	len=HTML_str.lastIndexOf("<TABLE");
	
	if (len==-1)
	{
		len=HTML_str.lastIndexOf("<table");
	}
		
		//HTML_str=HTML_str.slice(800,len);
		//alert(HTML_str);
//	alert(len);
	//len+=6;
	HTML_str=HTML_str.slice(0,len);

	user_no=g_reseller_no;
//	alert(HTML_str);
	HTML_str=HTML_str+'<tr><td><table><tr>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">'+user_no+'</font></td>';
			HTML_str+='<td width="20%" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="username"'+
	 		' id=username'+user_no+' size="36"/></font></td>';
 			
	
	 		
		      HTML_str+='<td id=add_id_button align="left">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_Reseller("'+user_no+'")>'+
	      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a>'+
	      	      
		      //'<td align="left">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=Cancel_Add_Reseller()>'+
	      	      ' <img border="0" id="delbutton" alt="Cancel" title="Cancel" src="de.png"></a></td>'+

		    '</tr></table></td></tr>';
	//alert(HTML_str);

	       content.innerHTML=HTML_str+'</table>';
  //      alert(user_list_info.innerHTML);
   
		
}
function Del_Reseller_Info() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    	alert("Delete Reseller Sucessfully");
    } else if (response==2)
    {
     	alert("Disk is error(FULL), Please contact administrator");  	
    } else if (response==0)
    {
   	alert("Failed to Delete Reseller");
    }
    	call_get_reseller();
    }
}

function Update_Reseller_Info() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    //	alert("Update Reseller Sucessfully");
    } else if (response==0)
    {
   	alert("Failed to Update Reseller");
    } else if (response==2)
    {
    	alert("Disk is error(FULL), Please contact administrator");
    }

	g_item.value=g_temp;
	g_item.style.backgroundColor = "#ffffff";
    }
}

function call_Update_Reseller(user_no)
{

 var username_id="username"+user_no; 
var checkedflag_id="checkedflag"+user_no;

var credit_id="credit"+user_no;
var credit_unit_id="credit_unit"+user_no; 

 var username;
var checkedflag;
var credit;
var credit_unit;


var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var pos;
	var expired_time_temp;
 	var pos;
	var expired_time_temp;
	var alert_message;


	g_item=document.getElementById(username_id);
	username=g_item.innerText;
	if (username.length==0)
	{
		alert("Reseller name is empty");
		return;
	}
	g_item=document.getElementById(checkedflag_id);
	if (g_item.checked==true)
	{
		checkedflag=1;
	}else if (g_item.checked==false)
	{
		checkedflag=0;
	}
	
	g_item=document.getElementById(credit_id);
	credit=g_item.value;
	g_item=document.getElementById(credit_unit_id);
	credit_unit=g_item.value;

   	g_token=find_cookie_value("token");

 cgi_url = "/server/update_reseller?token="+escape(g_token)+"&username="+escape(username)+
	 "&checked="+escape(checkedflag)+
	 "&credit="+escape(credit)+
	 "&credit_unit="+escape(credit_unit)+
	 "&flag="+Math.random();
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Update_Reseller_Info;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	 g_item.value=g_item.value+" (Update...)";
	g_item.style.backgroundColor = "#ff0000";


}
//nction call_Del_User(user_no,username,szpassword,expired_time,paymodel,user_point)
function call_Del_Reseller(user_no)
{
 var username_id="username"+user_no; 
 var username;

var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
 
	g_item=document.getElementById(username_id);
	username=g_item.value;
	
   	g_token=find_cookie_value("token");

 confirm_msg="Delete Reseller: "+username+" Information?";
// cgi_url = "/server/del_user?token="+escape(g_token)+"&user_no="+escape(user_no)+"&username="+escape(username)+"&flag="+Math.random();
 cgi_url = "/server/del_reseller?token="+escape(g_token)+"&username="+escape(username)+"&flag="+Math.random();
  // alert(cgi_url);
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Del_Reseller_Info;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	 g_item.value=g_item.value+" (del...)";
	g_item.style.backgroundColor = "#ff0000";
 }
 

}
function Disable_Player_Filter_Respponse() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    
    	call_player_filter();
    }
 
}
function Checked_Rejected_Player_Filter_Respponse() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    	call_player_filter();
    }
 
}
function Checked_Accepted_Player_Filter_Respponse() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    	call_player_filter();
    }
 
}

function checked_disable_player_filter()
{
	 confirm_msg="Disable User Agent ?";
	 if (confirm(confirm_msg))
	 {
		 cgi_url = "/server/disable_player_filter?token="+escape(g_token)+"&flag="+Math.random();	
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = Disable_Player_Filter_Respponse;
		 xmlHttp.send(null);
	 }else
	{
		call_player_filter();
	}
	 	
 }
function checked_rejected_player_filter()
{
	 confirm_msg="Change Mode to Rejected Mode?";
	 if (confirm(confirm_msg))
	 {
		 cgi_url = "/server/checked_rejected_player_filter?token="+escape(g_token)+"&flag="+Math.random();	
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = Checked_Rejected_Player_Filter_Respponse;
		 xmlHttp.send(null);
	} else
 	{
 		call_player_filter();
 	}
}
function checked_accepted_player_filter()
{
	 confirm_msg="Change Mode to Accepted Mode?";
	 if (confirm(confirm_msg))
	 {
		 cgi_url = "/server/checked_accepted_player_filter?token="+escape(g_token)+"&flag="+Math.random();	
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = Checked_Accepted_Player_Filter_Respponse;
		 xmlHttp.send(null);
	} else
 	{
 		call_player_filter();
 	}
}

function get_player_filter()
{
 
 if (xmlHttp.readyState == 4) {


    var response = xmlHttp.responseText.split("\r\n");
    var playername;
    var szpassword;
    var user_title="<p>"+"Reseller List"+"</p>";
    var user_list;
    var i=0;
    var user_no=1;
	var total_user_no=0;
	var HTML_str='';
	var strlength=0;
	var pos=0;
   var content = parent.document.getElementById("content");
 
  	var menustr;
  	var playerfiltertype;

	content.innerHTML="";
	//detail.innerHTML="";
	
	content.innerHTML="";
	 HTML_str= '<table border="0"  cellpadding="3" align="center">';
	
	while (1)
	{
 	 	if (response[i]==0) break;
//		alert(response[i]);
		if (i==0)
		{
		 	strlength=response[i].length;
	   	    	playerfiltertype=response[i].slice(17,strlength);
	   	    	//alert(playerfiltertype);
	   	    	if (playerfiltertype==0)
	   	    	{
	   	    		
				 HTML_str+= '<tr><td colspan="3"><font face="Arial" size="2"><input type="radio" value="V1" checked name="R1" onclick="javascript:checked_disable_player_filter()"><b>Disabled Mode</b><input type="radio" name="R1" value="V3" onclick="javascript:checked_rejected_player_filter()"><b>Rejected Mode</b><input type="radio" name="R1" value="V4" onclick="javascript:checked_accepted_player_filter()"><b>Accepted Mode</b></font></td></tr>';
			        HTML_str+='</tr>'+'<tr><td  colspan="3"><hr size="1" color="#66FFFF"></td></tr>';
	   	    	}else if (playerfiltertype==1)
	   	    	{
				 HTML_str+= '<tr><td colspan="3"><font face="Arial" size="2"><input type="radio" value="V1" name="R1" onclick="javascript:checked_disable_player_filter()"><b>Disabled Mode</b><input type="radio" name="R1" value="V3" onclick="javascript:checked_rejected_player_filter()"><b>Rejected Mode</b><input type="radio" name="R1" value="V4" checked onclick="javascript:checked_accepted_player_filter()"><b>Accepted Mode</b></font></td></tr>';
			        HTML_str+='</tr>'+'<tr><td  colspan="3"><hr size="1" color="#66FFFF"></td></tr>';
			      HTML_str+='<tr>'+'<td width="10%" align="center"><font face="Arial" size="2">No.</font></td>';
			      HTML_str+='<td width="20%" align="center"><font face="Arial" size="2">Accepted Player Name</font></td></tr>';
	   	    	}else if (playerfiltertype==2)
	   	    	{
				 HTML_str+= '<tr><td colspan="3"><font face="Arial" size="2"><input type="radio" value="V1" name="R1" onclick="javascript:checked_disable_player_filter()"><b>Disabled Mode</b><input type="radio" name="R1" value="V3" checked onclick="javascript:checked_rejected_player_filter()"><b>Rejected Mode</b><input type="radio" name="R1" value="V4" onclick="javascript:checked_accepted_player_filter()"><b>Accepted Mode</b></font></td></tr>';
			        HTML_str+='</tr>'+'<tr><td  colspan="3"><hr size="1" color="#66FFFF"></td></tr>';
			      HTML_str+='<tr>'+'<td width="10%" align="center"><font face="Arial" size="2">No.</font></td>';
			      HTML_str+='<td width="20%" align="center"><font face="Arial" size="2">Rejected Player Name</font></td></tr>';
	   	    	}  
	   	    	i=i+1;	
		        HTML_str+='</tr>'+'<tr><td  colspan="3"><hr size="1" color="#66FFFF"></td></tr>';
	  		
		}else
		{
		 	strlength=response[i].length;
	   	    	playername=response[i].slice(11,strlength);
	 		i=i+1;
			HTML_str=HTML_str+
			   '<tr>';
		
	 		HTML_str=HTML_str+'<td width="10%" align="center"><font face="Arial"> <font size="2">'+user_no+'</font></td>'+
		      '<td width="20%" align="center">'+
	 		' <font face="Arial" font size="2">'+
	 		' <input type="text" name="playername"'+
	 		' id=playername'+user_no+' size="36" value="'+
	 		unescape(playername)+'"/></font></td>'+	
			      '<td align="left">'+
			      "<a href='javascript:void(0)'"+
			      ' onclick=call_Del_Player_Filter("'+user_no+'")>'+
		      	      ' <img border="0" id="delbutton" alt="Del" title="Delete" src="del.png"></a></td>'+
			    '</tr>';
			total_user_no++;
			user_no++;
			//alert(HTML_str);
		}
    	}
        HTML_str=HTML_str+'</table>';
       //  alert(user_list_info.innerHTML);
       if (playerfiltertype==0)
       {
 		menustr='<table width=100%><tr><td width=20%>'+'<font face="Arial"> <font size="2">Total: '+ total_user_no+'</td></tr></table>';
      	}else
	{
		menustr='<table width=100%><tr>';
	    
	      	menustr+='<td width="4%">'+
		'<p style="margin-left: 5; margin-top: 10"><Input type="button" value="Add" onclick="javascript:open_modal();" />';
		menustr+='<div id="PanelModal" class="modal">'+
				'<div class="modal-content">'+
				'<span onclick="javascript:close_modal();" class="close">&times;</span>';
    				menustr+='<table align="center">';
    				
				menustr+='<tr><td><font face="Arial" font size="2">User Agent: </font></td><td width="20">'+
				 	' <font face="Arial" size="2">'+
				 	' <input type="text" name="playername"'+
				 	' id=playername'+
				 	' size="36"/'+
				 	'</font></td></tr>';
				
				menustr+='<tr><td><input type="button" value="Add" onclick=call_Add_Player_Filter() name="Save" /></td></tr></table>'+
				'</div>'+
			'</div></td>';
		menustr+='<td  valign="top"><p style="margin-top: 10"><Input type="button" value="Refresh" onclick="javascript:call_player_filter();" />'+
	      '</td>'+
		'<td align=right width=10%>'+'<p style="margin-right: 5"><font face="Arial"> <font size="2">Total: '+ total_user_no+'</td>'+
		'</tr></table>';
      }
	 content.innerHTML=menustr+HTML_str;
	g_player_filter_no=total_user_no;
 }

 
}
function call_player_filter() {
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	
   var content = parent.document.getElementById("content");
	

	content.innerHTML="";

  	
  	g_token=find_cookie_value("token");
  	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;

 cgi_url = "/server/query_player_filter?token="+escape(g_token)+"&flag="+Math.random();
 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">User Agent Loading...<p>';

 xmlHttp.open("GET", cgi_url, true);
 xmlHttp.onreadystatechange = get_player_filter;
 xmlHttp.send(null);

}
function Cancel_Add_Player_Filter()
{
	call_player_filter();

}

function Add_Player_Filter() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
     } else if (response==0)
    {
   	alert("Failed to Add User Agent");
    } else if (response==2)
    {
    	alert("Disk is error(FULL), Please contact administrator");
    }else if (response==3)
    {
    	alert("The User Agent is already in Database");
    }

	call_player_filter();
    }
}

function call_Add_Player_Filter(user_no)
{

 var playername_id="playername"; 
 var playername;
 
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var pos;
	var expired_time_temp;
 	var pos;
	var expired_time_temp;
	var alert_message;


	g_item=document.getElementById(playername_id);
	playername=g_item.value;
	if (playername.length==0)
	{
		alert("User Agent is empty");
		return;
	}

   	g_token=find_cookie_value("token");

 cgi_url = "/server/add_player_filter_item?token="+escape(g_token)+"&playername="+escape(playername)+"&flag="+Math.random();
 //  alert(cgi_url);
 	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Add_Player_Filter;
	 xmlHttp.send(null);


}

function call_Add_New_Player_Filter()
{

var HTML_str;
var user_no;
var len;
var paymodel;
var str;
  var content = parent.document.getElementById("content");
	

	g_player_filter_no++;

	HTML_str=content.innerHTML;
	//alert(HTML_str);
	//len=HTML_str.length-16;
	len=HTML_str.lastIndexOf("<TABLE");
	
	if (len==-1)
	{
		len=HTML_str.lastIndexOf("<table");
	}
		
		//HTML_str=HTML_str.slice(800,len);
		//alert(HTML_str);
//	alert(len);
	//len+=6;
	HTML_str=HTML_str.slice(0,len);

	user_no=g_player_filter_no;
//	alert(HTML_str);
	HTML_str=HTML_str+'<tr><td><table><tr>'+
		      '<td width="10%" align="center"><font face="Arial" size="2">'+user_no+'</font></td>';
			HTML_str+='<td width="20%" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="playername"'+
	 		' id=playername'+user_no+' size="36"/></font></td>';
 			
	
	 		
		      HTML_str+='<td id=add_id_button align="left">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_Player_Filter("'+user_no+'")>'+
	      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a>'+
	      	      
		    //  '<td width="80" align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=Cancel_Add_Player_Filter()>'+
	      	      ' <img border="0" id="delbutton" alt="Cancel" title="Cancel" src="del_icon.PNG"></a></td>'+

		    '</tr></table></td></tr>';
	//alert(HTML_str);

	       content.innerHTML=HTML_str+'</table>';
  //      alert(user_list_info.innerHTML);
   
		
}
function Del_Player_Filter() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    	alert("Delete User Agent Sucessfully");
    } else if (response==2)
    {
     	alert("Disk is error(FULL), Please contact administrator");  	
    } else if (response==0)
    {
   	alert("Failed to Delete User Agent");
    }
    	call_player_filter();
    }
}

//nction call_Del_User(user_no,username,szpassword,expired_time,paymodel,user_point)
function call_Del_Player_Filter(user_no)
{
 var playername_id="playername"+user_no; 
 var playername;

var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
 
	g_item=document.getElementById(playername_id);
	playername=g_item.value;
	
   	g_token=find_cookie_value("token");

 confirm_msg="Delete User Agent: "+playername+"?";
 cgi_url = "/server/del_player_filter_item?token="+escape(g_token)+"&playername="+escape(playername)+"&flag="+Math.random();
  // alert(cgi_url);
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Del_Player_Filter;
	 xmlHttp.send(null);
 }
 

}
function Disable_Mac_Blocker_Respponse() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    
    	call_mac_blocker();
    }
 
}

function Checked_Accepted_Mac_Blocker_Respponse() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    	call_mac_blocker();
    }
 
}

function checked_disable_mac_blocker()
{
	 confirm_msg="Disable MAC ID Blocker ?";
	 if (confirm(confirm_msg))
	 {
		 cgi_url = "/server/disable_mac_blocker?token="+escape(g_token)+"&flag="+Math.random();	
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = Disable_Mac_Blocker_Respponse;
		 xmlHttp.send(null);
	 }else
	{
		call_mac_blocker();
	}
	 	
}

function checked_accepted_mac_blocker()
{
	 confirm_msg="Change Mode to Accepted Mode?";
	 if (confirm(confirm_msg))
	 {
		 cgi_url = "/server/checked_accepted_mac_blocker?token="+escape(g_token)+"&flag="+Math.random();	
		 xmlHttp.open("GET", cgi_url, true);
		 xmlHttp.onreadystatechange = Checked_Accepted_Mac_Blocker_Respponse;
		 xmlHttp.send(null);
	} else
 	{
 		call_mac_blocker();
 	}
}

function get_mac_blocker()
{
 
 if (xmlHttp.readyState == 4) {


    var response = xmlHttp.responseText.split("\r\n");
    var macid;
    var szpassword;
    var user_title="<p>"+"MAC ID List"+"</p>";
    var user_list;
    var i=0;
    var user_no=1;
	var total_user_no=0;
	var HTML_str='';
	var strlength=0;
	var pos=0;
   var content = parent.document.getElementById("content");
 
  	var menustr;
  	var macblockertype;

	content.innerHTML="";
	//detail.innerHTML="";
	
	content.innerHTML="";
	 HTML_str= '<table border="0" width=100% cellpadding="3" align="center">';
	
	while (1)
	{
 	 	if (response[i]==0) break;
//		alert(response[i]);
		if (i==0)
		{
		 	strlength=response[i].length;
	   	    	macblockertype=response[i].slice(15,strlength);
	   	    	//alert(playerfiltertype);
	   	    	if (macblockertype==0)
	   	    	{
	   	    		
				 HTML_str+= '<tr><td colspan="3"><font face="Arial" size="2"><input type="radio" value="V1" checked name="R1" onclick="javascript:checked_disable_mac_blocker()"><b>Disabled Mode</b><input type="radio" name="R1" value="V4" onclick="javascript:checked_accepted_mac_blocker()"><b>Accepted Mode</b></font></td></tr>';
			        HTML_str+='</tr>'+'<tr><td  colspan="3"><hr size="1" color="#66FFFF"></td></tr>';
	   	    	}else if (macblockertype==1)
	   	    	{
				 HTML_str+= '<tr><td colspan="3"><font face="Arial" size="2"><input type="radio" value="V1" name="R1" onclick="javascript:checked_disable_mac_blocker()"><b>Disabled Mode</b><input type="radio" name="R1" value="V4" checked onclick="javascript:checked_accepted_mac_blocker()"><b>Accepted Mode</b></font></td></tr>';
			        HTML_str+='</tr>'+'<tr><td colspan="3"><hr size="1" color="#66FFFF"></td></tr>';
			      HTML_str+='<tr>'+'<td width="10%" align="center"><font face="Arial" size="2">No.</font></td>';
			      HTML_str+='<td width="50%" align="center"><font face="Arial" size="2">Accepted MAC ID (Format 12 bytes: aa:bb:cc:dd:ee:ff--->aabbccddeeff)</font></td></tr>';
	   	    	}  
	   	    	i=i+1;	
		        HTML_str+='</tr>'+'<tr><td  colspan="3"><hr size="1" color="#66FFFF"></td></tr>';
	  		
		}else
		{
		 	strlength=response[i].length;
	   	    	macid=response[i].slice(6,strlength);
	 		i=i+1;
			HTML_str=HTML_str+
			   '<tr>';
		
	 		HTML_str=HTML_str+'<td width="10%" align="center"><font face="Arial"> <font size="2">'+user_no+'</font></td>'+
		      '<td width="50%" align="center">'+
	 		' <font face="Arial" font size="2">'+
	 		' <input type="text" name="macid"'+
	 		' id=macid'+user_no+' size="36" value="'+
	 		macid+'"/></font></td>'+	
			      '<td align="left">'+
			      "<a href='javascript:void(0)'"+
			      ' onclick=call_Del_Mac_Blocker("'+user_no+'")>'+
		      	      ' <img border="0" id="delbutton" alt="Del" title="Delete" src="del_icon.PNG"></a></td>'+
			    '</tr>';
			total_user_no++;
			user_no++;
			//alert(HTML_str);
		}
    	}
        HTML_str=HTML_str+'</table>';
       //  alert(user_list_info.innerHTML);
       if (macblockertype==0)
       {
 		menustr='<table width=99%><tr><td width=20%>'+'<font face="Arial"> <font size="2">Total: '+ total_user_no+'</td></tr></table>';
      	}else
	{
		menustr='<table width=99%><tr><td width=20%>'+'<font face="Arial"> <font size="2">Total: '+ total_user_no+'</td>'+
	      /*
	      "<td width=80% align=right> <a href='javascript:void(0)' onclick=call_mac_blocker()>"+
	      ' <font face="Arial" size="2">Refresh</font></a>'+
	      "<td width=80% align=right> <a href='javascript:void(0)' onclick=call_Add_New_Mac_Blocker()>"+
	      ' <font face="Arial" size="2">Add</font></a>'+
	*/
	     "<td width=80% align=right>"+
	      '<Input type="button" value="Refresh" onclick="javascript:call_mac_blocker();" />'+
 	      '<Input type="button" value="Add" onclick="javascript:call_Add_New_Mac_Blocker();" />'+	     
	      '</td></tr></table>';
      }
	 content.innerHTML=menustr+HTML_str+menustr;
	g_mac_blocker_no=total_user_no;
 }

 
}
function call_mac_blocker() {
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	
   var content = parent.document.getElementById("content");
	

	content.innerHTML="";

  	
  	g_token=find_cookie_value("token");
  	bSystem_Inquery_Panel=0;
	bQuery_Channel_Status=0;
	bQuery_Online_Player=0;
	bGet_Channel_Statistics=0;

 cgi_url = "/server/query_mac_blocker?token="+escape(g_token)+"&flag="+Math.random();
 content.innerHTML='<p align="center"><font face="Arial" color="#FF0000" size="4">MAC Address Loading...<p>';

 xmlHttp.open("GET", cgi_url, true);
 xmlHttp.onreadystatechange = get_mac_blocker;
 xmlHttp.send(null);

}
function Cancel_Add_Mac_Blocker()
{
	call_mac_blocker();

}

function Add_Mac_Blocker() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    //	alert("Add MAC ID Sucessfully");
    } else if (response==0)
    {
   	alert("Failed to Add MAC ID");
    } else if (response==2)
    {
    	alert("Disk is error(FULL), Please contact administrator");
    }else if (response==3)
    {
    	alert("The MAC ID is already in Database");
    }

	g_item.value=g_temp;
	g_item.style.backgroundColor = "#ffffff";
	//alert(add_id_button.innerHTML);
	call_mac_blocker();
    }
}

function call_Add_Mac_Blocker(user_no)
{

 var macid_id="macid"+user_no; 
 var macid;
 


var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
	var pos;
	var expired_time_temp;
 	var pos;
	var expired_time_temp;
	var alert_message;


	g_item=document.getElementById(macid_id);
	macid=g_item.value;
	if (macid.length==0)
	{
		alert("MAC ID is empty");
		return;
	}else if (macid.length!=12)
	{
		alert("MAC ID Lenght must be 12 bytes");
		return;		
	}
	

   	g_token=find_cookie_value("token");

 confirm_msg="Add MAC ID: "+macid+" ?";
 cgi_url = "/server/add_mac_blocker_item?token="+escape(g_token)+"&macid="+escape(macid)+"&flag="+Math.random();
 //  alert(cgi_url);
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Add_Mac_Blocker;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	 g_item.value=g_item.value+" (Adding...)";
	g_item.style.backgroundColor = "#ff0000";
 }


}

function call_Add_New_Mac_Blocker()
{

var HTML_str;
var user_no;
var len;
var paymodel;
var str;
  var content = parent.document.getElementById("content");
	

	g_mac_blocker_no++;

	HTML_str=content.innerHTML;
	//alert(HTML_str);
	//len=HTML_str.length-16;
	len=HTML_str.lastIndexOf("<TABLE");
	
	if (len==-1)
	{
		len=HTML_str.lastIndexOf("<table");
	}
		
		//HTML_str=HTML_str.slice(800,len);
		//alert(HTML_str);
//	alert(len);
	//len+=6;
	HTML_str=HTML_str.slice(0,len);

	user_no=g_mac_blocker_no;
//	alert(HTML_str);
	HTML_str=HTML_str+'<tr><td><table><tr>'+
		      '<td width="18%" align="center"><font face="Arial" size="2">'+user_no+'</font></td>';
			HTML_str+='<td width="42%" align="center">'+
	 		' <font face="Arial" size="2">'+
	 		' <input type="text" name="macid"'+
	 		' id=macid'+user_no+' size="36"/></font></td>';
 			
	
	 		
		      HTML_str+='<td id=add_id_button width="80" align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=call_Add_Mac_Blocker("'+user_no+'")>'+
	      	      ' <img border="0" id="addbutton" alt="Add" title="Add" src="add_icon.PNG"></a>'+
	      	      
		      //'<td width="40" align="center">'+
		      "<a href='javascript:void(0)'"+
		      ' onclick=Cancel_Add_Mac_Blocker()>'+
	      	      ' <img border="0" id="delbutton" alt="Cancel" title="Cancel" src="del_icon.PNG"></a></td>'+

		    '</tr></table></td></tr>';
	//alert(HTML_str);

	       content.innerHTML=HTML_str+'</table>';
  //      alert(user_list_info.innerHTML);
   
		
}
function Del_Mac_Blocker() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    	alert("Delete MAC ID Sucessfully");
    } else if (response==2)
    {
     	alert("Disk is error(FULL), Please contact administrator");  	
    } else if (response==0)
    {
   	alert("Failed to Delete MAC ID");
    }
    	call_mac_blocker();
    }
}

//nction call_Del_User(user_no,username,szpassword,expired_time,paymodel,user_point)
function call_Del_Mac_Blocker(user_no)
{
 var macid_id="macid"+user_no; 
 var macid;

var confirm_msg;
 	var cgi_url;
	var cookieStr;
	var firstpos;
	var endpos;
 
 
	g_item=document.getElementById(macid_id);
	macid=g_item.value;
	
   	g_token=find_cookie_value("token");

 confirm_msg="Delete MAC ID: "+macid+" ?";
 cgi_url = "/server/del_mac_blocker_item?token="+escape(g_token)+"&macid="+escape(macid)+"&flag="+Math.random();
  // alert(cgi_url);
 if (confirm(confirm_msg))
 {
	
	 xmlHttp.open("GET", cgi_url, true);
	 xmlHttp.onreadystatechange = Del_Mac_Blocker;
	 xmlHttp.send(null);
	 g_temp=g_item.value;
	 g_item.value=g_item.value+" (del...)";
	g_item.style.backgroundColor = "#ff0000";
 }
 

}
/*
function Export_User_Profile() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response.length>0)  
    {
     	window.location =response; 
    }
  }
}
function call_export_user_profile()
{
	var cgi_url;
	
	
	g_token=find_cookie_value("token");
	cgi_url = "/server/export_user_profile?token="+escape(g_token)+"&flag="+Math.random();
	
	xmlHttp.open("GET", cgi_url, true);
	xmlHttp.onreadystatechange = Export_User_Profile;
	xmlHttp.send(null); 

}
function Export_Channel_Definition() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response.length>0)
    
    {
    	window.location =response; 
    }
}
}

function call_export_channel_definition()
{
	var cgi_url;
	
	bQuery_Channel_Status=0;
	g_token=find_cookie_value("token");
	cgi_url = "/server/export_channel_definition?token="+escape(g_token)+"&flag="+Math.random();
	
	xmlHttp.open("GET", cgi_url, true);
	xmlHttp.onreadystatechange = Export_Channel_Definition;
	xmlHttp.send(null); 

}
*/
function Import_Channel_Definition() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    	alert("Restart EZserver to get the newest channel list");
    } else if (response==0)
    {
   	alert("Failed to Import Channel");
    }
     }
}
function call_import_channel_definition()
{
	var cgi_url;
	var importchno_id="importchno";
	var importurl_id="importurl";
	var import_option_id="import_option";
	var importchno;
	var importurl;
	var import_option;
	var total_ch_no=0;
	
	g_item=document.getElementById(importchno_id);
	//alert(g_item.value);
	importchno=g_item.value;
	total_ch_no=importchno;
	g_item=document.getElementById(importurl_id);
	//alert(g_item.value);
	importurl=g_item.value;
	g_item=document.getElementById(import_option_id);
	//alert(g_item.value);
	import_option=g_item.value;
	
	if (importchno>=0)
	{
		bSystem_Inquery_Panel=0;
		bQuery_Channel_Status=0;
		bQuery_Online_Player=0;
		bGet_Channel_Statistics=0;
	
		g_token=find_cookie_value("token");
		//alert(total_ch_no);
		if (total_ch_no==0)
		{
			importchno=0;
		}
		
		cgi_url = "/server/import_channel?token="+escape(g_token)+"&ch_no="+escape(importchno)+"&ch_url="+escape(importurl)+"&import_option="+escape(import_option)+"&flag="+Math.random();
		//alert(cgi_url);
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Import_Channel_Definition;
		xmlHttp.send(null); 
	}else
		{
			alert("ch no. < 0");
		}
		

}
function call_import_channel()
{
	var str;
	var importurl;
	var importchno=g_total_ch_no;
	importurl='';
 
	str="<head><title>Import Channel</title><link rel='stylesheet' type='text/css' href='menu.css'/>"+'<script src="menu.js"></script></head><body><table align="center">';
	str+='<tr><td><font face="Arial"> <font size="2">Import M3U URL : </font></td><td width="350" height="23">'+
	' <input type="text" name="importurl"'+
	' id="importurl"'+
	' size="64" value="'+
	importurl+
	'"/></font></td></tr>';
	str+='<tr><td><font face="Arial"> <font size="2">After CH No. : </font></td><td width="350" height="23">'+
	' <input type="text" name="importchno"'+
	' id="importchno"'+
	' size="3" value="'+
	importchno+
	'"/></font></td></tr>';
	str+='<tr><td><font face="Arial"> <font size="2">Options : </font></td><td><select size="1" id="import_option">'+
		'<option selected="selected" value="0">'+"None"+'</option>'+
		'<option value="1">'+"Proxy Mode 1"+'</option>'+
		'<option value="2">'+"Proxy Mode 2"+'</option>'+
		'<option value="3">'+"Proxy Mode 3"+'</option>'+
		'<option value="4">'+"Cache on demand"+'</option>'+
		'</select></font></td></tr>';
 		
    str+='<tr><td><input type="button" value="Import" onclick=call_import_channel_definition() name="B2" /></td></tr></table></body>';  
   // alert(str);
 //alert(g_total_ch_no);
       	 UserDetailWindow= window.open("", "", "top=100, left=100, width=700, height=130"); 
	UserDetailWindow.document.write(str); 

}		

/*
function Export_Movie_Definition() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response.length>0)
    
    {
    	window.location =response; 
    }
}
}
function call_export_movie_definition()
{
	var cgi_url;
	
	
	g_token=find_cookie_value("token");
	cgi_url = "/server/export_movie_definition?token="+escape(g_token)+"&flag="+Math.random();
	
	xmlHttp.open("GET", cgi_url, true);
	xmlHttp.onreadystatechange = Export_Movie_Definition;
	xmlHttp.send(null); 

}
*/
function Import_Movie_Definition() {

  if (xmlHttp.readyState == 4) {
    var response = xmlHttp.responseText;
    if (response==1)
    {
    	alert("Re-Login Panel to get the newest movie list");
    } else if (response==0)
    {
   	alert("Failed to Import Movie");
    }
     }
}
function call_import_movie_definition()
{
	var cgi_url;
	var importmovieno_id="importmovieno";
	var importurl_id="importurl";
	var importmovieno;
	var importurl;

	g_item=document.getElementById(importmovieno_id);
	//alert(g_item.value);
	importmovieno=g_item.value;
	g_item=document.getElementById(importurl_id);
	//alert(g_item.value);
	importurl=g_item.value;
	if(importmovieno>=0)
	{
		if (g_total_movie_no==0)
		{
			importmovieno=0;
		}
		
		bSystem_Inquery_Panel=0;
		bQuery_Channel_Status=0;
		bQuery_Online_Player=0;
		bGet_Channel_Statistics=0;
	
		g_token=find_cookie_value("token");
		cgi_url = "/server/import_movie?token="+escape(g_token)+"&movie_no="+escape(importmovieno)+"&movie_url="+escape(importurl)+"&flag="+Math.random();
		
		xmlHttp.open("GET", cgi_url, true);
		xmlHttp.onreadystatechange = Import_Movie_Definition;
		xmlHttp.send(null); 
	}else
		{
			alert("movie no. <0");
		}
		

}
function call_import_movie()
{
	var str;
	var importurl;
	var importmovieno=g_total_movie_no;
	
	importurl='';
 
	str="<head><title>Import Movie</title><link rel='stylesheet' type='text/css' href='menu.css'/>"+'<script src="menu.js"></script></head><body><table align="center">';
	str+='<tr><td><font face="Arial"> <font size="2">Import M3U URL : </font></td><td width="350" height="23">'+
	' <input type="text" name="importurl"'+
	' id="importurl"'+
	' size="64" value="'+
	importurl+
	'"/></font></td></tr>';
	str+='<tr><td><font face="Arial"> <font size="2">After Movie No. : </font></td><td width="350" height="23">'+
	' <input type="text" name="importmovieno"'+
	' id="importmovieno"'+
	' size="3" value="'+
	importmovieno+
	'"/></font></td></tr>';
 		
    str+='<tr><td><input type="button" value="Import" onclick=call_import_movie_definition() name="B2" /></td></tr></table></body>';  
   // alert(str);
 
       	 UserDetailWindow= window.open("", "", "top=100, left=100, width=700, height=130"); 
	UserDetailWindow.document.write(str); 
}		