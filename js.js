// Função para o botão "Continuar Explorando"
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão pelo ID
    const continueButton = document.getElementById("continue-button");

    // Adiciona um evento de clique ao botão
    continueButton.addEventListener("click", function () {
        // Redireciona para a página inicio.html
        window.location.href = "inicio.html";
    });
});
// Função para o botão "Continuar Explorando"
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão pelo ID
    const continueButton = document.getElementById("continue-button");

    // Adiciona um evento de clique ao botão
    if (continueButton) {
        continueButton.addEventListener("click", function () {
            // Redireciona para a página inicio.html
            window.location.href = "inicio.html";
        });
    }

    // Função para redirecionar ao clicar na imagem do produto específico
    const wheyImage = document.querySelector("img[src='img/whey 900g.png']");

    // Adiciona um evento de clique à imagem do Whey Protein 900g
    if (wheyImage) {
        wheyImage.addEventListener("click", function () {
            // Redireciona para a página do Whey Protein Concentrado 900g
            window.location.href = "Whey Protein Concentrado 900g.html";
        });
    }
});
// Função para carregar e exibir os itens do carrinho
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    // Limpa os itens antigos
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    // Adiciona cada item ao carrinho
    cart.forEach((item, index) => {
        // Garantir que os valores de price e quantity sejam numéricos
        const price = parseFloat(item.price);
        const quantity = parseInt(item.quantity);

        // Verifica se os valores são válidos antes de somar
        if (!isNaN(price) && !isNaN(quantity)) {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="product-info">
                    <p>${item.name}</p>
                    <p>Preço: R$ ${price.toFixed(2)}</p>
                    <p>Unidades: ${quantity}</p>
                    <p>Total do Produto: R$ ${(price * quantity).toFixed(2)}</p> <!-- Total do item -->
                </div>
                <!-- Emoji para excluir o item -->
                <span class="delete-item" data-index="${index}">✖️</span>
            `;
            cartItemsContainer.appendChild(itemElement);

            // Calculando o preço total considerando a quantidade de cada produto
            totalPrice += price * quantity;
        }
    });

    // Atualiza o total
    totalPriceContainer.textContent = totalPrice.toFixed(2);

    // Adiciona evento de clique para excluir o item
    const deleteButtons = document.querySelectorAll('.delete-item');
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteItem);
    });
}

// Função para excluir um item do carrinho
function deleteItem(event) {
    const index = event.target.getAttribute('data-index');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove o item do carrinho
    cart.splice(index, 1);

    // Atualiza o carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Recarrega o carrinho para atualizar a visualização
    loadCart();
}

// Carrega os itens do carrinho quando a página é carregada
window.onload = loadCart;

