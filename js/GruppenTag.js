class GruppenTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aufgeklappt: true
    }
  }

  aufZuKlappen() {
    this.setState({aufgeklappt: !this.state.aufgeklappt})
  }

  artikelEntfernen = (artikelName) => {
    this.props.gruppe.artikelEntfernen(artikelName)
    this.props.aktiveGruppeHandler(this.props.gruppe.id)


  }
  render = (props) => {
    const erledigt = this.props.erledigt
    let itemsRelevant = this.props.gruppe.artikelListe.filter(item => item.gekauft == erledigt)
    return (
      <div>
        <dt className={this.props.aktiv && !erledigt ? "aktiv" : "inaktiv"}
            onClick={() => !erledigt ? this.props.aktiveGruppeHandler(this.props.gruppe.id) : ''}>
          <span>{this.props.gruppe.name}</span>
          <i onClick={() => this.aufZuKlappen()} className="material-icons">
            {this.state.aufgeklappt ? 'expand_more' : 'expand_less'}
          </i>
        </dt>
        {this.state.aufgeklappt ?
          itemsRelevant.map(artikel => (
            <ArtikelTag key={artikel.id} artikel={artikel}
                        deleteHandler={this.artikelEntfernen}
                        checkHandler={this.props.checkHandler}/>

          ))
          : ''}
      </div>
    )
  }
}