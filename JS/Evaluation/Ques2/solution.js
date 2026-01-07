const transactions = [
  { id: 1, category: 'Food', amount: 45.50, date: '2024-01-15' },
  { id: 2, category: 'Transport', amount: 20.00, date: '2024-01-16' },
  { id: 3, category: 'Food', amount: 30.75, date: '2024-01-17' },
  { id: 4, category: 'Entertainment', amount: 50.00, date: '2024-01-18' },
  { id: 5, category: 'Food', amount: 25.25, date: '2024-01-19' },
  { id: 6, category: 'Transport', amount: 15.50, date: '2024-01-20' }
];

function aggregateData(transactions)
{
    let groups ={};

    for(let i=0; i<transactions.length; i++)
    {
        let group = transactions[i].category;
        if(!groups[group])
        {
            groups[group]={
                total:0,
                count:0,
                highest:transactions[i].amount,
                lowest:transactions[i].amount
            }
        }

        let data=groups[group];
        data.total +=transactions[i].amount;
        data.count +=1;
        data.highest = Math.max(data.highest, transactions[i].amount)
        data.lowest = Math.min(data.lowest, transactions[i].amount)
    }

    for(let group in groups)
    {
        const data =groups[group];
        data.total = (data.total).toFixed(2);
        data.average = (data.total/data.count).toFixed(2);
    }

    return groups
}



const result = aggregateData(transactions);
console.log(result);