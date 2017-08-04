package fi.gosu.ika.stats.controller;

import fi.gosu.ika.stats.domain.Town;
import fi.gosu.ika.stats.exceptions.TownDeleteForbiddenException;
import fi.gosu.ika.stats.service.SpyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Town Controller
 *
 * @author Joppe151617
 * @since 0.1.0
 */
@RestController
@RequestMapping("/town/")
@CrossOrigin
public class TownController {

    @Autowired
    private SpyService spyService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Town> getAll() {
        return spyService.findAllTowns();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Town addTown(@RequestBody Town town) {
        return spyService.addTown(town);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Town getOne(@PathVariable Long id) {
        return spyService.findOneTown(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public Town delete(@PathVariable Long id) {
        throw new TownDeleteForbiddenException();
    }

    @RequestMapping(value = "{id}/addLvlInfo", method = RequestMethod.POST)
    public Town addTownLvls(@PathVariable Long id,@RequestParam("wallLvl") int wallLvl, @RequestParam("warehouseLvl") int warehouseLvl)
    {return spyService.addTownLvls(id, wallLvl, warehouseLvl);}
}
