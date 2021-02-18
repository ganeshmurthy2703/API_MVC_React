using System;
using System.IO;

namespace SongsAPI
{
    public class LemonTree
    {
        public string Lemontree { get; set; }

        public string Stainalive { get; set; }

        public string Sweetchild { get; set; }

        public LemonTree()
        {
            if (File.Exists("LemonTree.txt"))
            {
                Lemontree = File.ReadAllText("LemonTree.txt");
            }
            else
            {
                Lemontree = "??";
            }

            if (File.Exists("StayinAlive.txt"))
            {
                Stainalive = File.ReadAllText("StayinAlive.txt");
            }
            else
            {
                Stainalive = "??";
            }

            if (File.Exists("SweetChild.txt"))
            {
                Sweetchild = File.ReadAllText("SweetChild.txt");
            }
            else
            {
                Sweetchild = "??";
            }


        }

            
    }
}
