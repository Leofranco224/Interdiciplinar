const botao = document.querySelector('#openSideBar')
const xBtn = document.querySelector('.closeBtn')
let i = 0;

botao.addEventListener('click', () => {

    if (i % 2 == 0) openBar()
    else closeBar()

    i++
})

xBtn.addEventListener('click', () => {
    closeBar()
    i++
})

function openBar() {
    document.querySelector('#sideNav').style.width = "300px"
}

function closeBar() {
    document.querySelector('#sideNav').style.width = "0"
}
return (
    <div>
        <title>Sidebar do Luiz</title>
        <body>

            <div id="sideNav" class="sidenav">
                <a class="closeBtn">&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <button id="openSideBar">Clique Aqui</button>

            <script src="sidebar.js"></script>
        </body>
    </div>
);