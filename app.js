function app() {

    const notifiationButton = document.querySelectorAll('#notifiation-button');
    const notificationOne = notifiationButton[0];
    const notificationTwo = notifiationButton[1];
    const profile = document.getElementById('profile-popup');
    const header = document.getElementById('header');
    const notification = document.getElementById('notification');
    const close = document.querySelectorAll('#close');
    const alertBtn = document.querySelectorAll('#alert-btn');
    const headerFocus = document.querySelectorAll('.header-focus-elements')
    const premiumContent = document.querySelectorAll('#premium-content')
    const pc = document.querySelectorAll('.pc');
    const setupKeys = document.querySelectorAll('#setup-keys');
    const processButton = document.querySelectorAll('.process-button');
    const setupToggle = document.getElementById('setup-toggle');
    const process = document.querySelector('.process');
    const check = document.querySelectorAll('.check')
    const completed = document.querySelectorAll('.completed')
    const loading = document.querySelectorAll('.loading')
    const notCompleted = document.querySelectorAll('.not-completed')
    const progress = document.querySelector('.progress');
    const progressIndicator = document.querySelector('.progress-indicator');
    const hideIcons = 'hide-icons';
    const markedDone = 'checkbox-done';
    let width = 0
    
    // do the exact thing for the other 4 variables
    progressIndicator.innerHTML = width;
    progress.style.width = `${width * 20}%`;

    check.forEach((element, index) => {
        element.addEventListener('click', () => {
            element.classList.toggle('fake')
            if (element.classList.contains('fake')) {
                width++;

            } else {
                width--
            }
            progressIndicator.innerHTML = width
            progress.style.width = `${width * 20}%`;

            console.log(width);
       })
   });
    function handleMarkAsDone(param) {
        notCompleted.forEach((nc, index) => {
 
            if (param === index) {
                let number = index + 1;
                if (index >= 4) {
                    number = 0
                }
                
                nc.classList.add(hideIcons)
               processButton.item(number).focus()
                loading[param].classList.remove(hideIcons)
                setTimeout(() => {
                    loading[param].classList.add(hideIcons)
                    completed[param].classList.remove(hideIcons);
                    check[param].classList.add(markedDone)
                }, 3000)

            } else {
                nc.classList.remove(hideIcons)
                // loading[param].classList.add('hide')
            }
        })
    }
   
    function handleMarkAsNotDone(param) {
        loading[param].classList.remove(hideIcons);
        completed[param].classList.add(hideIcons);
        setTimeout(() => {
            loading[param].classList.add(hideIcons);
            notCompleted[param].classList.remove(hideIcons)
            check[param].classList.remove(markedDone)
        }, 3000);
    }
    function handleMarkDoneOrNotDone(param) {
        const handleCheck = check[param].classList.contains(markedDone);

        if (handleCheck) {
            handleMarkAsNotDone(param)
            
        } else {
            handleMarkAsDone(param)
        }
        
    }

    check.forEach((checks, index) => checks.addEventListener('click', () => handleMarkDoneOrNotDone(index)))

    function setupToggleHandler() {
        setupKeys.forEach(keys => keys.classList.toggle('active'));
        // process.classList.toggle('active');
        if (process.classList.contains('active')) {
            process.classList.remove('active')
            closeSetupToggleHandler()
        } else {
            process.classList.add('active')
            openSetupToggleHandler()
           
        }
    }
    function closeSetupToggleHandler() {
        setupKeys[0].focus();
        

    }
    function openSetupToggleHandler() {
        processButton.item(0).focus();
      
        process.addEventListener('keyup', handleProcessEscapeKeypress)
    }
    setupToggle.addEventListener('click', setupToggleHandler)
    function handleProcessEscapeKeypress(e) {
        if (e.key === 'Escape') {
            setupToggleHandler()
        }
    }
    function closeMenu() {
        if (profile.classList.contains('active')) {
            profile.classList.remove('active')
        }
        if (notification.classList.contains('active')) {
            notification.classList.remove('active')
        }
    }
    function premiunClose() {
        const premiumContainer = document.getElementById('premium');
        premiumContainer.classList.toggle('active')

    }

    pc.forEach(pcc => pcc.addEventListener('click', premiunClose))
    close.forEach(cl => cl.addEventListener('click', closeMenu))
    processButton.forEach((pBtn, index) => pBtn.addEventListener('keyup', function (event) {
        handleProfileArrowKeysPress(event, index, processButton)
    }))
    premiumContent.forEach((pContent, index) => pContent.addEventListener('keyup', function (event) {
        handleProfileArrowKeysPress(event, index, premiumContent)
    }))
    alertBtn.forEach((alertBtns, index) => alertBtns.addEventListener('keyup', function (event) {
        handleProfileArrowKeysPress(event, index, alertBtn)
    }))
    headerFocus.forEach((hfocus, index) => hfocus.addEventListener('keyup', function (event) {
        handleProfileArrowKeysPress(event, index, headerFocus)
    }))



    // notification toggle code
    const notificationToggle = () => {
        console.log(notifiationButton);
        if (profile.classList.contains('active')) {
            profile.classList.remove('active')
        }
        if (notification.classList.contains('active')) {
            notification.classList.remove('active')
            closeNotificationMenu()

        } else {
            notification.classList.add('active')
            openNotificationMenu()
        }

    }
    notifiationButton.forEach(not => not.addEventListener('click', notificationToggle))

    function closeNotificationMenu() {
        notificationOne.ariaExpanded = false
        notificationTwo.ariaExpanded = false
        notificationOne.focus()
        notificationTwo.focus()
    }
    function openNotificationMenu() {

        notificationOne.ariaExpanded = true
        notificationTwo.ariaExpanded = true;
        alertBtn.item(0).focus();
        notification.addEventListener('keyup', handleNotificationEscapeKeypress)
    }
    function handleNotificationEscapeKeypress(e) {
        if (e.key === 'Escape') {
            notificationToggle()
        }
    }










    // profile toggle code

    const profileButton = document.querySelectorAll('#profile-button');
    const profileOne = profileButton[0];
    const profileTwo = profileButton[1];



    function handleProfileEscapeKeypress(e) {
        if (e.key === 'Escape') {
            profileToggle()
        }
    }
    function closeProfileMenu() {
        profileOne.ariaExpanded = false
        profileTwo.ariaExpanded = false
        profileOne.focus()
        profileTwo.focus()
    }

    function openProfileMenu() {

        profileOne.ariaExpanded = true
        profileTwo.ariaExpanded = true;
        close.item(1).focus();
        profile.addEventListener('keyup', handleProfileEscapeKeypress)
    }
    const profileToggle = (param) => {
        console.log(`${param} bbbb`)
        if (notification.classList.contains('active')) {
            notification.classList.remove('active');

        }

        if (profile.classList.contains('active')) {
            profile.classList.remove('active')
            closeProfileMenu()
        } else {
            profile.classList.add('active');
            openProfileMenu()
        }
    }

    function handleProfileArrowKeysPress(event, index, variable) {
        const lastItem = index === close.length - 1;
        const firstItem = index === 0;
        const nextItem = variable.item(index + 1)

        const prevItem = variable.item(index - 1)
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            if (lastItem) {
                variable.item(0).focus()
                return;
            }
            nextItem.focus()

        }
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            if (firstItem) {
                variable.item(variable.length - 1).focus()
                return;
            }
            prevItem.focus()
        }

    }
    close.forEach((closeKeys, index) => closeKeys.addEventListener('keyup', function (event) {
        handleProfileArrowKeysPress(event, index, close)
    }))
    profileButton.forEach(profiles => profiles.addEventListener('click', profileToggle))
}
app()

