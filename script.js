let expenses = {};

function addExpense() {
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('expense').value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense amount.');
        return;
    }

    if (!expenses[category]) {
        expenses[category] = 0;
    }
    expenses[category] += amount;

    updateExpenseList();
    document.getElementById('expense').value = '';  // Clear the input field
}

function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';  // Clear the list

    let totalExpenses = 0;

    for (const [category, amount] of Object.entries(expenses)) {
        const expenseDiv = document.createElement('div');
        expenseDiv.textContent = `${category.replace('-', ' ')}: $${amount.toFixed(2)}`;
        expenseList.appendChild(expenseDiv);

        totalExpenses += amount;
    }

    document.getElementById('total-expenses').textContent = `Total Expenses: $${totalExpenses.toFixed(2)}`;
}

function calculateBudget() {
    const month = document.getElementById('month').value;
    const income = parseFloat(document.getElementById('income').value);

    if (isNaN(income)) {
        alert('Please enter a valid income amount.');
        return;
    }

    let totalExpenses = 0;
    for (const amount of Object.values(expenses)) {
        totalExpenses += amount;
    }

    const remainingBudget = income - totalExpenses;

    document.getElementById('total-income').textContent = `Total Income (${month}): $${income.toFixed(2)}`;
    document.getElementById('remaining-budget').textContent = `Remaining Budget: $${remainingBudget.toFixed(2)}`;
}
