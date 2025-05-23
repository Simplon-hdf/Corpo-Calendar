using System;


public class Commentaire
{
	private string _idCommentaire;
	private string _contenu;
	private DateTime _date;
	private string _idUtilisateur;


    public string IdCommentaire  { get => _idCommentaire; set => _idCommentaire = value; } 
	public string Contenu { get => _contenu; set => _contenu = value; }
	public DateTime Date { get => _date; set => _date = value; }
	public string IdUtilisateur { get => _idUtilisateur; set => _idUtilisateur = value; }
	
}
