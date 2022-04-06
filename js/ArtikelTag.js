class ArtikelTag extends React.Component {
  render = () => {

    return (
      <div>
        <dd><label htmlFor="Artikel">
          <input type="Checkbox" onChange={() => this.props.checkHandler(this.props.artikel)}
                 defaultChecked={this.props.artikel.gekauft}/>
          {this.props.artikel.gekauft ? <s>{this.props.artikel.name}</s> : this.props.artikel.name}
        </label><i onClick={() => this.props.deleteHandler(this.props.artikel.name)}
                   className="material-icons">delete</i></dd>
      </div>
    )
  }
}
