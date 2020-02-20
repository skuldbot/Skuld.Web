import React from 'react';
import CreditsFile from '../data/credits'
import CreditSection from '../components/CreditSection'

export default class Credits extends React.Component {
    render() {
        return (
            <div className="credits">
                {CreditsFile.Developers.length > 0 ? 
                (
                    <div className="creditContainer">
                        <h4 className="underline">Developers</h4>
                        <ul className="flexList" >
                            <CreditSection data={CreditsFile.Developers} />
                        </ul>
                        <hr />
                    </div>
                ) : <br />}
                {CreditsFile.Staff.length > 0 ? 
                (
                    <div className="creditContainer">
                        <h4 className="underline">Staff</h4>
                        <ul className="flexList" >
                            <CreditSection data={CreditsFile.Staff} />
                        </ul>
                        <hr />
                    </div>
                ) : <br />}
                {CreditsFile.Artists.length > 0 ? 
                (
                    <div className="creditContainer">
                        <h4 className="underline">Artists</h4>
                        <ul className="flexList" >
                            <CreditSection data={CreditsFile.Artists} />
                        </ul>
                        <hr />
                    </div>
                ) : <br />}
                {CreditsFile.Contributors.length > 0 ? 
                (
                    <div className="creditContainer">
                        <h4 className="underline">Contributors</h4>
                        <ul className="flexList" >
                            <CreditSection data={CreditsFile.Contributors} />
                        </ul>
                        <hr />
                    </div>
                ) : <br />}
                <div className="creditContainer">
                    <h4 className="underline">NuGet Packages</h4>
                    <table className="credits-table">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Package</td>
                                <td>Link</td>
                            </tr>
                            <tr>
                                <td>Discord.Net Team</td>
                                <td>Discord.Net Library</td>
                                <td><a href="https://github.com/Discord.Net/Discord.Net">Github</a></td>
                            </tr>
                            <tr>
                                <td>Datadog</td>
                                <td>DogstatsD-Client</td>
                                <td><a href="https://github.com/DataDog/dogstatsd-csharp-client">Github</a></td>
                            </tr>
                            <tr>
                                <td>Jason Staten</td>
                                <td>Fleck Library</td>
                                <td><a href="https://github.com/statianzo/Fleck">Github</a></td>
                            </tr>
                            <tr>
                                <td>Google</td>
                                <td>Google CustomSearch API</td>
                                <td><a href="https://github.com/googleapis/google-api-dotnet-client">Github</a></td>
                            </tr>
                            <tr>
                                <td>HtmlAgilityPack Team</td>
                                <td>HtmlAgilityPack</td>
                                <td><a href="http://html-agility-pack.net">Html Agility Pack website</a></td>
                            </tr>
                            <tr>
                                <td>Damien Dennehy</td>
                                <td>Imgur API Client</td>
                                <td><a href="https://github.com/DamienDennehy/Imgur.API">Github</a></td>
                            </tr>
                            <tr>
                                <td><a href="https://miki.ai">Miki Team</a></td>
                                <td>Imghoard Client</td>
                                <td><a href="https://github.com/Mikibot/dotnet-miki-api/">Github</a></td>
                            </tr>
                            <tr>
                                <td>Pepijn van den Broek</td>
                                <td>Kitsu API Client</td>
                                <td><a href="https://github.com/KurozeroPB/Kitsu">Github</a></td>
                            </tr>
                            <tr>
                                <td>NodaTime Team</td>
                                <td>NodaTime</td>
                                <td><a href="https://nodatime.org/">NodaTime website</a></td>
                            </tr>
                            <tr>
                                <td>Akitaux</td>
                                <td>NTwitch</td>
                                <td><a href="https://github.com/Akitaux/NTwitch">Github</a></td>
                            </tr>
                            <tr>
                                <td>Justin Skiles</td>
                                <td>SteamWebAPI2</td>
                                <td><a href="https://github.com/babelshift/SteamWebAPI2">Github</a></td>
                            </tr>
                            <tr>
                                <td>Serenity</td>
                                <td>Weeb.net client</td>
                                <td><a href="https://github.com/Daniele122898/Weeb.net">Github</a></td>
                            </tr>
                            <tr>
                                <td>Alexey Golub</td>
                                <td>YoutubeExplode</td>
                                <td><a href="https://github.com/Tyrrrz/YoutubeExplode">Github</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}