class ShoppingTag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aktiveGruppe: 0, showGruppenDialog: false
    }
  }

  /**
   *
   * @param
   */
  setAktiveGruppe = (gruppenId) => {
    App.aktiveGruppe = gruppenId
    this.setState({aktiveGruppe: App.aktiveGruppe})
  }

  artikelChecken = (artikel) => {
    artikel.gekauft = !artikel.gekauft
    this.setState(this.state)
  }

  artikelHinzufuegen = () => {
    let eingabe = document.getElementById("Artikel")
    if (eingabe.value.trim().length > 0) {
      let grp = App.gruppeFinden(this.state.aktiveGruppe)
      grp.artikelHinzufuegen(eingabe.value)
      this.setState(this.state)
      console.debug(this.state.aktiveGruppe)
    }
    eingabe.value = ""
    eingabe.focus()
  }

  render = () => {
    return (<div>
        <h1>Einkaufsliste</h1>
        <nav>
          <label htmlFor="Artikel">Artikel hinzufügen:</label>
          <br/>
          <input type="text" id="Artikel" placeholder="Artikel hinzufügen"/>
          <button className="material-icons" onClick={this.artikelHinzufuegen}>add_circle</button>
        </nav>
        <hr/>
        <main>
          <section>
            <h2>Einkaufen
              <i className="material-icons">expand_less</i></h2>
            <dl>

              {App.gruppenListe.map(gruppe => (<GruppenTag key={gruppe.id} gruppe={gruppe} erledigt={false}
                                                           aktiveGruppeHandler={this.setAktiveGruppe}
                                                           aktiv={gruppe.id == this.state.aktiveGruppe}
                                                           checkHandler={this.artikelChecken}/>))}

            </dl>
          </section>
          <hr/>
          <section>
            <h2>Erledigt
              <i className="material-icons">expand_less</i>
            </h2>
            {App.gruppenListe.map(gruppe => (<GruppenTag key={gruppe.id} gruppe={gruppe}
                                                         erledigt={true} aktiv={false}
                                                         aktiveGruppeHandler={this.setAktiveGruppe}
                                                         checkHandler={this.artikelChecken}/>))}

          </section>
        </main>
        <hr/>
        <footer>
          <nav>
            <a href="Gruppen_advanced.html">
              <button onClick={()=>this.setState({showGruppenDialog:true})}><span className="material-icons">bookmark_add</span>gruppen
              </button>
            </a>
            <a href="Sortieren_advanced.html">
              <button><span className="material-icons">sort</span>sortieren</button>
            </a>
            <a href="Setup_advanced.html">
              <button><span className="material-icons">settings</span>Settings</button>
            </a>
          </nav>
        </footer>
      <GruppenDialog visible={this.state.showGruppenDialog} gruppenListe={App.gruppenListe}
                     onDialogClose={() => this.setState({showGruppenDialog: false})}></GruppenDialog>
      </div>)
  }
}

