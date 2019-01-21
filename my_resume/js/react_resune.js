new Vue({
  el: '#resume',
  data: {
  	img : 'free.jpg',
    name: '张先生',
    email: '保密',
    phone: '保密',
    jobtimes : '2016-10',
    job : '求职意向：前端工程师',
    salaryname : '薪资',  
    salary : '10~12',
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
    		company : '北京润合美商贸有限公司',
	    	region : '北京',
	    	job_position : 'Web前端中级工程师',
	    	times : '2018.4~至今',
    	},{
    		id : '2',
    		company : '北京创元成业科技有限公司',
	    	region : '北京',
	    	job_position : 'Web前端初级工程师',
	    	times : '2017.10~2018.4',
    	},
    	{
    		id : '2',
    		company : '北京匡恩网络科技有限责任公司',
    		region : '北京',
	    	job_position : 'Web前端初级工程师',
	    	times : '2016.10~2017.4',
    	},
    ],
    project_experience : '项目经历',
    project_info : [
	    {
    		id : '10',
    		projuct_name : 'CRM网红项目',
    		name : 'CRM项目',
	    	job_position : 'Web前端开发',
	    	times : '2018.11.20~2019.4.01',
	    	values : [{
	    		info : '项目职责: 负责公司网红CRM的全部前端工作(页面设计、功能交互以及测试等,全责)',
	    	},{
	    		info : '使用技术: 运用BootStrap/JQuery/vue/elementUI/echarts/ES6',
	    	},{
	    		info : '完成状态: 系统第一版进入开发间段',
	    	}],
	    	describe : '使用公司: 北京润合美商贸有限公司网红使用。',
    	},
	     {
    		id : '9',
    		projuct_name : 'CRM销帮帮项目（分销部）',
    		name : '销帮帮项目',
	    	job_position : 'Web前端开发',
	    	times : '2018.8.01~2018.10.01',
	    	values : [{
	    		info : '项目职责: 负责公司分销CRM的前端工作(页面设计、功能交互以及测试等,全责)',
	    	},{
	    		info : '使用技术: BootStrap/JQuery/vue/elementUI/echarts/ES6',
	    	},{
	    		info : '完成状态: 已完成第一、第二版开发,进入第三版迭代开发',
	    	}],
	    	describe : '使用公司：北京润合美商贸有限公司。',
    	},
	     {
    		id : '8',
    		projuct_name : '企业项目',
    		name : 'KPI考核第一版',
	    	job_position : 'Web前端开发',
	    	times : '2018.7.01~2018.8.01',
	    	values : [
	    	{
	    		info : '项目职责: 负责公司KPI考核第一版前端工作(页面设计、功能交互以及测试等,全责),接手外包进行的迭代开发，进行维护工作以及添加新功能',
	    	},{
	    		info : '使用技术: 运用BootStrap/JQuery',
	    	},{
	    		info : '完成状态: 第一版以完成,对外包的项目进行维护工作',
	    	}],
	    	describe : '使用公司: 北京润合美商贸有限公司。',
    	},
	     {
    		id : '7',
    		projuct_name : '电商项目',
    		name : '分销项目',
	    	job_position : 'Web前端开发',
	    	times : '2018.4.20~2018.7.01',
	    	values : [{
	    		info : '项目职责: 维护已有项目的前端工作,重构原有前端代码',
	    	},{
	    		info : '使用技术: 运用BootStrap/JQuery',
	    	}],
	    	describe : '使用公司：北京润合美商贸有限公司。',
    	},
	    {
    		id : '6',
    		projuct_name : '电商项目',
    		name : '合伙人项目(手机端项目)',
	    	job_position : 'Web前端开发',
	    	times : '2018.4.20~2018.7.01',
	    	values : [{
	    		info : '项目职责: 维护已有项目的前端工作、添加新的功能',
	    	},{
	    		info : '使用技术: 运用BootStrap/JQuery',
	    	}],
	    	describe : '使用公司：北京润合美商贸有限公司微信手机端项目。',
    	},
	  {
    		id : '5',
    		projuct_name : '电商项目',
    		name : '猫超OS平台',
	    	job_position : 'Web前端开发',
	    	times : '2018.4.20~2018.7.01',
	    	values : [{
	    		info : '项目职责: 维护已有项目的前端部分工作、迭代开发',
	    	},{
	    		info : '使用技术: 运用BootStrap/JQuery/bootstrap table/css3/echarts',
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
	    	times : '2017.12~2018.3',
	    	values : [{
	    		info : '项目职责: 维护已有项目的前端工作(全责)',
	    	},{
	    		info : '使用技术: 运用BootStrap/JQuery/jsp/echartjs',
	    	},{
	    		info : '完成状态: 完成第一版',
	    	}],
	    	describe : '使用公司: 北京创元成业科技有限公司工厂使用。',
    	},
    	{
    		id : '3',
    		projuct_name : '企业项目',
    		name : '客户下单平台(订单系统)',
	    	job_position : 'Web前端开发',
	    	times : '2017.10~2017.12',
	    	values : [{
	    		info : '项目职责: 维护已有项目的前端工作(全责)',
	    	},{
	    		info : '使用技术: 运用BootStrap/JQuery/echartjs',
	    	},{
	    		info : '完成状态: 完成第一版',
	    	}],
	    	describe : '使用公司: 北京创元成业科技有限公司对外使用。',
    	},
    	{
    		id : '2',
    		projuct_name : '商业项目',
    		name : '工控安全卫士',
	    	job_position : 'Web前端开发',
	    	times : '2017.1~2017.4',
	    	values : [{
	    		info : '项目职责: 维护已有项目的前端部分工作',
	    	},{
	    		info : '使用技术: 运用BootStrap/JQuery/echartjs',
	    	},{
	    		info : '完成状态: 已完成',
	    	}],
	    	describe : '类似杀毒软件网络安全管理',
    	},
    	{
    		id : '1',
    		projuct_name : '商业项目',
    		name : '工控卫士集中管理平台',
	    	job_position : 'Web前端开发',
	    	times : '2016.10~2017.1',
	    	values : [{
	    		info : '项目职责: 负责公司工控卫士集中管理平台项目的前端部分工作',
	    	},{
	    		info : '使用技术: 运用BootStrap/JQuery/echartjs/node/angular',
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
    		name : '我的个人博客',
	    	job_position : '全站开发',
	    	times : '2018.1.1~2018.1.30',
	    	info : '使用JQuery/Javascript/NodeJS/vue/mongodb',
    	},
    	{
    		id : '2',
    		name : '终端管理系统(毕业设计)',
	    	job_position : '全站开发',
	    	times : '2017.1~2017.6',
	    	info : '使用JQuery/Javascript/PHP/MySql',
    	},
    	{
    		id : '3',
    		name : '在线商城 ',
	    	job_position : '全站开发',
	    	times : '2016.4~2016.6',
	    	info : '使用JQuery/Javascript/java/jsp/MySql',
    	},
    	{
    		id : '4',
    		name : '多用户留言系统',
	    	job_position : '全站开发',
	    	times : '2015.11~2016.4',
	    	info : '使用JQuery/Javascript/PHP/MySql',
    	},
    	{
    		id : '5',
    		name : 'CMS内容管理系统',
	    	job_position : '全站开发',
	    	times : '2015.5~2015.10',
	    	info : '使用JQuery/Javascript/PHP/MySql',
	    }
    ],
    skills : '技能',
    skills_info : [
    	{
    		id : '1',
    		name : '语言',
	    	language : 'HTML(5)/CSS(3)/Javascript/PHP/EchartsJs/Gojs',
    	},
    	{
    		id : '2',
    		name : '其他',
	    	language : 'HTTP/JSP(技术)',
    	},
    	{
    		id : '3',
    		name : '框架',
	    	language : 'Jquery/Bootstrap/vue/angular/elementUI',
    	},
    	{
    		id : '4',
    		name : '数据库',
	    	language : 'MySql/MongoDB',
    	},
    	{
    		id : '5',
    		name : '前端工具 ',
	    	language : 'webpack',
	    },
	    {
    		id : '6',
    		name : '版本管理 ',
	    	language : 'git',
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
