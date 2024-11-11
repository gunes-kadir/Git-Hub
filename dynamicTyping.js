var customer = {
    id: 1,
    contactName: "Kadir Güneş"
}
customer.country = "Türkiye";
customer.sayHello = function () {
    alert("Hello "+ this.contactName);

}
customer.sayHello();
