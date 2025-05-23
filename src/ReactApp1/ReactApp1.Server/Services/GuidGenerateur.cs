using system;

public class GuidGenerateur : IGuidGenerateur
{
    public Guid NouveauGuid()
    {
        return Guid.NewGuid();
    }
}


