let expenses = [];

function addExpense() {
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    if (isNaN(totalAmount) || totalAmount <= 0) {
        alert('Insira um valor válido para a despesa.');
        return;
    }

    const expenseName = prompt('Nome da despesa:');
    if (!expenseName) {
        alert('Insira um nome para a despesa.');
        return;
    }

    const expenseAmount = parseFloat(prompt(`Quanto você gastou em ${expenseName}?`));
    if (isNaN(expenseAmount) || expenseAmount < 0) {
        alert('Insira um valor válido para a despesa.');
        return;
    }

    expenses.push({ name: expenseName, amount: expenseAmount });
    displayExpenses();
}

function displayExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    expenses.forEach(expense => {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(expenseItem);
    });
}

function calculatePercentages() {
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    if (isNaN(totalAmount) || totalAmount <= 0) {
        alert('Insira um valor válido para o total gasto.');
        return;
    }

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    expenses.forEach(expense => {
        const percentage = (expense.amount / totalAmount) * 100;
        const resultItem = document.createElement('div');
        resultItem.textContent = `${expense.name}: ${percentage.toFixed(2)}%`;
        resultContainer.appendChild(resultItem);
    });
}
