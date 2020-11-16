const { AppBar, Toolbar, IconButton } = MaterialUI;
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit">Button</IconButton>
      </Toolbar>
    </AppBar>
  )
}
const App = () => {
  return (
    <Header />
  )
};

ReactDOM.render(<App />, document.querySelector('#root'), () => {
  console.log('This is rendered');
});
