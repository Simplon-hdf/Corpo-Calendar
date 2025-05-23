using System;
using Services;


public class Utilisateur
{
	private Guid _idUtilisateur;
	private string _nom;
	private string _email;
	private string _motDePasse;
	private string _role;

    public Guid IdUtilisateur => _idUtilisateur;
    public string Nom { get => _nom; set => _nom = value; }
    public string Email { get => _email; set => _email = value; }
    public string MotDePasse { get => _motDePasse; set => _motDePasse = value; }
    public string Role { get => _role; set => _role = value; }

    public Utilisateur(string nom, string email, string motDePasse, string role, IGuidGenetateur generateur)
	{
		_idUtilisateur = generateur.NouveauGuid();
		_nom = nom;
		_email = email;
		_motDePasse = motDePasse;
		_role = role;

    }

	
}
