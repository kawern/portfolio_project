var Billeder = ["Billeder/A.jpg", "Billeder/B.jpg", "Billeder/C.jpg", "Billeder/D.jpg", "Billeder/E.jpg", "Billeder/F.jpg", "Billeder/G.jpg", ];
var BilledeStor = false;
var BilledeNummer = 0;

window.addEventListener( 'load', function()
{
    document.getElementById("KnapTilbage").onclick = GalleriBilledeTilbage;
    document.getElementById("KnapFrem").onclick = GalleriBilledeFrem;
    document.getElementById("GalleriBillede").onclick = GalleriBilledeStor;

    GalleriLavThumbnails();
});

function GalleriBilledeTilbage()
{
 if( BilledeNummer == 0)
 {
     BilledeNummer = Billeder.lenght - 1;
 }
 else
 {
     BilledeNummer -= 1;
 }
 document.getElementById( "GalleriBillede" ).src = Billeder[ BilledeNummer ];
}

function GalleriBilledeFrem ()
{
    if( BilledeNummer == Billeder.length - 1 )
    {
        BilledeNummer = 0;
    }
    else
{
    BilledeNummer += 1;
}
document.getElementById( "GalleriBillede" ).src = Billeder[ BilledeNummer ];
}

function GalleriLavThumbnails()
{
    var AntalBilleder = Billeder.lenght;
    var ThumbnailNummer = 0;

    while( ThumbnailNummer < AntalBilleder )
{
    document.getElementById( "GalleriThumbnails" ).innerHTML +='<a onclick="GalleriBilledeSkift(' + ThumbnailNummer + ')"></a>';
    ThumbnailNummer += 1;
}
}
function GalleriBilledeSkift( SkiftTilBilledeNummer )
{
    document.getElementById( "GalleriBillede" ).src = Billeder[ SkiftTilBilledeNummer ];
}
function GalleriBilledeStor()
{
    if( BilledeStor == false )
    {
        document.getElementById( "Galleri" ).style.position = "fixed";
        BilledeStor = true;
    }
    else
    {
document.getElementById( "Galleri" ).style.position = "relative"
BilledeStor = false;
    }
}