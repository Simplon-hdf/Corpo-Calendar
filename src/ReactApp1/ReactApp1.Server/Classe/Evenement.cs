using System;
using Services;

public class Evenement
{
	private Guid _idEvenement;
	private string _titre;
	private string _lieu;
	private DateTime _dateDebut;
	private DateTime _dateFin;
	private string _description;

	public Guid IdEvenement => _idEvenement;
	public string Titre { get => _titre; set => _titre = value; }
	public string Lieu { get => _lieu; set => _lieu = value; }
	public DateTime DateDebut { get => _dateDebut; set => _dateDebut = value; }
	public DateTime DateFin { get => _dateFin; set => _dateFin = value; }
	public string Description { get => _description; set => _description = value; }

    ppublic Evenement(string titre, string lieu, DateTime dateDebut, DateTime dateFin, string description, IGuidGenerateur generateur)
    {

        _idEvenement = generateur.NouveauGuid();
		_titre = titre;
		_lieu = lieu;
		_dateDebut = dateDebut;
		_datFin = dateFin;
		_description = description;

	}
}
