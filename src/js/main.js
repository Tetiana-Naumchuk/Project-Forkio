
  const btnMenu = document.querySelector('.menu__btn')
	const menu = document.querySelector('.menu__list')
	const menuToggle = document.querySelector('#menu__toggle')

	btnMenu.addEventListener('click', function (e) {
		e.stopPropagation()
	})

	function onDocumentClick(e) {
		const target = e.target
		const its_menu = target == menu || menu.contains(target)
		const its_btnMenu = target == btnMenu
		const menu_is_active = menuToggle.checked 
		if (!its_menu && !its_btnMenu && menu_is_active && target != menuToggle) {
			menuToggle.checked = false
		}
	}
	document.addEventListener('click', onDocumentClick)