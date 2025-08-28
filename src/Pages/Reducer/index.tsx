import { useReducer, useState } from 'react';

const ACCOUNT_ACTIONS = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  TOGGLE: 'TOGGLE',
};

interface Account {
  id: number;
  amount: number;
  status: boolean;
}
type Action =
  | {
      type: typeof ACCOUNT_ACTIONS.ADD;
      payload: Account;
    }
  | {
      type: typeof ACCOUNT_ACTIONS.DELETE;
      payload: Account;
    }
  | {
      type: typeof ACCOUNT_ACTIONS.TOGGLE;
      payload: Account;
    };

const bankReducer = (account: Account[], actions: Action): Account[] => {
  switch (actions.type) {
    case ACCOUNT_ACTIONS.ADD: {
      const isDuplicate = account.some((item) => item.id == actions.payload.id);
      if (isDuplicate) {
        alert('User Id exits');
        return account;
      }

      return [
        ...account,
        {
          id: actions.payload.id,
          amount: actions.payload.amount,
          status: actions.payload.status,
        },
      ];
    }

    default:
      return account;
  }
};

const StateMangers = () => {
  const [amount, setAmount] = useState<number>();
  const [id, setId] = useState<number>();

  const [accounts, dispatch] = useReducer(bankReducer, []);
  return (
    <div className="py-4">
      <div className="max-w-[1200px] mx-auto shadow-lg p-4 rounded-xl">
        <h1 className="text-3xl text-center">Bank Reducer</h1>
        <div className="flex gap-2 justify-between mt-4">
          <div className=" border-b-blue-100  flex-1 ">
            <h1 className="text-center">Banking</h1>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="ID no"
                className="border h-10 w-16 rounded-xl shadow-xl px-2 "
                onChange={(e) => setId(Number(e.target.value))}
              />
              <input
                className="border h-10 w-96 rounded-xl shadow-xl px-2"
                type="number"
                placeholder="Enter the Amount"
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <button
                onClick={() =>
                  dispatch({
                    type: ACCOUNT_ACTIONS.ADD,
                    payload: {
                      id: id || 0,
                      amount: amount || 0,
                      status: false,
                    },
                  })
                }
                className="bg-blue-400 px-10 text-white rounded-sm hover:scale-105 cursor-pointer"
              >
                Add
              </button>
            </div>
          </div>
          <div className=" border-b-blue-100  flex-1 ">
            <h1 className="text-center">List of Accounts</h1>

            <table className="w-full text-center ">
              <tr className="border">
                <th>Id</th> <th>Amount</th> <th>Status</th>
              </tr>
              {accounts?.map((item, index) => (
                <tr key={index} className="w-full">
                  <td>{item.id}</td>
                  <td>$ {item.amount}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateMangers;
