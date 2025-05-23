using System;


public class Utilisateur
{
	private string _idUtilisateur;
	private string _nom;
	private string _email;
	private string _motDePasse;
	private string _role;

	public string IdUtilisateur { get => _idUtilisateur; set => _idUtilisateur = value; }
	public string Nom { get => _nom; set => _nom = value; }
	public string Email { get => _email; set => _email = value; }
	public string MotDePasse { get => _motDePasse; set => _motDePasse = value; }
	public string Role { get => _role; set => _role = value; }

	
}
