using System;


public class Commentaire
{
    private Guid _idCommentaire;
    private string _contenu;
    private DateTime _date;
    private string _idUtilisateur;


    public Guid IdCommentaire => _idCommentaire;
    public string Contenu { get => _contenu; set => _contenu = value; }
    public DateTime Date { get => _date; set => _date = value; }
    public string IdUtilisateur { get => _idUtilisateur; set => _idUtilisateur = value; }

    public Commentaire(string contenu, DateTime date, string idUtilisateur, IGuidGenerateur generateur)
    {
        _idCommentaire = generateur.NouveauGuid();
        _contenu = contenu;
        _date = date;
        _idUtilisateur = idUtilisateur;
    }


}
