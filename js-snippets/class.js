class AjaxCall{
  constructor({url="",status="pending",data={},dataType="application/json",cached=false,count=1,response={}}){
      this.AjaxCallsStatus = Object.freeze({
          'PENDING': 'pending',
          'COMPLETE': 'complete'
      });
      this.url = url;
      this.status = status;
      this.data = data;
      this.dataType = dataType;
      this.cached = cached;
      this.count = count;
      this.response = response;
  }    
}

ajaxCall = new AjaxCall({url: "somthing"})

console.log(ajaxCall.url);
console.log(ajaxCall.status);
console.log(ajaxCall.data);
console.log(ajaxCall.cached);



