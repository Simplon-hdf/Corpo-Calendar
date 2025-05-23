using System;


public class Evenement
{
	private string _idEvenement;
	private string _titre;
	private string _lieu;
	private DateTime _dateDebut;
	private DateTime _dateFin;
	private string _description;

	public string IdEvenement { get => _idEvenement; set => _idEvenement = value; }
	public string Titre { get => _titre; set => _titre = value; }
	public string Lieu { get => _lieu; set => _lieu = value; }
	public DateTime DateDebut { get => _dateDebut; set => _dateDebut = value; }
	public DateTime DateFin { get => _dateFin; set => _dateFin = value; }
	public string Description { get => _description; set => _description = value; }


	
}
