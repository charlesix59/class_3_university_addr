
var map = new BMap.Map("container");// 创建地图实例  
map.enableScrollWheelZoom();
var point = new BMap.Point(116.404, 39.915);// 创建点坐标  
map.centerAndZoom(point, 15);// 初始化地图，设置中心点坐标和地图级别  

var qdu2 = new BMap.Point(120.4322, 36.0803);
var lt = new BMap.Marker(qdu2);
map.addOverlay(lt);
lt.addEventListener("click", function(){  
    alert("青岛大学\n李彤\n师范学院");
    });

var qdu1 = new BMap.Point(120.4332, 36.0767);
var mxc = new BMap.Marker(qdu1);
map.addOverlay(mxc);
mxc.addEventListener("click", function(){  
    alert("青岛大学\n闵祥超\n数据科学与软件工程学院");
    });



var Tsinghua = new BMap.Point(116.3306, 40.0071);
var markerBJ1 = new BMap.Marker(Tsinghua);
map.addOverlay(markerBJ1);
markerBJ1.addEventListener("click", function(){    
    alert("清华大学\n高瑞\n化学学院");
    }); 

var qdu3 = new BMap.Point(120.4286, 36.0768);
var ywy = new BMap.Marker(qdu3);
map.addOverlay(ywy);
ywy.addEventListener("click", function(){  
    alert("青岛大学\n袁文英\n计算机学院");
    });

var sdut = new BMap.Point(120.1352, 36.0091);
var lrc = new BMap.Marker(sdut);
map.addOverlay(lrc);
lrc.addEventListener("click", function(){  
    alert("山东科技大学\n刘润承\n");
    });

var cup1 = new BMap.Point(120.1824, 35.9463)
var zql = new BMap.Marker(cup1);
map.addOverlay(zql);
zql.addEventListener("click", function(){  
    alert("中国石油大学\n郑启龙\n");
    });

var cup2 = new BMap.Point(120.1873, 35.9271)
var st = new BMap.Marker(cup2);
map.addOverlay(st);
st.addEventListener("click", function(){  
    alert("中国石油大学\n孙涛\n");
    });

    var sdu = new BMap.Point(120.6928, 36.3709)
    var gz = new BMap.Marker(sdu);
    map.addOverlay(gz);
    gz.addEventListener("click", function(){  
        alert("山东大学\n公政\n法学院");
        });
