export const loginUser = (payload) => {
  const { id, username, todoLists } = payload;
  return { id, username, todoLists };
};

export const deleteListItem = (lists, lid) => {
  return lists.filter((item) => item.lid !== lid);
};

export const renameList = (lists, payload) => {
  const { lid, title } = payload;
  return lists.map((item) => {
    return item.lid === lid ? { ...item, todoTitle: title } : { ...item };
  });
};

export const changeCompleted = (lists, payload) => {
  const { lid, item } = payload;
  return lists.map((listItem) => {
    return listItem.lid !== lid
      ? { ...listItem }
      : {
          ...listItem,
          todoItems: listItem.todoItems.map((todoItem) => {
            return todoItem.iid !== item.iid
              ? { ...todoItem }
              : { ...todoItem, completed: !item.completed };
          }),
        };
  });
};

export const addNewTodoItem = (lists, item) => {
  const { lid, iid, title } = item;
  return lists.map((listItem) => {
    return listItem.lid !== lid
      ? { ...listItem }
      : {
          ...listItem,
          todoItems: [...listItem.todoItems, { iid, title, completed: false }],
        };
  });
};

export const createNewTodoList = (lists, payload) => {
  const { lid, title } = payload;
  return [...lists, { lid, todoTitle: title, todoItems: [] }];
};
