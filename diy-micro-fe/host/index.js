global.diy = {
  registerComponent(name, info) {
    info.create(document.getElementById("checkoutSlot"), {
      productId: '12345'
    })
  }
}
