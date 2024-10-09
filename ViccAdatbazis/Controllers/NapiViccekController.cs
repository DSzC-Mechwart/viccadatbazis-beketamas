using Microsoft.AspNetCore.Mvc;
using ViccAdatbazis.Models;

namespace ViccAdatbazis.Controllers
{
    public class NapiViccekController : Controller
    {
        [HttpGet]
        [Route("[controller]")]

        public Vicc Get()
        {
            Vicc newfunny = new();
            newfunny.Tartalom = "A Pál utcai fiúk közül, Boka fog kirándulni a legtöbbször";
            newfunny.Feltolto = "XD man";
            newfunny.Tetszik = 500;
            newfunny.NemTetszik = 1;
            newfunny.Aktiv = true;
            return newfunny;
        }
    }
}
