new Vue({
  el: '#resume',
  data: {
  	img : 'free.jpg',
    name: '张晓敏',
    email: '保密',
    phone: '保密',
    jobtimes : '2016-10',
    job : '求职意向：前端工程师',
    salaryname : '薪资',  
    salary : '10.5~12.5',
    jobtimesale : '',
    education_ba : '教育背景',
    education : [{
    	school : '北京交通大学海滨学院',
    	region : '河北',
    	time : '2013-2017',
    	degree : '学士',
    	professional : '软件工程专业',
    	course : '本科',
    }],
    work_experience : '工作经历',
    work_info : [
	{
		id : '1',
    		company : '北京极致互联有限公司',
	    	region : '北京',
	    	job_position : 'Web前端工程师',
	    	times : '2019.3~至今',
	},
    	{
    		id : '2',
    		company : '北京润合美商贸有限公司',
	    	region : '北京',
	    	job_position : 'Web前端工程师',
	    	times : '2018.4~2019-3',
    	},{
    		id : '3',
    		company : '北京创元成业科技有限公司',
	    	region : '北京',
	    	job_position : 'Web前端工程师',
	    	times : '2017.10~2018.4',
    	},
    	{
    		id : '4',
    		company : '北京匡恩网络科技有限责任公司',
    		region : '北京',
	    	job_position : 'Web前端工程师',
	    	times : '2016.10~2017.4',
    	},
    ],
    project_experience : '项目经历',
    project_info : [
	     {
    		id : '9',
    		projuct_name : '分销CRM项目',
    		name : '分销CRM项目',
	    	job_position : 'Web前端开发',
	    	times : '2018.8~至今',
	    	values : [{
	    		info : '前期需求整理:1、客户、联系人、店铺信息来源：销售添加、同步公司内部U8客户、获取天眼查的企业信息以及法人相关的旗下公司、联系人、店铺、通过公司官网注册添加的基本信息，生成客户线索，通过客户线索转化到客户；2、对客户进行跟踪促成合作意向；3、销售完成目标以及完成情况等；4、销售考核等需求等等',
	    	},{
	    		info : '后期开发: 实现公司CRM系统的功能模块的业务流程以及功能模块的页面设计、js功能交互、开发通用组件以及功能测试等。',
	    	},{
	    		info : '使用技术: vue/elementUI/echarts/ES6',
	    	},{
	    		info : '完成状态: 已完成第一、第二版、第三版开发',
	    	}],
	    	describe : '使用公司：北京润合美商贸有限公司。',
    	},{
    		id : '5',
    		projuct_name : '电商项目',
    		name : '猫超OS平台',
	    	job_position : 'Web前端开发',
	    	times : '2018.4.20~至今',
	    	values : [{
	    		info : '代码维护: 根据业务部门的需求，调整已有代码业务逻辑以及呈现等。',
	    	},{
	    		info : '迭代开发: 整理业务部门需求、确定前端开发周期以及开发效果等。',
	    	},{
	    		info : '使用技术: 运用BootStrap/JQuery/bootstrap table/echarts',
	    	},{
	    		info : '完成状态: 持续维护',
	    	}],
	    	describe : '使用公司：北京润合美商贸有限公司供应链部门、猫超部门使用。',
    	},
    	{
    		id : '4',
    		projuct_name : '企业项目',
    		name : '创元生产平台',
	    	job_position : 'Web前端开发',
	    	times : '2017.10~2018.4',
	    	values : [{
	    		info : '前期需求整理: 去业务部门搜集需求，主要有，1、客户详细信息以及客户多收货详细信息；2、客户生成硬件产品类型、硬件主板、包装的详细信息以及销售报价、审核、销售促成合作；3、客户收货以及返厂维修以及相关跟踪；4、根据客户的产品进行相关的生成流程线；5、财务收款以及核账开票等。',
	    	},{
	    		info : '后期开发: 实现公司系统的功能模块的业务流程以及功能模块的页面设计、js功能交互以及功能测试等。',
	    	},{
	    		info : '使用技术: 运用BootStrap/JQuery/echartjs',
	    	},{
	    		info : '完成状态: 完成第一版',
	    	}],
	    	describe : '使用公司: 北京创元成业科技有限公司以及相关客户使用。',
    	},
    	{
    		id : '1',
    		projuct_name : '商业项目',
    		name : '工控卫士集中管理平台',
	    	job_position : 'Web前端开发',
	    	times : '2016.10~2017.1',
	    	values : [{
	    		info : '前期需求整理: 对已有需求进行整理，完善功能的流程设计等。',
	    	},{
	    		info : '后期开发: 实现公司系统的部分功能模块的业务流程以及功能模块的页面设计、js功能交互以及功能测试等。',
	    	},{
	    		info : '使用技术: 运用JQuery/echartjs/node/angular',
	    	},{
	    		info : '完成状态: 已完成',
	    	}],
	    	describe : '针对传统的工业进行网络安全管理',
    	}
    ],
    person_product : '个人项目',
    person_info : [
    	{
    		id : '1',
    		name : '在线系统',
	    	job_position : '全站开发',
	    	times : '2018.11~2019.1',
	    	info : '使用vue/elementUI/webSql/echartjs',
    	},
    	{
    		id : '2',
    		name : '我的个人博客',
	    	job_position : '全站开发',
	    	times : '2018.1.1~2018.1.30',
	    	info : '使用JQuery/Javascript/NodeJS/vue/mongodb',
    	},
    	{
    		id : '3',
    		name : '终端管理系统(毕业设计)',
	    	job_position : '全站开发',
	    	times : '2017.1~2017.6',
	    	info : '使用JQuery/Javascript/PHP/MySql',
    	}
    ],
    skills : '技能',
    skills_info : [
    	{
    		id : '1',
    		name : '语言',
	    	language : 'HTML(5)/CSS(3)/Javascript/PHP',
    	},
    	{
    		id : '3',
    		name : '框架',
	    	language : 'Jquery/Bootstrap/vue/angular/elementUI/EchartsJs/Gojs',
    	},
    	{
    		id : '4',
    		name : '数据库',
	    	language : 'MySql/MongoDB/webSql',
    	},
    	{
    		id : '5',
    		name : '前端工具 ',
	    	language : 'webpack/gulp',
	    }
    ],
    other : '其他',
    other_list : [
    	{
    		id : '1',
    		name : 'github',
	    	language : 'https://github.com/eight1302',
    	},
    	{
    		id : '2',
    		name : 'CSDN博客',
	    	language : 'http://my.csdn.net/zxmin1302',
    	},
    	{
    		id : '3',
    		name : '在线系统',
	    	language : 'https://eight1302.github.io/personJOB/myprojetct/view/login.html',
    	}
    ]
  },
  methods:{
  	date : function(data){
  		var jobdate = this.jobtime(data,this.start());
		this.jobtimesale = jobdate;
  		return jobdate;
  	},
  	start : function(){
  		  var date = new Date();
		    var y = date.getFullYear();  
		    var m = date.getMonth() + 1;
		    var d = date.getDate();
		 if(d>=15){
		    m=m+1;
		   }
		   if(m>12){
			y= y+1;
		   	m=m-12;
		   }
		    m = m < 10 ? ('0' + m) : m;
	          
		  
		    return y+'-'+m;
  	},
  	jobtime : function(start,end){
  		var staryear = start.split('-'),
  			endyear = end.split('-');
  		var month = '',year = '';
		if(endyear[1]-staryear[1]<0){
			endyear[0] = endyear[0]-1;
			month = Number(endyear[1])+12-Number(staryear[1]);
		}else{
			month = endyear[1]-staryear[1];
		}
		year = endyear[0]-staryear[0];
		return year+'年'+month+'月';
  	},
	salarys : function(data){
		var salar = data.split('~');
		let start = Number(salar[0]),
			end =  Number(salar[1])
		let year = Number(this.jobtimesale.split('年')[0]),month = Number(this.jobtimesale.split('年')[1].split('月')[0]);
		if(year>=2){
		    let syear = year-1;
		    start+=syear+2;
		    end+=syear+2;
		}
		if(month>6){
			let smonth = (month)/3;
		    start+=smonth*0.5;
		    end+=smonth*0.5;	
		}
		return start.toFixed(1)+'~'+end.toFixed(1);
	}
  }
})
