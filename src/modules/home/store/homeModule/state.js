
// export default () => ({ //se hace de esta manera la funcion para el objeto que este dentro sea reactivo

// })

export default () =>({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati aut voluptatibus reiciendis vitae harum! At magni facilis deserunt ullam sunt molestias provident? Fugit debitis assumenda ipsum obcaecati atque. Ducimus, quam.',
            picture: null, //https image
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Quo, nam, optio expedita hic voluptatum vel illo iste dolorum velit distinctio exercitationem quibusdam repellendus facere nulla. Exercitationem possimus aspernatur distinctio quisquam perferendis qui nisi ex enim, fugiat, repudiandae sapiente?',
            picture: null, //https image
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Eligendi molestiae commodi quas architecto iste eius sed perspiciatis officia necessitatibus quos veniam magnam perferendis quam, harum minima magni corporis quasi dolor ipsam ad tempore. Accusantium error dicta mollitia architecto?',
            picture: null, //https image
        },
        
    ]
})