

exports.index=function(req,res){
	res.render('default',{
        title:'Home',
        Classname:'home',
        users:["Ray","Mortan","James"]
    });
}

exports.about=function(req,res){
	res.render('default',{
        title:'About Us',
        Classname:'about'
    });
}
