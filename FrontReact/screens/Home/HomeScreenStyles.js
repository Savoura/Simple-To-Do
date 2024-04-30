import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  todoList: {
    flexGrow: 1,
    width: '100%',
  },
  todoItem: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  todoDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  todoCreatedAt: {
    fontSize: 12,
    color: '#999',
  },
  addTodoContainer: {
    marginTop: 20,
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
